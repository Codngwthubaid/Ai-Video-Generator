import { Button } from "@/components/ui/button"
import { videoCaptions } from "@/constants/index"
import { cn } from "@/lib/utils"
import { useState } from "react"
export default function VideoCaption({onHandleInputChange}) {

  const [captionSelected, setCaptionSelected] = useState()

  return (
    <div>
      <h2 className='font-semibold mt-10'>Select Captions</h2>
      <p className="text-gray-500">Slect Voice for your video</p>
      <div className="grid grid-cols-2 gap-x-5 overflow-y-scroll h-60">
        {
          videoCaptions.map((item, index) => (
            <div key={index} className="my-2 cursor-pointer"
              onClick={() => { setCaptionSelected(item.Name); onHandleInputChange("videoCaption", item); }}>
              <Button variant={"outline"} className={cn(item.Style, `w-full py-5 rounded-md cursor-pointer ${captionSelected === item.Name ? "border-2 border-[#fbb03b] text-[#fbb03b]" : ""}`)}>{item.Name}</Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}