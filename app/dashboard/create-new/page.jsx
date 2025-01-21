"use client"
import React, { useState } from 'react'
import TypingAnimation from "@/components/ui/typing-animation"
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'



const CreateNew = () => {

  const [formData, setformData] = useState([])
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);

  }

  return (
    <div>
      <TypingAnimation className="text-center text-orange-600">Create New</TypingAnimation>

      <div className='flex flex-col gap-y-10'>
        {/* Select Video Topic */}

        <SelectTopic onUserSelect={onHandleInputChange} />

        {/* Select Video Style */}

        <SelectStyle onUserSelect={onHandleInputChange} />

        {/* Select Video Duration */}
        {/* Button */}
      </div>
    </div>
  )
}

export default CreateNew