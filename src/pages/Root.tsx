import { Outlet, json, ActionFunction, LoaderFunction } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { CountryType } from '../components/Country'

const Root = () => {
    return (
        <div>
            <Navigation />
            <main className='w-full max-w-[100rem] m-auto flex flex-col gap-10 py-8'>
                <Outlet />
            </main>
        </div>
    )
}

export default Root
let pages = 1;

const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v2/all`);
    if (!response.ok) {
        throw json({ errorMsg: 'Could not fetch data' }, { status: 500, statusText: 'Could not load' });
    }
    const data = await response.json();
    return data
}

export const loader: LoaderFunction = async () => {
    const PAGE_SIZE = 20
    const result = pages * PAGE_SIZE
    const fetchedData = await fetchData();
    return { data: fetchedData, result }
}



export const action: ActionFunction = async () => {
    pages++
    const PAGE_SIZE = 20
    const result = pages * PAGE_SIZE
    const start = result - PAGE_SIZE
    const fetchedData = await fetchData()
    return { data: fetchedData.slice(start, result), result }
}