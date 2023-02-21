import React, { useState, useEffect } from 'react'
import { json, LoaderFunction, useLoaderData, useFetcher, useRouteLoaderData, ActionFunction, useParams } from 'react-router-dom'
import HomeNav from '../components/HomeNav';
import CountiesList from '../components/CountriesList';
import { CountryType } from '../components/Country';

const Region = () => {
    const { data: allCountries } = useRouteLoaderData('root') as { data: CountryType[] };

    const countries = useLoaderData() as CountryType[]
    // const fetcher = useFetcher()
    // const { data: fetcherData, state } = fetcher
    // const isSubmitting = state === 'submitting';
    // const [countries, setCountries] = useState(data);

    // const params = useParams();
    // const region = params.regionId!

    // useEffect(() => {
    //     if (fetcherData && fetcherData.data) {
    //         setCountries((prev) => [...prev, ...fetcherData.data]);
    //     }
    // }, [fetcherData])

    // useEffect(() => {
    //     setCountries(data)
    // }, [data])
    // console.log(countries);
    

    return (
        <>
            <HomeNav />
            <CountiesList countries={countries} allCountries={allCountries} />
            {/* <fetcher.Form className="flex justify-center" action={`/region/${region}`} method="post" >
                <input disabled={isSubmitting} type="submit" value="Load more" name="loadMore" className={`cursor-pointer dark:text-slate-5 font-medium border-b ${isSubmitting && 'animate-ping'}`} />
            </fetcher.Form> */}
        </>
    )
}

export default Region

// let pages = 1
export const laoder: LoaderFunction = async ({ params }) => {
    const id = params.regionId
    const response = await fetch(`https://restcountries.com/v2/region/${id}`)
    if (!response.ok) {
        throw json({ errorMsg: 'Could not fetch data' }, { status: 500, statusText: 'Could not load' });
    }
    const data = await response.json();
    return data
}

// export const action: ActionFunction = async ({ params }) => {
//     pages++
//     const PAGE_SIZE = 20
//     const result = pages * PAGE_SIZE
//     const start = result - PAGE_SIZE
//     const id = params.regionId
//     const response = await fetch(`https://restcountries.com/v2/region/${id}`)
//     if (!response.ok) {
//         throw json({ errorMsg: 'Could not fetch data' }, { status: 500, statusText: 'Could not load' });
//     }
//     const data = await response.json();
//     return { data: data.slice(start, result) }
// }