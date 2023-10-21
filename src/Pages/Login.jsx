import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLogo from '/4957136.jpg'
import swal from 'sweetalert';
const Login = () => {
    const { googleLogin, Login } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleToLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        Login(email, password)
            .then(() => {
                swal("Welcome", "You are Logged in", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.code);
                if (error.code === 'auth/invalid-login-credentials') {
                    swal("Wrong", "Invalid Login Credentials", "warning");
                    return;
                }
            });
    }
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                swal("Great", "You are signed in with Google", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch()
    }

    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center my-10">
            <div className="flex-1">
                <img className="h-full w-screen md:h-[600px] md:w-[600px]" src={loginLogo} alt="" />
            </div>
            <div className="flex-1">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white my-5">Login</h1>
                    <p className="text-center text-white mt-5">New Here? <Link to="/register" className="underline text-orange-400 text-sm font-bold">Register</Link></p>
                </div>
                <form onSubmit={handleToLogin} className="p-10 w-3/4 md:w-2/3 mx-auto">
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="email" name="email" id="" placeholder="Enter Your Email" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Password" required />
                    <button className="btn bg-orange-400 text-white w-full mt-10 rounded-none">Login</button>
                </form>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-2">
                        <hr className="w-[100px] md:w-[200px] h-[1px] border-2" />
                        <span>Or</span>
                        <hr className="w-[100px] md:w-[200px] h-[1px] border-2" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p className="font-bold text-orange-400">You can sign up using</p>
                        <button onClick={handleToGoogleLogin} className="btn btn-outline w-full"><FaGoogle className="w-[28px] h-[28px]"></FaGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;