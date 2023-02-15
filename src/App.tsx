import { createBrowserRouter, RouterProvider, LoaderFunction } from 'react-router-dom';
import Root from './pages/Root';
// import Home, { loeader as countriesLoader } from './pages/Home';
import Country, { loader as countryLoader } from './pages/CountryDetails';
import React, { lazy, Suspense } from 'react';


function App() {
  const Home = lazy(() => import('./pages/Home'));
  const countriesLoader = () => import('./pages/Home').then(module => module.loader());
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Suspense fallback={<p>Loading...</p>}><Home /></Suspense>,
          loader: countriesLoader
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
    <div className='bg-slate-800/95 text-white min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
