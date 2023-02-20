import { useRouteLoaderData, useFetcher } from "react-router-dom"
import Filter from "../components/Filter"
import Search from "../components/Search"
import { CountryType } from "../components/Country"
import CountiesList from "../components/CountriesList"
import { useState, useEffect } from "react"
const Home = () => {
  const fetcher = useFetcher()
  const { data: fetcherData, state } = fetcher
  const isSubmitting = state === 'submitting';
  const { data: loadData, result } = useRouteLoaderData('root') as { data: CountryType[], result: number };
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState(loadData.slice(0, result));
  const searchedCountry = (value: string) => {
    setSearch(value);
  }
  useEffect(() => {
    if (fetcherData && fetcherData.data) {
      setCountries((prev) => [...prev, ...fetcherData.data]);
    }
  }, [fetcherData])

  return (
    <>
      <div className="flex flex-col gap-8 px-4 md:flex-row md:justify-between md:px-6">
        <Search searchedCountry={searchedCountry} />
        <Filter />
      </div>
      <CountiesList countries={countries} search={search} />
      {<fetcher.Form className="flex justify-center" action="/" method="post" >
        <input disabled={isSubmitting} type="submit" value="Load more" name="loadMore" className={`cursor-pointer dark:text-slate-5 font-medium border-b ${isSubmitting && 'animate-ping'}`} />
      </fetcher.Form>}
    </>
  )
}
export default Home