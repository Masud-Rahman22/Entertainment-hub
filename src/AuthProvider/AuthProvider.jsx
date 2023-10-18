import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const provider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const register = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=> {
            unSubscribe();
        }
    },[])
    const authInfo = {
        googleLogin,
        register,
        Login,
        Logout,
        loading,
        user
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;