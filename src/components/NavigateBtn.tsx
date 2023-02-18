import { Link } from 'react-router-dom'

interface Props {
    border: string
}

const NavigateBtn: React.FC<Props> = (props) => {
    const link = props.border.replace(/\s+/g, '-').toLocaleLowerCase()
    return (
        <Link to={`/${link}`} className='dark:bg-slate-700 px-8 py-1 shadow-md dark:shadow-slate-800 shadow-slate-400/50 bg-white'>{props.border}</Link>
    )
}

export default NavigateBtn