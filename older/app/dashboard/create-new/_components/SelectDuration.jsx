import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectDuration = ({onUserSelect}) => {
    return (
        <div>
            <div className='flex justify-between w-full items-center'>
                <div>
                    <h2 className='text-xl font-semibold text-orange-600'>Duration</h2>
                    <div>Select the duration of your video ?</div>
                </div>
                <div>
                    <Select onValueChange={(value) => {
                        value != "Custom Prompt" && onUserSelect("Duration", value)
                    }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Content Duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30 seconds">30</SelectItem>
                            <SelectItem value="60 seconds">60</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default SelectDuration