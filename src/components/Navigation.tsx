import { Link } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { useState } from 'react'

const Navigation = () => {
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.theme === 'dark' ? true : false);
    const darkModeHandler = () => {
        setDarkMode(prev => {
            return !prev
        });
    }
    darkMode ? localStorage.theme = 'dark' : localStorage.theme = 'light'

    localStorage.theme === 'dark' ? document.documentElement.classList.add('dark') :  document.documentElement.classList.remove('dark')

    return (
        <nav className='py-8 dark:bg-gray-700 shadow-md bg-white'>
            <div className='w-full max-w-[100rem] flex justify-between items-center m-auto px-4 sm:px-6'>
                <Link to={'/'} className='font-semibold tracking-wide'>Where in the world?</Link>
                <button className='flex items-center gap-2 font-medium tracking-wide' onClick={darkModeHandler}><FaMoon /> Dark Mode</button>
            </div>
        </nav>
    )
}

export default Navigation