import { Link } from 'react-router-dom'

const NavigateBtn = () => {
    return (
        <Link to={'/french'} className='bg-slate-700 px-8 py-1 shadow-md shadow-slate-800'>French</Link>
    )
}

export default NavigateBtn