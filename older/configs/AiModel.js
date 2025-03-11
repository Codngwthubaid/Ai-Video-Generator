const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Write a script to generate 30 seconds video on topic : \"Interesting historical story\" along with AI Image prompt in \"Realistic\" format for each scene and give me result in JSON format with imagePrompt and ContextText as field, No plain text\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"scenes\": [\n    {\n      \"imagePrompt\": \"Realistic, wide shot, a bustling marketplace in ancient Baghdad, circa 9th century. Merchants are selling spices, silks, and pottery. People in traditional attire are haggling and socializing. The architecture is intricate, with arched doorways and clay buildings. The overall lighting is warm and sunny.\",\n      \"contextText\": \"Centuries ago, Baghdad was the center of the world, a vibrant hub of trade and knowledge.\"\n    },\n     {\n      \"imagePrompt\": \"Realistic, close up shot, an Arab scholar, with a long beard and spectacles, meticulously studying ancient Greek texts by candlelight in a dimly lit library. Stacks of scrolls and books are surrounding him. His expression is focused and thoughtful.\",\n       \"contextText\": \"Here, scholars diligently preserved and translated ancient wisdom, making it their own.\"\n    },\n    {\n      \"imagePrompt\": \"Realistic, medium shot, a skilled Arab mathematician, with a pen and parchment, solving complex algebraic equations. Geometric shapes and numbers are drawn around him. The background is a study with mathematical instruments.\",\n      \"contextText\": \"Their advancements in mathematics shaped our understanding of the world, and are still in use today.\"\n   },\n   {\n      \"imagePrompt\":\"Realistic, medium shot, a group of Arab astronomers using an astrolabe and other celestial instruments on a rooftop observatory at night. Stars are visible in the clear night sky. They are pointing towards the heavens with focused looks\",\n      \"contextText\": \"Their meticulous observations of the stars led to remarkable leaps in astronomy.\"\n   },\n    {\n        \"imagePrompt\": \"Realistic, wide shot, a majestic camel caravan traveling through the desert, carrying goods towards the city of Baghdad. The golden sunlight of sunset is painting the sand dunes. The scene is vast and awe-inspiring.\",\n        \"contextText\": \"And this thirst for knowledge, fueled by trade and ingenuity, created a golden age of scientific achievements.\"\n    }\n  ]\n}\n```\n" },
            ],
        },
    ],
});
