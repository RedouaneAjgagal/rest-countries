import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Filter = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const visibleHandler = () => {
        setIsVisible((prev) => !prev);
    }
    return (
        <div className='w-full max-w-[16rem] grid gap-2 relative'>
            <button onClick={visibleHandler} className='bg-gray-700 rounded-lg shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] py-4 px-6 flex justify-between w-full'>
                <span>Filter by Region</span>
                <span>Icn</span>
            </button>
            {isVisible &&
                <ul className='bg-gray-700 rounded-lg shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] py-3 absolute w-full top-[3.75rem]'>
                    <li><Link to={'?region=africa'} className='block px-6 py-1 hover:bg-gray-800/20 ease-in-out duration-200'>Africa</Link></li>
                    <li><Link to={'?region=america'} className='block px-6 py-1 hover:bg-gray-800/20 ease-in-out duration-200'>America</Link></li>
                    <li><Link to={'?region=asia'} className='block px-6 py-1 hover:bg-gray-800/20 ease-in-out duration-200'>Asia</Link></li>
                    <li><Link to={'?region=europe'} className='block px-6 py-1 hover:bg-gray-800/20 ease-in-out duration-200'>Europe</Link></li>
                    <li><Link to={'?region=oceania'} className='block px-6 py-1 hover:bg-gray-800/20 ease-in-out duration-200'>Oceania</Link></li>
                </ul>
            }

        </div>
    )
}

export default Filter