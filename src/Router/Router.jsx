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
import ProductInfo from "../Pages/ProductInfo";
import CardDetails from "../Pages/CardDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import UpdateProduct from "../Pages/UpdateProduct";



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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cards/:brandName',
                element: <ProductInfo></ProductInfo>,
                loader: ({params})=> fetch(`http://localhost:5000/cards/${params.brandName}`)
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/details/${params._id}`)
            },

            {
                path: '/updateProduct',
                element: <UpdateProduct></UpdateProduct>
            }
        ]
    },
]);

export default router;