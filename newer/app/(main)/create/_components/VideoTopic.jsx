"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"

const VideoTopic = () => {

  const [selectedTopic,setSlectedTopic] = useState()
  
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

  return (
    <div>
      <div>
        <h2 className='font-semibold'>Project Title </h2>
        <Input className={"my-1"} placeholder='Enter project title ...' />
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
                  <Button className={`cursor-pointer  ${selectedTopic === items ? "border-2 shadow-2xl text-[#fbb03b] border-[#fbb03b] hover:text-[#fbb03b]" : ""}`} variant={"outline"} key={index} onClick={()=>{setSlectedTopic(items)}}>{items}</Button>
                )
              })}
            </div>
          </TabsContent>
          <TabsContent value="Own">
            <h2>Enter your own topic </h2>
            <Textarea placeholder="Enter your topic ..." />
          </TabsContent>
        </Tabs>
      </div>


    </div>
  )
}

export default VideoTopic