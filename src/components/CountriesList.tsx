import React, { useEffect, useState } from 'react'
import Country from './Country'
import { CountryType } from './Country'
import { useFetcher, useRouteLoaderData } from 'react-router-dom'

interface Props {
    countries: CountryType[],
    allCountries: CountryType[],
    // search: string
}

const CountiesList: React.FC<Props> = (props) => {
    // const fetcher = useFetcher()
    // const { data: fetcherData, state } = fetcher
    // const isSubmitting = state === 'submitting';
    // const { result } = useRouteLoaderData('root') as { data: CountryType[], result: number };
    // const [countries, setCountries] = useState(props.countries.slice(0, result));
    // useEffect(() => {
    //     if (fetcherData && fetcherData.data) {
    //         setCountries((prev) => [...prev, ...fetcherData.data]);
    //     }
    // }, [fetcherData])

    return (
        <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.countries.map(country => <Country name={country.name} population={country.population} region={country.region} capital={country.capital} key={country.name} flag={country.flag} allCountries={props.allCountries} />)}
            
        </div>
    )
}

export default CountiesList