import Country from "../components/Country"
import Filter from "../components/Filter"
import Search from "../components/Search"

const Home = () => {
  return (
    <>
    <div className="flex flex-col gap-8 px-4">
        <Search />
        <Filter />
    </div>
    <div className="grid grid-cols-1 gap-8 px-6">
        <Country />
        <Country />
        <Country />
    </div>
    </>
  )
}

export default Home