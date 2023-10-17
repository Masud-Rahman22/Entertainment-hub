import { Outlet } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="bg-black">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;