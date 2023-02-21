import React from 'react'
import Country from './Country'
import { CountryType } from './Country'

interface Props {
    countries: CountryType[],
    allCountries: CountryType[]
}

const CountiesList: React.FC<Props> = (props) => {

    return (
        <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.countries.map(country => <Country name={country.name} population={country.population} region={country.region} capital={country.capital} key={country.name} flag={country.flag} allCountries={props.allCountries} />)}
        </div>
    )
}

export default CountiesList