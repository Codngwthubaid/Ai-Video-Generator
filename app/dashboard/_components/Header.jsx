import React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font border px-10 py-5">
                <div className="container mx-auto flex justify-between flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className='text-3xl font-bold'>Reel<span className='text-orange-600'>AI</span></span> 
                    </Link>
                    <div className='flex items-center gap-x-5'>
                        <Button variant="outline" className="bg-orange-600 text-white text-base">Dashboard</Button>
                        <UserButton />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header