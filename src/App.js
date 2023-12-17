import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import "./App.css"
import CategoryProducts from './components/product/CategoryProducts'
import Cart from './pages/Cart'

const App = () => {

    const router = createBrowserRouter([
        {path: '/', element: <Layout />, children: [
            {index: true, element: <HomePage />},
            {path: 'category/:categoryId', element: <CategoryProducts />},
            {path: 'cart', element: <Cart />}
        ]}
    ])

    return <RouterProvider router={router} />
  
}

export default App