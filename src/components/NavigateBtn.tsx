import { Link } from 'react-router-dom'

interface Props {
    border: string
}

const NavigateBtn: React.FC<Props> = (props) => {
    let link = props.border.replace(/\s+/g, '-').toLocaleLowerCase()

    if (props.border.includes('-')) {
        link = props.border.replace(/-/g, '&20')
    }

    return (
        <Link to={`/${link}`} className='dark:bg-slate-700 px-8 py-1 shadow-md dark:shadow-slate-800 shadow-slate-400/50 bg-white'>{props.border}</Link>
    )
}

export default NavigateBtn