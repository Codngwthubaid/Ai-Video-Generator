"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CircleFadingArrowUp } from 'lucide-react'
import EmptyState from './_components/EmptyState'
import {AuroraText} from '@/components/ui/aurora-text'

const Dashboard = () => {

    const [videoList, setVideoList] = useState([])

    return (
        <div className='p-5 border flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
                <div><AuroraText className="text-4xl font-bold">Create With ReelAI</AuroraText></div>
                <Button className="bg-orange-600 hover:bg-white hover:text-black">
                    <CircleFadingArrowUp />
                    <span>Create New</span>
                </Button>
            </div>
            <div>
                {videoList?.length == 0 && <div><EmptyState /></div>}
            </div>
        </div>
    )
}

export default Dashboard