"use client"
import React from 'react';
import { LayoutDashboard, LogIn } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { CircleFadingArrowUp } from 'lucide-react';
import { BadgePlus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideNav = () => {
    const menuOptions = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            id: 2,
            name: 'Create-New',
            path: '/create-new',
            icon: BadgePlus,
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/upgrade',
            icon: CircleFadingArrowUp,
        },
        {
            id: 4,
            name: 'Account',
            path: '/account',
            icon: CircleUserRound,
        },
    ];

    const path = usePathname();
    console.log(path);

    return (
        <div className='border w-72 h-screen shadow-md p-5'>
            <div className='flex flex-col gap-5'>
                {menuOptions.map((items) => (
                    <Link href={items.path} key={items.id}>
                        <div className={`flex gap-2 p-4 rounded-lg hover:text-white items-center cursor-pointer hover:bg-orange-500 ${path === items.path && 'bg-orange-500 text-white'}`}>
                            <items.icon size='24' />
                            <span>{items.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideNav;