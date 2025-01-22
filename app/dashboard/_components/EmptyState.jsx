import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmptyState = () => {
    return (
        <div>
            <div className='border shadow-md rounded-md flex gap-2 flex-col justify-center items-center h-72'>
                <h1 className='text-2xl text-center'>You don't have any short video</h1>
                <Link href="/dashboard/create-new">
                    <Button className="bg-orange-600 hover:bg-white hover:text-black">Create Short Video</Button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyState