import fs from "fs";
import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req) {

    const { text, id } = await req.json()
    const request = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        voice: { languageCode: "en-US" },
        input: { text: text },
        audioConfig: { audioEncoding: "MP3" },
    });

    const buffer = Buffer.from(await request.arrayBuffer());
    fs.writeFileSync('public/output.mp3', buffer); 
    console.log('Audio content written to file: public/output.mp3');

    return NextResponse.json({ result: "Success", filePath: "/output.mp3" });
}