import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { json } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <Navigation />
            <main className='w-full max-w-[26rem] m-auto flex flex-col gap-10 py-8'>
                <Outlet />
            </main>
        </div>
    )
}

export default Root


export const loader = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    if (!response.ok) {
      throw json({ errorMsg: 'Could not fetch data' }, { status: 500 });
    }
    const data = await response.json();
    return data
  }