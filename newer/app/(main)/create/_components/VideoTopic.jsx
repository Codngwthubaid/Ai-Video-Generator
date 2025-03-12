"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { SparklesIcon } from 'lucide-react'
import axios from 'axios'

const VideoTopic = ({ onHandleInputChange }) => {

  const [selectedTopic, setSlectedTopic] = useState()

  const videoTopics = [
    "AI Advancements",
    "Space Missions",
    "Tech Careers",
    "Global Tourism",
    "Home Cooking",
    "Climate Crisis",
    "Gaming Trends",
    "Fitness Routines",
    "Digital Evolution",
    "Sustainable Living",
    "Crypto Markets",
    "Nature Protection",
    "Photo Skills",
    "EV Adoption",
    "Mental Wellness"
  ];

  const generateScript = async() =>{
    console.log("generate script");
    const result = await axios.post("/api/generate-script", {topic : selectedTopic}) 
    console.log(result.data); 
  }

  return (
    <div>
      <div>
        <h2 className='font-semibold'>Project Title </h2>
        <Input className={"my-1"} placeholder='Enter project title ...' onChange={(e) => onHandleInputChange("Title", e?.target.value)} />
      </div>
      <div className='my-5'>
        <h2 className='font-semibold'>Video Topic </h2>
        <p className='text-gray-500 mb-2'>Select topic for your video</p>

        <Tabs defaultValue="Suggestions" className="w-full">
          <TabsList className={"my-1"}>
            <TabsTrigger className={"cursor-pointer"} value="Suggestions">Suggestions</TabsTrigger>
            <TabsTrigger className={"cursor-pointer"} value="Own">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="Suggestions">
            <div className='flex flex-wrap gap-3'>
              {videoTopics.map((items, index) => {
                return (
                  <Button className={`cursor-pointer  ${selectedTopic === items ? "border-2 shadow-2xl text-[#fbb03b] border-[#fbb03b] hover:text-[#fbb03b]" : ""}`} variant={"outline"} key={index} onClick={() => { setSlectedTopic(items); onHandleInputChange("Topic", items) }}>{items}</Button>
                )
              })}
            </div>
          </TabsContent>
          <TabsContent value="Own">
            <h2>Enter your own topic </h2>
            <Textarea placeholder="Enter your topic ..." onChange={(e) => { onHandleInputChange("Topic", e?.target.value) }} />
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Button className={"cursor-pointer"} onClick={generateScript}> <SparklesIcon/> Generate Script</Button>
      </div>
    </div>
  )
}

export default VideoTopic