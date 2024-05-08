import { useTheme } from "next-themes"

export const NavBarHooks=()=>{
    const {setTheme, resolvedTheme}=useTheme()

    const handleDarkTheme=()=>{
        setTheme('dark')
    }

    const handleLightTheme=()=>{
        setTheme('light')
    }

    return{
        resolvedTheme, handleDarkTheme, handleLightTheme
    }
}