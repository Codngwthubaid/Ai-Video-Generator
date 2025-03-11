import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { text } = await req.json();
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Invalid input: 'text' field is required and must be a string." },
        { status: 400 }
      );
    }

    // Make the Deepgram API call
    const response = await fetch("https://api.deepgram.com/v1/speak", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text, // Include only the `text` field
        voice: "aura-asteria-en", // Optional: specify the voice model
        encoding: "linear16", // Optional: specify the audio encoding
        container: "wav", // Optional: specify the output container
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Deepgram API error:", errorDetails);
      return NextResponse.json(
        { error: errorDetails.err_msg || "Failed to generate speech" },
        { status: response.status }
      );
    }

    const result = await response.json();

    if (!result.audio) {
      throw new Error("No audio data returned by Deepgram.");
    }

    const audioBuffer = Buffer.from(result.audio, "base64");
    const fileName = `output-${Date.now()}.wav`;


    return NextResponse.json({
      result: "Success",
      fileName,
      audioBase64: audioBuffer.toString("base64"),
    });
  } catch (error) {
    console.error("Error generating speech:", error.message);
    return NextResponse.json(
      { error: "Failed to generate speech. Please check your input or API key." },
      { status: 500 }
    );
  }
}
