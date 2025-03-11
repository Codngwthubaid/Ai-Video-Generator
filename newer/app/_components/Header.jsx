"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Hero from './Hero'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import Link from 'next/link'

export default function Header() {

    const { user } = useAuthContext()

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center m-5'>
                <div className='flex gap-x-1 items-center'>
                    <Image src="/logo.svg" alt="logo Logo" width={35} height={24} />
                    <h2 className='text-3xl font-bold'>Nuvgen</h2>
                </div>
                <div>
                    {!user
                        ?
                        <Authentication>
                            <Button className='cursor-pointer'>Get Started</Button>
                        </Authentication>
                        :
                        <div className='flex justify-center items-center gap-x-2'>
                            <Link href={"/dashboard"}>
                                <Button className='cursor-pointer'>Dashboard</Button>
                            </Link>
                            <Image src={user.photoURL} className='rounded-full' alt="logo Logo" width={35} height={24} />
                        </div>

                    }
                </div>
            </div>
            <Hero />
        </div>
    )
}
