import { Link } from 'react-router-dom';

export interface CountryType {
    name: string,
    population: number,
    region: string,
    capital: string,
    flag: string,
    allCountries: CountryType[]
}

const Country: React.FC<CountryType> = (props) => {
    let link = props.name.replace(/\s+/g, '-').toLowerCase();
    
    if (props.name.includes('-')) {
        link = props.name.replace(/-/g, '&20');
        
    }

    return (
        <Link to={link} className='group dark:bg-gray-700 bg-white rounded-lg dark:text-white dark:shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] shadow-[0_0_1px_.6rem_rgb(0,0,0,0.02)]'>
            <div className='sm:h-48 md:h-60 rounded-t-lg overflow-hidden border-b dark:border-gray-700 '>
                <img src={props.flag} alt="Japan Flag" className='sm:h-full object-cover w-full min-h-[10rem] group-hover:scale-125 ease-in-out duration-500' />
            </div>
            <div className='py-8 px-8 rounded-b-lg'>
                <h2 className='pb-4 text-2xl font-bold'>{props.name}</h2>
                <div className='leading-7 pb-4'>
                    <p>Population: <span className='dark:text-slate-300 text-slate-500'>{props.population}</span></p>
                    <p>Region: <span className='dark:text-slate-300 text-slate-500'>{props.region}</span></p>
                    <p>Capital: <span className='dark:text-slate-300 text-slate-500'>{props.capital}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default Country