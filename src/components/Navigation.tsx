import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='flex justify-between items-center px-4 py-8 bg-gray-700'>
            <Link to={'/'} className='font-semibold tracking-wide'>Where in the world?</Link>
            <button>Dark Mode</button>
        </nav>
    )
}

export default Navigation