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
    return (
        <article className='grid gap-10 md:grid-cols-2 md:items-center md:gap-8 md:justify-between md:w-full'>
            <div className='shadow-xl md:w-full md:max-w-[22rem] lg:max-w-[30rem]'>
                <img src={props.CountryData.flag} alt={`${props.CountryData.name} flag`} className='' />
            </div>
            <div className='grid gap-10 md:gap-6'>
                <h1 className='font-bold text-3xl tracking-wide mt-4'>{props.CountryData.name}</h1>
                <div className='grid gap-10 md:grid-cols-2 md:gap-4'>
                    <div className='leading-8'>
                        <p>Native Name: <span className='text-slate-400'>{props.CountryData.nativeName}</span></p>
                        <p>Population: <span className='text-slate-400'>{props.CountryData.population.toLocaleString()}</span></p>
                        <p>Region: <span className='text-slate-400'>{props.CountryData.region}</span></p>
                        <p>Sub Region: <span className='text-slate-400'>{props.CountryData.subregion}</span></p>
                        <p>Capital: <span className='text-slate-400'>{props.CountryData.capital}</span></p>
                    </div>
                    <div className='leading-8'>
                        <p>Top Level Domain:
                            {props.CountryData.topLevelDomain.map(tld => <span className='text-slate-400' key={tld}> {tld}</span>)}
                        </p>
                        <p>Currencies:
                            {props.CountryData.currencies.map(currency => <span className='text-slate-400' key={currency.name}> {currency.name},</span>)}
                        </p>
                        <p>Languages:
                            {props.CountryData.languages.map(language => <span className='text-slate-400' key={language.name}> {language.name},</span>)}
                        </p>
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