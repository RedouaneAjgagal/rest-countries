import { Link } from 'react-router-dom'

const Country = () => {
    return (
        <Link to={'japan'} className='rounded-lg bg-slate-800/20 text-white p-3'>
            <div className='bg-gray-700 rounded-lg'>
                <img src="https://flagcdn.com/jp.svg" alt="Japan Flag" className='rounded-t-lg object-cover w-full h-52' />
                <div className='py-8 px-8'>
                    <h2 className='pb-4 text-2xl font-bold'>Japan</h2>
                    <div className='leading-7 pb-4'>
                        <p>Population: <span className='text-slate-300'>125,836,021</span></p>
                        <p>Region: <span className='text-slate-300'>Asia</span></p>
                        <p>Capital: <span className='text-slate-300'>Tokyo</span></p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Country