import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaSortDown } from 'react-icons/fa'

const Filter = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const visibleHandler = () => {
        setIsVisible((prev) => !prev);
    }
    // const [searchParams] = useSearchParams();
    // const searchRegion = searchParams.get('region');
    // const region = `${searchRegion?.slice(0, 1).toUpperCase()}${searchRegion?.slice(1).toLowerCase()}`;

    const params = useParams();
    const getRegion = params.regionId;
    const region = `${getRegion?.slice(0,1).toUpperCase()}${getRegion?.slice(1).toLowerCase()}`

    return (
        <div className='flex gap-6 items-end md:w-full md:justify-end'>
            <div className='w-full max-w-[16rem] grid gap-2 relative'>
                <button onClick={visibleHandler} className='dark:bg-gray-700 rounded-lg dark:shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] py-4 px-6 flex justify-between w-full items-center bg-white shadow-[0_0_1px_.6rem_rgb(0,0,0,0.02)]'>
                    {getRegion ? <span>{region === 'Americas' ? 'America' : region}</span> : <span>Filter by Region</span>}
                    <span className='flex items-center -mt-1'><FaSortDown /></span>
                </button>
                {isVisible &&
                    <ul onClick={visibleHandler} className='dark:bg-gray-700 rounded-lg dark:shadow-[0_5px_1px_.6rem_rgb(0,0,0,0.05)] shadow-[0_0_1px_.6rem_rgb(0,0,0,0.02)] absolute w-full top-[3.75rem] bg-white z-10'>
                        <li><Link to={'/'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>All</Link></li>
                        <li><Link to={'/region/africa'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Africa</Link></li>
                        <li><Link to={'/region/americas'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>America</Link></li>
                        <li><Link to={'/region/asia'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Asia</Link></li>
                        <li><Link to={'/region/europe'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Europe</Link></li>
                        <li><Link to={'/region/oceania'} className='block px-6 py-2 hover:bg-gray-800/20 ease-in-out duration-200'>Oceania</Link></li>
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