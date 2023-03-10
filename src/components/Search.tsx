import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
interface Props {
  searchedCountry: (value: string) => void
}

const Search: React.FC<Props> = (props) => {
  // const [searchedCountry, setSearchedCountry] = useState('')
  const searchHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      props.searchedCountry(e.target.value)
    }, 1000);
  }
  // console.log(searchedCountry);
  
  return (
    <label htmlFor='search' className='p-4 cursor-pointer dark:bg-gray-700 rounded-lg dark:shadow-[0_0_1px_.6rem_rgb(0,0,0,0.05)] flex gap-4 md:w-full md:max-w-[30rem] bg-white shadow-[0_0_1px_.6rem_rgb(0,0,0,0.02)]'>
      <span className='px-4 flex items-center'><FaSearch /></span>
      <input type="text" id='search' placeholder='Search for a country...' className='outline-none bg-transparent cursor-pointer w-full' onChange={searchHanlder} />
    </label>
  )
}

export default Search