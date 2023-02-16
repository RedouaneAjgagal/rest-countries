import { json, useRouteLoaderData } from "react-router-dom"
import Filter from "../components/Filter"
import Search from "../components/Search"
import { CountryType } from "../components/Country"
import CountiesList from "../components/CountiesList"

const Home = () => {
  const data = useRouteLoaderData('root') as CountryType[]
  // const data = useLoaderData() as CountryType[];

  return (
    <>
      <div className="flex flex-col gap-8 px-4">
        <Search />
        <Filter />
      </div>
      <CountiesList countries={data} />
    </>
  )
}
export default Home