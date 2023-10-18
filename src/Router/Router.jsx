import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;