import Filter from "../components/Filter"
import Search from "../components/Search"

interface Props {
    searchedCountry: (value: string) => void
}

const HomeNav: React.FC<Props> = (props) => {
    const searchedCountry= (searchedValue: string) => {
        props.searchedCountry(searchedValue)
    }
    return (
        <div className="flex flex-col gap-8 px-4 md:flex-row md:justify-between md:px-6">
            <Search searchedCountry={searchedCountry} />
            <Filter />
        </div>
    )
}

export default HomeNav