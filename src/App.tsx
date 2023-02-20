import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country, { loader as countryLoader } from './pages/Country';
import Error from './pages/Error';
import Root, { action as loadMoreAction, loader as countriesLoader } from './pages/Root'
import Home from './pages/Home';

function App() {
  localStorage.theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      id: 'root',
      loader: countriesLoader,
      action: loadMoreAction,
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
    <div className='dark:bg-slate-800/95 dark:text-white min-h-screen bg-slate-50'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
