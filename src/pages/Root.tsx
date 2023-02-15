import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

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