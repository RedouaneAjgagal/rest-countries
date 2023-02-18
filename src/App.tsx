import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as countriesLoader } from './pages/Root';
import Country, { loader as countryLoader } from './pages/CountryDetails';
import Home from './pages/Home';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      id: 'root',
      loader: countriesLoader,
      children: [
        {
          index: true,
          element: <Home />,
          
        },
        {
          path: ':countryName',
          element: <Country />,
          loader: countryLoader
        }
      ]
    }
  ])

  return (
    <div className='dark:bg-slate-800/95 dark:text-white min-h-screen bg-slate-50'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
