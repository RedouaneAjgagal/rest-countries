import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Root = () => {
    return (
        <div >
            <Navigation />
            <main className='w-full max-w-[22rem] m-auto'>
                <Outlet />
            </main>
        </div>
    )
}

export default Root