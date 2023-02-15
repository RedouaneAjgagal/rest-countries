import { json, useLoaderData, LoaderFunction} from "react-router-dom"
import Country from "../components/Country"
import Filter from "../components/Filter"
import Search from "../components/Search"
import { CountryType } from "../components/Country"

const Home = () => {
  const data = useLoaderData() as [CountryType];
  return (
    <>
      <div className="flex flex-col gap-8 px-4">
        <Search />
        <Filter />
      </div>
      <div className="grid grid-cols-1 gap-8 px-6">
        {data.map(country => <Country name={country.name} population={country.population} region={country.region} capital={country.capital} key={country.name} flag={country.flag} />)}
      </div>
    </>
  )
}

export default Home

export const loader = async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  if (!response.ok) {
    throw json({ errorMsg: 'Could not fetch data' }, { status: 500 });
  }
  const data = await response.json();
  return data
}