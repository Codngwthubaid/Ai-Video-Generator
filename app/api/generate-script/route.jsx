import { generateScript } from "@/configs/AiGeminiModel";
import { NextResponse } from "next/server";


const SCRIPT_PROMPT =`Write a two differnt script of 30 secs  video on the topic : "{topic}".
\nDon't add any sence desc and any braces only give me in plain text. 
\nGive me response in the json format and follow the below scehma :\n{ script : [ {content : \"\"} ] }\n`

export async function  POST(request) {
    const {topic} = await request.json()
    console.log(topic);

    const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic)
    const result = await generateScript.sendMessage(PROMPT)
    const response = result?.response?.text();
    console.log(response);  
    return NextResponse.json(JSON.parse(response))

}