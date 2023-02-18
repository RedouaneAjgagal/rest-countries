import { FaSearch } from 'react-icons/fa'
interface Props {
  searchedCountry: (value: string) => void
}

const Search: React.FC<Props> = (props) => {
  const searchHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const duration = setTimeout(() => {
      props.searchedCountry(e.target.value)
    }, 1000);
    return () => clearTimeout(duration)
  }

  return (
    <label htmlFor='search' className='p-4 cursor-pointer bg-gray-700 rounded-lg shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] flex gap-4 md:w-full md:max-w-[30rem]'>
      <span className='px-4 flex items-center'><FaSearch /></span>
      <input type="text" id='search' placeholder='Search for a country...' className='outline-none bg-transparent cursor-pointer w-full' onChange={searchHanlder} />
    </label>
  )
}

export default Search