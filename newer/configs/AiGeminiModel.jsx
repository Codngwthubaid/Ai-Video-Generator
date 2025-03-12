// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const generateScript = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Write a two different script of 30sec's video on the topic : \"Tech Careers\".\nGive me response in the json format and follow the below scehma :\n{ script : [ {content : \"\"} ] }\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"script\": [\n    {\n      \"content\": \"(Scene: Fast-paced montage of various tech workplaces - coding, designing, robotics lab, server room.)\\n\\n**(0-5 seconds) Upbeat, energetic music starts.**\\n\\n**Voiceover (V.O.):**  Tired of the same old grind? Want a career that's dynamic, innovative, and shapes the future?\\n\\n**(5-10 seconds) Visuals focus on diverse people working collaboratively, smiling and engaged.**\\n\\n**V.O.:**  Tech careers are booming! From software development to data science, cybersecurity to UX design, the possibilities are endless.\\n\\n**(10-20 seconds)  Quick cuts showcasing different tech tools and technologies - code on a screen, a 3D printer in action, a tablet displaying a design.**\\n\\n**V.O.:**  Solve real-world problems, build groundbreaking technology, and make a real impact. Learn new skills, collaborate with brilliant minds, and be at the forefront of innovation.\\n\\n**(20-25 seconds) Text on screen: \\\"Explore Tech Careers\\\" with a website address prominently displayed (e.g., TechCareers.com).**\\n\\n**V.O.:** Your tech adventure starts now! \\n\\n**(25-30 seconds) Music swells slightly. Scene: A young person smiling confidently at their laptop, with the website address still visible.  Fade to black.**\"\n    },\n    {\n      \"content\": \"(Scene: Opens with a single person looking thoughtfully at a blank computer screen. Soft, inquisitive music begins.)\\n\\n**(0-5 seconds) Visual: Close-up of the person's face, showing curiosity and potential.\\n\\n**Voiceover (V.O.):** What's *your* superpower?  Everyone has something unique to contribute.\\n\\n**(5-10 seconds) Visuals: Transitions to different individuals working on very different tech projects - one designing an app interface, another analyzing data on a dashboard, another assembling a circuit board.)\\n\\n**V.O.:** In tech, your unique skills are in high demand.  \\n\\n**(10-20 seconds) Visuals: Focus on problem-solving - brainstorming on a whiteboard, debugging code, testing a prototype. Music becomes slightly more upbeat and purposeful.)\\n\\n**V.O.:** It's not just about code. It's about creativity, critical thinking, and collaboration.  Tech needs storytellers, problem-solvers, and visionaries.\\n\\n**(20-25 seconds) Text on screen: \\\"Find Your Tech Fit\\\" with a QR code linking to a career aptitude quiz on a website (e.g., TechSkillsAssessment.org).**\\n\\n**V.O.:** Discover the tech role that's perfect for you.  Scan the code to get started.\\n\\n**(25-30 seconds) Visual: The person from the opening scene is now actively engaged with their computer, smiling and excited. The QR code and website address are still visible.  Music fades out on a hopeful note.**\"\n    }\n  ]\n}\n```" },
            ],
        },
        {
            role: "user",
            parts: [
                { text: "Write a two different script of 30sec's video on the topic : \"Tech Careers\".\nDont add any sence desc and any braces only give me in simple text / plain text\nGive me response in the json format and follow the below scehma :\n{ script : [ {content : \"\"} ] }" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"script\": [\n    {\n      \"content\": \"Want a career that's always evolving? Tech is calling! From coding to cloud computing, AI to cybersecurity, there's a place for you. Build the future, solve tough problems, and work with cutting-edge technology. Explore tech careers and unlock your potential! Visit TechCareersNow.com to learn more. Your future in tech starts today.\"\n    },\n    {\n      \"content\": \"Are you curious, creative, and ready to make a difference? Tech needs you! Design websites, develop apps, protect data, and more. No matter your skills, there's a tech career waiting. Discover your perfect fit with our career quiz! Scan the QR code or visit FindYourTechPath.org. Shape the future with tech!\"\n    }\n  ]\n}\n```" },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
