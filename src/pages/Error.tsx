import { useRouteError, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation';

const Error = () => {
    const error: any = useRouteError()
    let errorMsg = `Ops.. Something Went Wrong!`;
    let errorType = `${error.statusText}. ${error.status}`
    const navigate = useNavigate()
    const goHomeHandler = () => {
        navigate('/')
    }
    return (
        <div className='text-center'>
            <Navigation />
            <div className='mt-12'>
                <h1 className='text-xl mb-4 font-bold'>{errorMsg}</h1>
                <p className='text-lg mb-4'><i>{errorType}</i></p>
                <button onClick={goHomeHandler} className='dark:bg-slate-50 px-4 dark:text-slate-900 rounded shadow-lg bg-slate-900 text-slate-50'>Go Back</button>
            </div>
        </div>
    )
}

export default Error