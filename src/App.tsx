import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Country from './pages/CountryDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: ':countryName',
          element: <Country />
        }
      ]
    }
  ])

  return (
    <div className='bg-slate-800/95'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
