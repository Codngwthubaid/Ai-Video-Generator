import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog"
import Image from 'next/image'
import loader from "@/public/loader.gif"


const CustomLoading = ({ loading }) => {
    return (
        <AlertDialog open={loading}>
            <AlertDialogTitle>
                <AlertDialogContent>
                    <div className='flex flex-col h-32 items-center'>
                        <Image src={loader} alt="loading" width={70} height={70} />
                        <h2>Generating your video... Do not refresh</h2>
                    </div>
                </AlertDialogContent>
            </AlertDialogTitle>
        </AlertDialog>
    )
}

export default CustomLoading