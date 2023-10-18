import { createContext } from "react";

const authContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // const googleLogin = ()=>{
    //     return 
    // }
    const authInfo = {
        
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;