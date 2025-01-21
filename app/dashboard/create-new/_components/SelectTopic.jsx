"use client"
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const SelectTopic = ({ onUserSelect }) => {

    const [selectedOption, setSelectedOption] = useState()

    const options = [
        "Custom Prompt",
        "Random AI Story",
        "Scary Story",
        "Historical Facts",
        "Bed Time Story",
        "Fairy Tale",
        "Motivation",
        "Inspiration",
        "Comedy",
        "Romantic",
        "Funny Facts",
    ]

    return (
        <div>
            <div className='flex justify-between items-start flex-col gap-y-5'>
                <div className='flex justify-between w-full items-center'>
                    <div>
                        <h2 className='text-xl font-semibold text-orange-600'>Content</h2>
                        <div>Select the topic of your video ?</div>
                    </div>
                    <div>
                        <Select onValueChange={(value) => {
                            setSelectedOption(value)
                            value != "Custom Prompt" && onUserSelect("Topic : ", value)
                        }}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Content Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => {
                                    return <SelectItem value={option} key={option}>{option}</SelectItem>
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {selectedOption == "Custom Prompt" && (
                    <div className='w-full'>
                        <Textarea 
                        onChange={(e)=>onUserSelect("Topic  : ", e.target.value)}
                        placeholder="Create a video of Ship in the ocean and ..." />
                    </div>)}
            </div>
        </div>
    )
}

export default SelectTopic