import Image from 'next/image'
import React from 'react'
import Realistic from "@/public/Realistic.jpeg"
import Comic from "@/public/Comic.jpeg"
import Cartoon from "@/public/Cartoon.jpeg"
import WaterColor from "@/public/WaterColor.jpeg"
import GTA from "@/public/GTA.jpeg"

const SelectStyle = () => {

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
            <div className='border border-gray-300 p-4 rounded-md w-10/12 mx-auto shadow-md flex justify-between items-start flex-col gap-y-5'>
                <div className='flex justify-between w-full items-center'>
                    <div>
                        <h2 className='text-xl font-semibold'>Style</h2>
                        <div>Select the style of your video ?</div>
                    </div>
                    <div>
                        {options.map((name, image) => {
                            return (
                                <div key={name.name}>
                                    <Image src={image.image} alt={name.name} />
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