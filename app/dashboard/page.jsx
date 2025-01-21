"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CircleFadingArrowUp } from 'lucide-react'
import EmptyState from './_components/EmptyState'
import Link from 'next/link'
import TypingAnimation from "@/components/ui/typing-animation"

const Dashboard = () => {

    const [videoList, setVideoList] = useState([])

    return (
        <div className='p-5 border flex flex-col gap-5'>
            <div className='flex justify-between items-center gap-x-10'>
                <TypingAnimation className="text-lg font-semibold">Transform Your Ideas into Stunning Videos in Just Minutes! Experience the power of AI as it brings your vision to life with captivating visuals and seamless storytelling.</TypingAnimation>
                <Link href="/dashboard/create-new">
                    <Button className="bg-orange-600 hover:bg-white hover:text-black">
                        <CircleFadingArrowUp />
                        <span>Create New</span>
                    </Button>
                </Link>
            </div>
            <div>
                {videoList?.length == 0 && <div><EmptyState /></div>}
            </div>
        </div>
    )
}

export default Dashboard