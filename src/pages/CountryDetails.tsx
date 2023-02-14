import CountryDetails from "../components/CountryDetails"
import { useNavigate } from 'react-router-dom'

const Country = () => {
  const navigate = useNavigate()
  const getBackHandler = () => {
    navigate("..");
  }
  return (
    <div className="flex flex-col gap-16 items-start px-4">
      <button className="bg-slate-700 px-8 py-1 shadow-md shadow-slate-800" onClick={getBackHandler}>Back</button>
      <CountryDetails />
    </div>
  )
}

export default Country