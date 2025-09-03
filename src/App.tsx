import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage';

const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
}, {
    path: "/search",
    element: <SearchPage />,
    errorElement: <ErrorPage />
}, {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />
}, {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <ErrorPage />
}]);


function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
