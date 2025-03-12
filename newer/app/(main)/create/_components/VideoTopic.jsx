"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { Loader, SparklesIcon } from 'lucide-react'
import { videoTopics } from "@/constants/index"
import axios from 'axios'

export default function VideoTopic({ onHandleInputChange }) {

  const [selectedTopic, setSlectedTopic] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [script, setScript] = useState()
  const [selectedScriptIndex, setSelectedScriptIndex] = useState()

  const generateScript = async () => {
    setIsLoading(true)
    setSelectedScriptIndex(null)
    try {
      console.log("generate script");
      const result = await axios.post("/api/generate-script", { topic: selectedTopic })
      console.log(result.data?.script)
      setScript(result.data?.script)
    }
    catch (error) {
      console.log(error);
    }
    setIsLoading(false)
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

        <div>
          {script?.length > 0 && (
            <div className='my-4 font-bold'>
              <h2>Select the Script</h2>
              <div className='grid grid-cols-2 gap-3'>
                {script.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className='text-gray-500 font-semibold'>Script - {index + 1}</div>
                      <div className={`line-clamp-4 border p-2 rounded-lg font-light ${selectedScriptIndex === index ? "border-2 cursor-pointer shadow-2xl text-[#fbb03b] border-[#fbb03b] hover:text-[#fbb03b]" : ""}`}
                        onClick={() => setSelectedScriptIndex(index)} readOnly >{item.content}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>


      </div>
      <div>
        {!script && <Button
          disabled={!selectedTopic || isLoading}
          className={"cursor-pointer"}
          onClick={generateScript}
        >
          {isLoading ? <Loader className='animate-spin' /> : <SparklesIcon />}  Generate Script
        </Button>
        }
      </div>
    </div>
  )
}
