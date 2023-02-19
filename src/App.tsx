import { createBrowserRouter, RouterProvider, LoaderFunction } from 'react-router-dom';
// import { loader as countryLoader } from './pages/CountryDetails';
import Root from './pages/Root';
// import Home from './pages/Home';
import { lazy, Suspense } from 'react';
import Error from './pages/Error';

const Home = lazy(() => import('./pages/Home'));
const Country = lazy(() => import('./pages/Country'));
const countriesLoader: LoaderFunction = (({ request }) => import('./pages/Root').then(module => module.loader(request.url)))
const countryLoader: LoaderFunction = (({ params }) => import('./pages/Country').then(module => module.loader(params.countryName!)))
function App() {
  localStorage.theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      id: 'root',
      loader: countriesLoader,
      children: [
        {
          index: true,
          element: <Suspense fallback={<div className='animate-ping w-16 h-16 fixed top-[50%] left-[50%] dark:bg-slate-100 bg-slate-800 rounded-full'></div>}><Home /></Suspense>,

        },
        {
          path: ':countryName',
          element: <Suspense fallback={<div className='animate-ping w-16 h-16 fixed top-[50%] left-[50%] dark:bg-slate-100 bg-slate-800 rounded-full'></div>}><Country /></Suspense>,
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
