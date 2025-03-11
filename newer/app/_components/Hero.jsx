import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Authentication from "./Authentication";

export default function Hero() {
    return (
        <div className=" flex flex-col gap-y-5 m-5">
            <h2 className="justify-center gap-x-3 pt-10 text-7xl font-bold flex items-center flex-col lg:flex-row">
                <div className="text-center">AI Youtube Short Video</div>
                <AuroraText>Generator</AuroraText>
            </h2>
            <div className="text-center text-lg font-medium">
                <TypingAnimation>🤖 Ai Video Generator is a platform that allows you to create short videos using AI. ⚡It is a simple and easy to use platform that allows you to create videos in minutes.</TypingAnimation>
            </div>
            <div className="flex justify-center gap-x-5 items-center">
                <Button variant={"secondary"} className={"cursor-pointer"}>Explore</Button>
                <Authentication>
                    <Button variant={"default"} className={"cursor-pointer"}>Get Started</Button>
                </Authentication>
            </div>
        </div >
    )
}