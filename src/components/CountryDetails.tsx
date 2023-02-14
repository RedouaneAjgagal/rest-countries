import React from 'react'
import NavigateBtn from './NavigateBtn'

const CountryDetails = () => {
    return (
        <article className='grid gap-10'>
            <div className='shadow-xl'>
                <img src="https://flagcdn.com/jp.svg" alt="japan flag" />
            </div>
            <div className='leading-8'>
                <h1 className='font-bold text-3xl tracking-wide mb-5'>Japan</h1>
                <p>Native Name: <span className='text-slate-400'>jpn</span></p>
                <p>Population: <span className='text-slate-400'>125,836,021</span></p>
                <p>Region: <span className='text-slate-400'>Asia</span></p>
                <p>Sub Region: <span className='text-slate-400'>Eastern Asia</span></p>
                <p>Capital: <span className='text-slate-400'>Tokyo</span></p>
            </div>
            <div className='leading-8'>
                <p>Top Level Domain: <span className='text-slate-400'>.jp</span></p>
                <p>Currencies: <span className='text-slate-400'>JPY</span></p>
                <p>Languages: <span className='text-slate-400'>Japanese</span></p>
            </div>
            <div>
                <h2 className='mb-5 font-semibold text-lg'>Border Countries:</h2>
                <div className='flex gap-4 flex-wrap'>
                    <NavigateBtn />
                    <NavigateBtn />
                    <NavigateBtn />
                </div>
            </div>
        </article>
    )
}

export default CountryDetails