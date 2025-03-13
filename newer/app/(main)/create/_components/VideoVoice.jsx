import { Button } from "@/components/ui/button";
import { videoVoice } from "@/constants/index"
import { useState } from "react"
export default function VideoVoice({ onHandleInputChange }) {

  const [voiceSelected, setVoiceSelected] = useState()

  return (
    <div>
      <h2 className='font-semibold'>Select Voice</h2>
      <p className="text-gray-500">Slect Voice for your video</p>
      <div className="grid grid-cols-2 gap-x-5 overflow-y-scroll h-60">
        {videoVoice.map((item, index) => (
          <div key={index} className="my-2 cursor-pointer" onClick={() => {setVoiceSelected(item.Name); onHandleInputChange("videoVoice", item.Value);}}>
            <Button variant={"outline"} className={`w-full p-2 rounded-md cursor-pointer ${voiceSelected === item.Name ? "border-2 border-[#fbb03b] text-[#fbb03b]" : ""}`}>{item.Name}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}