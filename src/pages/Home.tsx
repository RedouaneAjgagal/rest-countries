import { useRouteLoaderData } from "react-router-dom"
import Filter from "../components/Filter"
import Search from "../components/Search"
import { CountryType } from "../components/Country"
import CountiesList from "../components/CountriesList"
import { useState } from "react"

const Home = () => {
  const data = useRouteLoaderData('root') as CountryType[]
  const [search, setSearch] = useState('')
  const searchedCountry = (value: string) => {
    setSearch(value)
  }
  
  return (
    <>
      <div className="flex flex-col gap-8 px-4 md:flex-row md:justify-between md:px-6">
        <Search searchedCountry={searchedCountry} />
        <Filter />
      </div>
      <CountiesList countries={data} search={search} />
    </>
  )
}
export default Home