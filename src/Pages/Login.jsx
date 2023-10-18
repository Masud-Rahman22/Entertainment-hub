import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginLogo from '/4957136.jpg'
import swal from 'sweetalert';
const Login = () => {
    const { googleLogin, Login } = useContext(authContext);
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                swal("Great", "You are signed in with Google", "success");
            })
            .catch()
    }
    const handleToLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        Login(email, password)
            .then(() => {
                swal("Welcome", "You are Logged in", "success");
            })
            .catch(error => {
                console.log(error.code);
                if (error.code === 'auth/invalid-login-credentials') {
                    swal("Wrong", "Invalid Login Credentials", "warning");
                    return;
                }
            });
    }
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center my-10">
            <div className="flex-1">
                <img className="h-[600px] w-[600px]" src={loginLogo} alt="" />
            </div>
            <div className="flex-1">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white my-5">Login</h1>
                    <p className="text-center text-white mt-5">New Here? <Link to="/register" className="underline text-orange-400 text-sm font-bold">Register</Link></p>
                </div>
                <form onSubmit={handleToLogin} className="p-10 w-2/3 mx-auto">
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="email" name="email" id="" placeholder="Enter Your Email" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Password" required />
                    <button className="btn bg-orange-400 text-white w-full mt-10 rounded-none">Login</button>
                </form>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex items-center gap-2">
                        <hr className="w-[200px] h-[1px] border-2" />
                        <span>Or</span>
                        <hr className="w-[200px] h-[1px] border-2" />
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
{/* <form>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your password"required/>
                    </div>
                    
                    
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form> */}