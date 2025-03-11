import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='hidden md:block h-screen fixed mt-[77px]'>
                <SideNav/>
            </div>
            <div>
                <Header />
                <div className='md:ml-72'>
                {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout