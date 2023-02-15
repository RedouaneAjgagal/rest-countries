import { Link } from 'react-router-dom'

interface Props {
    border: string
}

const NavigateBtn: React.FC<Props> = (props) => {
    const link = props.border.toLocaleUpperCase()
    return (
        <Link to={`/${link}`} className='bg-slate-700 px-8 py-1 shadow-md shadow-slate-800'>{props.border}</Link>
    )
}

export default NavigateBtn