import { useRouteLoaderData, useFetcher } from "react-router-dom"
import { CountryType } from "../components/Country"
import CountiesList from "../components/CountriesList"
import { useState, useEffect } from "react"
import HomeNav from "../components/HomeNav"
const Home = () => {
  const fetcher = useFetcher()
  const { data: fetcherData, state } = fetcher
  const isSubmitting = state === 'submitting';
  const { data: loadData, result } = useRouteLoaderData('root') as { data: CountryType[], result: number };
  const [countries, setCountries] = useState(loadData.slice(0, result));
  const [searched, setSearched] = useState('');
  const searchedCountries = loadData.filter(country => country.name.toLowerCase().includes(searched.toLowerCase()))

  const searchedCountry = (value: string) => {
    setSearched(value)
  }
  useEffect(() => {
    if (fetcherData) {
      setCountries((prev) => [...prev, ...fetcherData]);
    }
  }, [fetcherData])
  return (
    <>
      <HomeNav searchedCountry={searchedCountry} />
      <CountiesList countries={searched === '' ? countries : searchedCountries} allCountries={loadData} />
      {!searched && <fetcher.Form className="flex justify-center" action="/" method="post" >
        <input disabled={isSubmitting} type="submit" value="Load more" name="loadMore" className={`cursor-pointer dark:text-slate-5 font-medium border-b ${isSubmitting && 'animate-ping'}`} />
      </fetcher.Form>}
      {searched && searchedCountries.length === 0 && <h1 className='text-center text-lg'>No country match "{searched}"</h1>}
    </>
  )
}
export default Home