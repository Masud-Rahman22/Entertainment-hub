import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    // console.log(location.pathname);
    if (loading) {
        return <div className="flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;