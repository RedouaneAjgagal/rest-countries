import React, { useState } from 'react'
import { json, LoaderFunction, useLoaderData, useFetcher, useRouteLoaderData, ActionFunction, useParams } from 'react-router-dom'
import HomeNav from '../components/HomeNav';
import CountiesList from '../components/CountriesList';
import { CountryType } from '../components/Country';

const Region = () => {
    const [searched, setSearched] = useState('');
    const searchedCountry = (value: string) => {
        setSearched(value)
    }
    const { data: allCountries } = useRouteLoaderData('root') as { data: CountryType[] };
    const countries = useLoaderData() as CountryType[]

    const searchedCountries = countries.filter(country => country.name.toLowerCase().includes(searched.toLowerCase()))
    return (
        <>
            <HomeNav searchedCountry={searchedCountry} />
            <CountiesList countries={searched === '' ? countries : searchedCountries} allCountries={allCountries} />
            {searched && searchedCountries.length === 0 && <h1 className='text-center text-lg'>No country match "{searched}"</h1>}
        </>
    )
}

export default Region



export const laoder: LoaderFunction = async ({ params }) => {
    const id = params.regionId
    const response = await fetch(`https://restcountries.com/v2/region/${id}`)
    if (!response.ok) {
        throw json({ errorMsg: 'Could not fetch data' }, { status: 500, statusText: 'Could not load' });
    }
    const data = await response.json();
    return data
}