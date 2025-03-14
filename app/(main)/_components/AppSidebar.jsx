"use client"
import { Button } from '@/components/ui/button'
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, Sidebar, SidebarGroupContent } from '@/components/ui/sidebar'
import { CircleDollarSignIcon, Gem, HouseIcon, LucideFileVideo, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/app/provider'

const AppSidebar = () => {

    const menuItems = [
        {
            name: "Dashboard",
            icon: HouseIcon,
            href: "/dashboard"
        },
        {
            name: "Create New Video",
            icon: LucideFileVideo,
            href: "/create"
        },
        {
            name: "Explore",
            icon: Search,
            href: "/explore"
        },
        {
            name: "Credits",
            icon: CircleDollarSignIcon,
            href: "/credits"
        }

    ]

    const { user } = useAuthContext()

    return (
        <Sidebar>
            <SidebarHeader>
                <div className='flex flex-col items-start gap-3'>
                    <div className=' flex justify-start items-center gap-3 w-full'>
                        <Image src={"/logo.svg"} width={35} height={24} alt={"logo"} />
                        <h2 className='text-3xl font-bold'>Nuvgen</h2>
                    </div>
                    <div>AI Youtube Short Video Generator</div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div>
                            <Link href={"/create"} >
                                <Button className={'cursor-pointer text-base hover:text-lg transition-all my-3'}>+ Create New Video</Button>
                            </Link>
                            {menuItems.map((item, index) => (
                                <div key={index} className={'hover:text-[#fbb03b] hover:font-semibold cursor-pointer text-base hover:text-lg transition-all w-full my-3'}>
                                    <Link href={item.href} className='flex gap-3 py-3 justify-start items-center'>
                                        <item.icon />
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className='border p-2 rounded-lg bg-slate-900 hover:border-[#fbb03b]'>
                    <div className='flex justify-between items-center'>
                        <Gem />
                        <h2>{user?.credits} Credits left</h2>
                    </div>
                    <div>
                        <Button className={'cursor-pointer text-base hover:text-lg transition-all my-3 w-full'}>Buy Credits</Button>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar