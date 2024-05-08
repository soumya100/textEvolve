
import { Moon, Sun } from 'lucide-react'
import { FC } from 'react'

interface NavBarProps {
    theme: string | undefined
    handleDarkTheme(): void
    handleLightTheme(): void
}

const NavBar: FC<NavBarProps> = ({ handleDarkTheme, handleLightTheme, theme }) => {
    return <nav className='flex justify-between h-12 px-10 bg-white border-b border-gray-200 z-10 sticky top-0 left-0 shadow items-center backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <h1 className='text-red-600 font-bold text-lg'>
            Evolve <span className='bg-green-400 text-white px-2 py-1'> Text </span>
        </h1>
        {theme !== undefined && theme === 'dark' ? (
            <button onClick={handleLightTheme}>
                <Sun />
            </button>
        ) :
           <button onClick={handleDarkTheme}>
            <Moon />
           </button> }
    </nav>
}

export default NavBar