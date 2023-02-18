import React from 'react'
import NavigateBtn from './NavigateBtn'

export interface CountryData {
    name: string,
    flag: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    topLevelDomain: string[],
    currencies: { name: string }[],
    languages: { name: string }[],
    borders?: string[]
}
interface Props {
    CountryData: CountryData
}

const CountryDetails: React.FC<Props> = (props) => {
    const languages = props.CountryData.languages?.map((language, index) => index === props.CountryData.languages.length - 1 ? language.name : `${language.name},`).join(' ');
    const currencies = props.CountryData.currencies?.map((currency, index) => index === props.CountryData.currencies.length - 1 ? currency.name : `${currency.name},`).join(' ');
    const topLevelDomain = props.CountryData.topLevelDomain?.map((tld, index) => index === props.CountryData.topLevelDomain.length - 1 ? tld : `${tld},`).join(' ');


    return (
        <article className='w-full grid gap-10 md:grid-cols-2 md:items-center md:gap-8 md:justify-between'>
            <div className='md:w-full md:max-w-[22rem] lg:max-w-[37rem]'>
                <img src={props.CountryData.flag} alt={`${props.CountryData.name} flag`} className='shadow-xl w-full' />
            </div>
            <div className='grid gap-10 md:gap-6'>
                <h1 className='font-bold text-3xl tracking-wide mt-4'>{props.CountryData.name}</h1>
                <div className='grid gap-10 md:grid-cols-2 md:gap-4'>
                    <div className='leading-8'>
                        <p>Native Name: <span className='dark:text-slate-400 text-slate-600/90'>{props.CountryData.nativeName}</span></p>
                        <p>Population: <span className='dark:text-slate-400 text-slate-600/90'>{props.CountryData.population.toLocaleString()}</span></p>
                        <p>Region: <span className='dark:text-slate-400 text-slate-600/90'>{props.CountryData.region}</span></p>
                        <p>Sub Region: <span className='dark:text-slate-400 text-slate-600/90'>{props.CountryData.subregion}</span></p>
                        <p>Capital: <span className='dark:text-slate-400 text-slate-600/90'>{props.CountryData.capital}</span></p>
                    </div>
                    <div className='leading-8'>
                        <p className='flex gap-1'>Top Level Domain:<span className='dark:text-slate-400 text-slate-600/90'>{topLevelDomain}</span></p>
                        <p className='flex gap-1'>Currencies:<span className='dark:text-slate-400 text-slate-600/90'>{currencies}</span></p>
                        <p className='flex gap-1'>Languages:<span className='dark:text-slate-400 text-slate-600/90'>{languages}</span></p>
                    </div>
                </div>
                <div className='lg:flex lg:items-center lg:gap-4'>
                    <h2 className='mb-5 font-semibold text-lg lg:mb-0 lg:w-full lg:max-w-[9rem]'>Border Countries:</h2>
                    <div className='flex gap-4 flex-wrap'>
                        {props.CountryData.borders?.length ? props.CountryData.borders?.map(border => <NavigateBtn key={border} border={border} />) : <p className='text-slate-400'>No borders..</p>}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CountryDetails