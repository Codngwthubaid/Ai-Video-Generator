import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL='https://aigurulab.tech';
export const generateVideoData = inngest.createFunction(
    { id: "generate-video-data" },
    { event: "generate-video-data" },
    async ({ event, step }) => {



        // Generate Audio File MP3
        const GenerateAudioFile = await step.run(
            "generate-audio-file",
            async() => {
                const result = await axios.post(BASE_URL+'/api/text-to-speech',
                    {
                        input: script,
                        voice: videoVoice
                    },
                    {
                        headers: {
                            'x-api-key': process.env.NEXT_PUBLIC_AI_GURU_LABS_API_KEY, 
                            'Content-Type': 'application/json',
                        },
                    })
                 console.log(result.data.audio) //Output Result: Audio Mp3 Url
                return result.data.audio;
            }
        )
        // Generate Captions

        // Generate Image from Script

        // Generate Imgage from AI Model

        // Save data into Convex

        return GenerateAudioFile
    }
)