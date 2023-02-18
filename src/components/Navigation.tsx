import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='py-8 bg-gray-700 shadow-md'>
            <div className='w-full max-w-[100rem] flex justify-between items-center m-auto px-4 sm:px-6'>
                <Link to={'/'} className='font-semibold tracking-wide'>Where in the world?</Link>
                <button>Dark Mode</button>
            </div>
        </nav>
    )
}

export default Navigation