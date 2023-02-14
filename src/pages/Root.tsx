import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Root = () => {
    return (
        <div className='grid gap-8'>
            <Navigation />
            <main className='w-full max-w-[26rem] m-auto flex flex-col gap-10'>
                <Outlet />
            </main>
        </div>
    )
}

export default Root