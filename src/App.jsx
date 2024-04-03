import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Subjects from './Pages/Subjects/Subjects'
import Student from './Pages/Students/Student'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Subjects />,
        },
        {
          path:'student',
          element:<Student/>
        }
      ]
    }
  ])
  return (
    <div className='max-w-[1600px] w-full h-auto mx-auto'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App