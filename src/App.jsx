
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Contact from './pages/Contact'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import { GetApiData } from './api/GetApiData'
import ReactHooks from './react-hooks/ReactHooks'
import Login from './pages/Login'
import Service from './pages/Service'

function App() {

  const router = createBrowserRouter([
    {
     path:'/',
     element: <AppLayout />,
     errorElement: <ErrorPage />,
     children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/about',
        element:<About />,
      },
      {
        path:'/movie',
        element:<Movie />,
        loader: GetApiData,
      },
      {
        path:'/contact',
        element:<Contact />,
      },
      {
        path:'/hooks',
        element:<ReactHooks />,
      },
      {
        path:'/login',
        element:<Login />,
      },
      {
        path:'/service',
        element:<Service />,
      },
     ]
    },
    
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
