"use client"
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useAuthContext } from "../provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardProvider({ children }) {

    const router = useRouter()
    const { user } = useAuthContext()
    useEffect(() => {
        user && checkUserAuthenticate();
    }, [user])

    const checkUserAuthenticate = () => {
        if (!user) router.replace("/")
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
                <AppHeader />
                <div className="p-5">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
}