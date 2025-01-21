"use client"
import React, { useState } from 'react'
import TypingAnimation from "@/components/ui/typing-animation"
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'



const CreateNew = () => {

  const [formData, setformData] = useState([])
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setformData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }


  return (
    <div>
      <TypingAnimation className="text-center text-orange-600">Create New</TypingAnimation>

      <div className='flex flex-col gap-y-5 shadow-md w-10/12 mx-auto border border-gray-300 p-5 rounded-md'>
        {/* Select Video Topic */}
        <SelectTopic onUserSelect={onHandleInputChange} />

        {/* Select Video Style */}
        <SelectStyle onUserSelect={onHandleInputChange} />

        {/* Select Video Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />

        {/* Button */}
        <Button className=" bg-orange-600 text-base">Create</Button>
      </div>
    </div>
  )
}

export default CreateNew