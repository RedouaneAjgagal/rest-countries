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
    topLevelDomain: [string],
    currencies: { name: string }[],
    languages: { name: string }[],
    borders?: [string]
}
interface Props {
    CountryData: CountryData
}

const CountryDetails: React.FC<Props> = (props) => {
    return (
        <article className='grid gap-10'>
            <div className='shadow-xl'>
                <img src={props.CountryData.flag} alt={`${props.CountryData.name} flag`} />
            </div>
            <div className='leading-8'>
                <h1 className='font-bold text-3xl tracking-wide mb-5'>{props.CountryData.name}</h1>
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
            <div>
                <h2 className='mb-5 font-semibold text-lg'>Border Countries:</h2>
                <div className='flex gap-4 flex-wrap'>
                    {props.CountryData.borders?.map(border => <NavigateBtn key={border} border={border} />)}
                </div>
            </div>
        </article>
    )
}

export default CountryDetails