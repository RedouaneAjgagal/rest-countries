import CountryDetails from "../components/CountryDetails"
import { json, useNavigate, useLoaderData, LoaderFunction, useRouteLoaderData, useLocation } from 'react-router-dom'
import { CountryData } from "../components/CountryDetails";
import { FaArrowLeft } from 'react-icons/fa'
import { useEffect } from "react";

const Country = () => {
  const countries = useRouteLoaderData('root') as { alpha3Code: string, name: string }[];
  const data = useLoaderData() as [CountryData];
  const navigate = useNavigate()
  const [pullCountryData] = data;
  const bordersName = countries.filter(country => pullCountryData.borders?.includes(country.alpha3Code)).map(item => item.name)

  const countryData = {
    name: pullCountryData.name,
    flag: pullCountryData.flag,
    nativeName: pullCountryData.nativeName,
    population: pullCountryData.population,
    region: pullCountryData.region,
    subregion: pullCountryData.subregion,
    capital: pullCountryData.capital,
    topLevelDomain: pullCountryData.topLevelDomain,
    currencies: pullCountryData.currencies,
    languages: pullCountryData.languages,
    borders: bordersName,
  }

  const getBackHandler = () => {
    navigate(-1);
  }

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return (
    <div className="flex flex-col gap-16 items-start px-4">
      <button className="dark:bg-slate-700 px-8 py-1 shadow-md dark:shadow-slate-800 shadow-slate-400/50 flex items-center gap-2 bg-white" onClick={getBackHandler}><FaArrowLeft />Back</button>
      <CountryDetails CountryData={countryData} />
    </div>
  )
}

export default Country

export const loader = async (country: string) => {
  const countryName = country;
  const id = countryName.replace(/-/g, '%20')
  const response = await fetch(`https://restcountries.com/v2/name/${id}?fullText=true`);

  if (!response.ok) {
    throw json({ errorMsg: 'Could not load the country data' }, { status: 500 });
  }
  const data = await response.json();

  return data;
}