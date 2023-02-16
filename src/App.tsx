import { createBrowserRouter, RouterProvider, LoaderFunction } from 'react-router-dom';
import Root, { loader as countriesLoader } from './pages/Root';
// import Home, { loeader as countriesLoader } from './pages/Home';
import Country, { loader as countryLoader } from './pages/CountryDetails';
import React, { lazy, Suspense } from 'react';
import Home from './pages/Home';


function App() {
  // const Home = lazy(() => import('./pages/Home'));
  // const countriesLoader = () => import('./pages/Home').then(module => module.loader());
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      id: 'root',
      loader: countriesLoader,
      children: [
        {
          index: true,
          element: <Home />
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
