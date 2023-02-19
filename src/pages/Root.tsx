import { Outlet, json, ActionFunction, LoaderFunction } from 'react-router-dom'
import Navigation from '../components/Navigation'

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

export const loader = async (url: string) => {
    const searchParams = new URL(url).searchParams;
    const region = searchParams.get('region') ? `region/${searchParams.get('region')}` : 'all';
    const response = await fetch(`https://restcountries.com/v2/${region}`);
    if (!response.ok) {
        throw json({ errorMsg: 'Could not fetch data' }, { status: 500 });
    }
    const data = await response.json();
    return data
}