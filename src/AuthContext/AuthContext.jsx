import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/auth";
import { onAuthStateChanged } from "firebase/auth";




export const AuthContext = createContext(null);


function AuthContextProvider({ children }) {

    const [user, setUser] = useState({
        islogin: false,
        userInfo: {}
    });

    const [loding, setLoading] = useState(true)

    // Handle user state changes
    function onAuthChanged(user) {
        if (user) {
            setUser({
                islogin: true, userInfo: {
                    name: user?.name,
                    photoUrl: user?.photoUrl,
                    email: user?.email,
                }
            })
        } else {
            setUser({ islogin: false, userInfo: {} })

        }

        setLoading(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return subscriber; // unsubscribe on unmount
    }, []);






    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;