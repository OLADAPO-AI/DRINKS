import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'
import {
  About,
  Homelayout,
  Error,
  Cocktail,
  Landing,
  Newsletter,
} from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Homelayout />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        element: (
          <div>
            <Landing />
          </div>
        ),
      },
      {
        path: 'error',
        element: (
          <div>
            <Error />
          </div>
        ),
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: (
          <div>
            <Newsletter />
          </div>
        ),
      },
      {
        path: 'about',
        element: (
          <div>
            <About />
          </div>
        ),
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: (
          <div>
            <Cocktail />
          </div>
        ),
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
