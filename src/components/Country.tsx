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
    const link = props.name.replace(/\s+/g, '-').toLowerCase();
    return (
        <Link to={link} className='group rounded-lg text-white shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)]'>
            <div className='sm:h-48 md:h-60 rounded-t-lg overflow-hidden'>
                <img src={props.flag} alt="Japan Flag" className='sm:h-full  object-cover w-full min-h-[10rem] group-hover:scale-125 ease-in-out duration-500' />
            </div>
            <div className='py-8 px-8 bg-gray-700 rounded-b-lg'>
                <h2 className='pb-4 text-2xl font-bold'>{props.name}</h2>
                <div className='leading-7 pb-4'>
                    <p>Population: <span className='text-slate-300'>{props.population}</span></p>
                    <p>Region: <span className='text-slate-300'>{props.region}</span></p>
                    <p>Capital: <span className='text-slate-300'>{props.capital}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default Country