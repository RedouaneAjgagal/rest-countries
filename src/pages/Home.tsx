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

  useEffect(() => {
    if (fetcherData && fetcherData.data) {
      setCountries((prev) => [...prev, ...fetcherData.data]);
    }
  }, [fetcherData])
  return (
    <>
      <HomeNav />
      <CountiesList countries={countries} allCountries={loadData} />
      <fetcher.Form className="flex justify-center" action="/" method="post" >
        <input disabled={isSubmitting} type="submit" value="Load more" name="loadMore" className={`cursor-pointer dark:text-slate-5 font-medium border-b ${isSubmitting && 'animate-ping'}`} />
      </fetcher.Form>
    </>
  )
}
export default Home