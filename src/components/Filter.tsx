import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const visibleHandler = () => {
        setIsVisible((prev) => !prev);
    }
    const [searchParams] = useSearchParams();
    const searchRegion = searchParams.get('region');
    const region = `${searchRegion?.slice(0, 1).toUpperCase()}${searchRegion?.slice(1).toLowerCase()}`;


    return (
        <div className='flex gap-6 items-end'>
            <div className='w-full max-w-[16rem] grid gap-2 relative'>
                <button onClick={visibleHandler} className='bg-gray-700 rounded-lg shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] py-4 px-6 flex justify-between w-full'>
                    {searchRegion ? <span>{region === 'Americas' ? 'America' : region}</span> : <span>Filter by Region</span>}
                    <span>Icn</span>
                </button>
                {isVisible &&
                    <ul onClick={visibleHandler} className='bg-gray-700 rounded-lg shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] absolute w-full top-[3.75rem]'>
                        <li><Link to={'?region=africa'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Africa</Link></li>
                        <li><Link to={'?region=americas'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>America</Link></li>
                        <li><Link to={'?region=asia'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Asia</Link></li>
                        <li><Link to={'?region=europe'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Europe</Link></li>
                        <li><Link to={'?region=oceania'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Oceania</Link></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Filter


// EU (European Union)
// EFTA (European Free Trade Association)
// CARICOM (Caribbean Community)
// PA (Pacific Alliance)
// AU (African Union)
// USAN (Union of South American Nations)
// EEU (Eurasian Economic Union)
// AL (Arab League)
// ASEAN (Association of Southeast Asian Nations)
// CAIS (Central American Integration System)
// CEFTA (Central European Free Trade Agreement)
// NAFTA (North American Free Trade Agreement)
// SAARC (South Asian Association for Regional Cooperation)