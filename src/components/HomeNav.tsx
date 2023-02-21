import Filter from "../components/Filter"
import Search from "../components/Search"

const HomeNav = () => {
    return (
        <div className="flex flex-col gap-8 px-4 md:flex-row md:justify-between md:px-6">
            <Search />
            <Filter />
        </div>
    )
}

export default HomeNav