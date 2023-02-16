import React from 'react'
import Country from './Country'
import { CountryType } from './Country'

interface Props {
    countries: CountryType[],
    search: string
}

const CountiesList: React.FC<Props> = (props) => {
    const countries = props.countries.filter(country => country.name.toLowerCase().includes(props.search.toLowerCase()))

    return (
        <div className="grid grid-cols-1 gap-8 px-6">
            {countries.map(country => <Country name={country.name} population={country.population} region={country.region} capital={country.capital} key={country.name} flag={country.flag} allCountries={props.countries} />)}
        </div>
    )
}

export default CountiesList