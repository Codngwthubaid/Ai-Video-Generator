"use client"
import { videoOptions } from "@/constants/index"
import Image from "next/image"
import { useState } from "react"

export default function VideoStyle({ onHandleInputChange }) {

  const [selectedStyle, setSelectedStyle] = useState()

  return (
    <div>
      <h2 className='font-semibold mt-10'>Video Style </h2>
      <p className="text-gray-500">Select Video Style</p>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4">
        {videoOptions.map((item, index) => (
          <div key={index} className="items-center my-2 cursor-pointer" onClick={() => {setSelectedStyle(item.Name); onHandleInputChange("VideoStyle", item.Name)}}>
            <Image src={item.Image} alt={item.Name} width={100} height={100} className={`w-32 h-32 object-cover rounded-md hover:border-2 hover:scale-100 hover:transition-all ${selectedStyle === item.Name ? "border-2 border-[#fbb03b]" : ""}`}/>
            <span className="relative top-[-25px] left-1">{item.Name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
