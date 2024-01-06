import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    }
])



export default router