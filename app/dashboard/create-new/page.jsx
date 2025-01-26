"use client"
import React, { useState } from 'react'
import TypingAnimation from "@/components/ui/typing-animation"
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomLoading from './_components/CustomLoading'

const CreateNew = () => {

  const [formData, setformData] = useState([])
  const [loading, setLoading] = useState(false)
  const [videoScript, setVideoScript] = useState()


  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setformData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    getVideoScript()
  }

  const getVideoScript = async () => {
    try {
      setLoading(true)
      const prompt = 'Write a script to generate ' + formData.Duration + ' seconds video on topic : ' + formData.Topic + ' story along with AI Image prompt in ' + formData.ImageStyle + ' format for each scene and give me result in JSON format with imagePrompt and ContextText as field, No plain text'
      console.log(prompt);
      let result = await axios.post("/api/get-video-script", { prompt: prompt }).then(res => {
        console.log("Transformed Data:", res.data.scenes);
        setVideoScript(res.data.scenes)
        generateAuidoFile(res.data.scenes)
      })
      setLoading(false)
    } catch (error) {
      console.error("Error fetching video script:", error);
    }
  }


  const generateAuidoFile = async (videoScriptData) => {
    let script = "";
    videoScriptData.forEach(index => {
      script += index.contextText + " ";
    })
    console.log("Script:", script);
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
          <Button onClick={onCreateClickHandler} className=" bg-orange-600 text-base">Create</Button>
        </div>

        <CustomLoading loading={loading} />
      </div>
    )
  }

  export default CreateNew