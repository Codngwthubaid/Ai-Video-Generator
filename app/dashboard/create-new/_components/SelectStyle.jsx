"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Realistic from "@/public/Realistic.jpeg"
import Comic from "@/public/Comic.jpeg"
import Cartoon from "@/public/Cartoon.jpeg"
import WaterColor from "@/public/WaterColor.jpeg"
import GTA from "@/public/GTA.jpeg"

const SelectStyle = ({onUserSelect}) => {

    const [selectedOption, setSelectedOption] = useState()
    const options = [
        {
            name: "Realistic",
            image: Realistic
        },
        {
            name: "Comic",
            image: Comic
        },
        {
            name: "Cartoon",
            image: Cartoon
        },
        {
            name: "WaterColor",
            image: WaterColor
        },
        {
            name: "GTA",
            image: GTA
        },
    ]

    return (
        <div>
            <div className='flex justify-between items-start flex-col gap-y-5'>
                <div className='flex justify-between w-full gap-y-5 flex-col'>
                    <div>
                        <h2 className='text-xl font-semibold text-orange-600'>Style</h2>
                        <div>Select the style of your video ?</div>
                    </div>
                    <div className='flex gap-x-5'>
                        {options.map((option) => {
                            return (
                                <div key={option.name} className={`hover:scale-105 cursor-pointer transition-all relative  ${selectedOption == option.name && "border-4 border-orange-600 rounded-xl"}`}>
                                    <Image
                                        onClick={() => {
                                            setSelectedOption(option.name)
                                            onUserSelect("Image Style : ", option.name)
                                        }}
                                        className='h-36 rounded-lg border object-cover'
                                        src={option.image}
                                        alt={option.name}
                                        width={120}
                                        height={120} />
                                    <h2 className='bg-black text-white absolute w-full bottom-0 rounded-b-lg text-center '>{option.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectStyle