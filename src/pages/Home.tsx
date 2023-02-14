import Country from "../components/Country"

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-6">
        <Country />
        <Country />
        <Country />
    </div>
  )
}

export default Home