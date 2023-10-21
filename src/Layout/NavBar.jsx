import { NavLink } from "react-router-dom";
import logo from "/dc-entertainment-logo.jpg"
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
// import { getItem } from "localforage";
// import { VscColorMode } from "react-icons/vsc";
// import { getItem } from "localforage";
const NavBar = () => {
    const { user, Logout } = useContext(authContext)
    const [theme, setTheme] = useState()
    const handleToLogout = () => {
        Logout()
            .then()
            .catch()
    }
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const Links = <>
        <li className="text-white"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline bg-orange-400" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="text-white"><NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline bg-orange-400" : ""
            }
        >
            Add Product
        </NavLink></li>
        <li className="text-white"><NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline bg-orange-400" : ""
            }
        >
            My Cart
        </NavLink></li>
        <li className="text-white"><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline bg-orange-400" : ""
            }
        >
            Login
        </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar p-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <img className="w-[100px] h-[68px]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                {
                    user && <div className="navbar-end gap-2">
                        <p>{user.displayName}</p>
                        <div className="w-10 rounded-full navbar-end">
                            <img className="rounded-full" src={user?.photoURL} />
                        </div>
                        <button onClick={handleToLogout} className="btn bg-orange-400 text-white border-none">Logout</button>
                    </div>
                }
                <div className="form-control ml-5">
                    <label className="label cursor-pointer">
                        <span className="label-text">Mode</span>
                        <input onChange={handleToggle} type="checkbox" className="toggle" checked />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
// getItem(theme = "dark") ? getItem(theme = "dark") : "light"