"use client"
import { useAuthContext } from '@/app/provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import React from 'react'
import Theme from './theme'

const AppHeader = () => {

    const { user } = useAuthContext()

    return (
        <div className='flex justify-between items-center w-full p-3'>
            <SidebarTrigger className={"cursor-pointer"} />
            <div className='flex gap-x-2'>
                <Theme />
                {user?.photoURL && (
                    <Image
                        src={user.photoURL}
                        alt="user image"
                        width={35}
                        height={24}
                        className='rounded-full'
                    />
                )}
            </div>
        </div>
    )
}

export default AppHeader