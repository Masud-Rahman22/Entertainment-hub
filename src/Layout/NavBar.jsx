import { NavLink } from "react-router-dom";
import logo from "../../public/dc-entertainment-logo.jpg"

const NavBar = () => {
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
            <div className="navbar p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-[100px] h-[68px]" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-orange-400 text-white">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;