"use client"
import React, { useState } from 'react'
import VideoTopic from './_components/VideoTopic'
import VideoStyle from './_components/VideoStyle'
import VideoVoice from './_components/VideoVoice'
import VideoCaption from './_components/VideoCaption'
import Preview from './_components/Preview'
import { Button } from '@/components/ui/button'
import { SparklesIcon } from 'lucide-react'
import axios from 'axios'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuthContext } from '@/app/provider'

const Page = () => {

    const [formData, setFormData] = useState()
    const CreateInitialVideoDetails = useMutation(api.videoData.CreateVideoData)
    const { user } = useAuthContext();
    const onHandleInputChange = (formField, formValue) => {
        setFormData(prev => ({ ...prev, [formField]: formValue }))
    }
    console.log(formData)

    const generateVideo = async () => {
        if (!formData?.Title || !formData?.Topic || !formData?.VideoStyle || !formData?.videoVoice || !formData?.videoCaption || !formData?.script) {
            console.log("Please fill all the fields")
            return;
        }

        const response = await CreateInitialVideoDetails({
            title: formData.title,
            topic: formData.topic,
            script: formData.script,
            videoStyle: formData.videoStyle,
            voice: formData.voice,
            caption: formData.caption,
            uid: user?._id,
            createdBy: user?.email
        })

        console.log("Video Details",response)

        // const result = await axios.post("/api/generate-video-data", { ...formData })
        // console.log(result);
    }

    return (
        <div>
            <h2 className='text-3xl font-bold my-5'>Create New Video</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5'>
                <div className='col-span-2 border p-5 rounded-lg h-[75vh] overflow-y-auto'>
                    <VideoTopic onHandleInputChange={onHandleInputChange} />
                    <VideoStyle onHandleInputChange={onHandleInputChange} />
                    <VideoVoice onHandleInputChange={onHandleInputChange} />
                    <VideoCaption onHandleInputChange={onHandleInputChange} />
                    <Button onClick={generateVideo} className={"my-3 w-full text-base cursor-pointer"}><SparklesIcon /> Generate Video</Button>
                </div>
                <div>
                    <Preview formData={formData} />
                </div>
            </div>
        </div>
    )
}

export default Page
