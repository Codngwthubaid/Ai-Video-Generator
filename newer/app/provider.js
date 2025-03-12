"use client";

import { auth } from "@/configs/firebase.config"
import { onAuthStateChanged } from "firebase/auth"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./_context/AuthContext"
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Provider({ children }) {

    const createUser = useMutation(api.users.CreateNewUser)
    const [user, setUser] = useState()
    useEffect(() => {
        const notLogIn = onAuthStateChanged(auth, async (user) => {
            console.log(user)
            
            const result = await createUser({ email: user?.email, name: user?.displayName, photoURL: user?.photoURL })
            console.log(result);
            setUser(result)
            
        })

        return () => notLogIn()
    }, [])

    return (
        <div>
            <AuthContext.Provider value={{ user }}>
                <NextThemesProvider
                    defaultTheme="dark"
                    attribute="class"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </NextThemesProvider>
            </AuthContext.Provider>
        </div>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context;
}
