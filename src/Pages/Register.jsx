import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginLogo from '/4957136.jpg'
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
const Register = () => {
    const { googleLogin, register } = useContext(authContext);
    const handleToSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~])[A-Za-z!@#$%^&*()_+{}[\]:;<>,.?~0-9]{6,}$/.test(password)) {
            swal("wrong", "password must be at least 6 characters long with one uppercase letter and one special character", "warning");
            return;
        }
        register(email, password)
            .then(() => {
                swal("Great", "You are a registered member now", "success");
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch()
    }
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                swal("Great", "You are signed in with Google", "success");
            })
            .catch()
    }
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center my-10">
            <div className="flex-1">
                <img className="h-[800px] w-[700px]" src={loginLogo} alt="" />
            </div>
            <div className="flex-1">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white my-5">Register</h1>
                    <p className="text-center text-white mt-5">Already Have an Account? <Link to="/login" className="underline text-orange-400 text-sm font-bold">Login</Link></p>
                </div>
                <form onSubmit={handleToSubmit} className="p-10 w-2/3 mx-auto">
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="text" name="name" id="" placeholder="First Name" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="text" name="name" id="" placeholder="Last Name" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="text" name="photo" id="" placeholder="Photo URL" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="email" name="email" id="" placeholder="Enter Your Email" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Password" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Confirm Password" required />
                    <button className="btn btn-warning w-full mt-10 rounded-none">Register</button>
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

export default Register;