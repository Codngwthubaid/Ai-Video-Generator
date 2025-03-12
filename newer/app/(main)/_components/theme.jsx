"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Theme() {
    const { theme, setTheme } = useTheme()
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(theme === "dark")
    }, [theme])

    const handleToggle = () => {
        const newTheme = isDark ? "light" : "dark"
        setIsDark(!isDark)
        setTheme(newTheme)
    }

    return (
        <button 
            onClick={handleToggle}
            className="flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
        </button>
    )
}