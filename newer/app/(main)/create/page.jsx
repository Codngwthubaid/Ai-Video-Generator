"use client"
import React, { useState } from 'react'
import VideoTopic from './_components/VideoTopic'
import VideoStyle from './_components/VideoStyle'
import VideoVoice from './_components/VideoVoice'
import VideoCaption from './_components/VideoCaption'
import { Button } from '@/components/ui/button'
import { SparklesIcon } from 'lucide-react'

const Page = () => {

    const [formData, setFormData] = useState("")
    const onHandleInputChange = (formField, formValue) => {
        setFormData(prev => ({ ...prev, [formField]: formValue }))
    }
    console.log(formData)

    return (
        <div>
            <h2 className='text-3xl font-bold my-5'>Create New Video</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-2 border p-5 rounded-lg h-[75vh] overflow-y-auto'>
                    <VideoTopic onHandleInputChange={onHandleInputChange} />
                    <VideoStyle onHandleInputChange={onHandleInputChange} />
                    <VideoVoice onHandleInputChange={onHandleInputChange} />
                    <VideoCaption onHandleInputChange={onHandleInputChange} />
                    <Button className={"my-3 w-full text-base cursor-pointer"}><SparklesIcon /> Generate Video</Button>
                </div>
            </div>
        </div>
    )
}

export default Page
