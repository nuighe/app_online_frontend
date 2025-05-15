import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticate: false,
    user: {
        email: "",
        name: ""
    }
});

export const AuthWrapper = (props) => {
    const [auth, setAuth] = useState({
        user: {
            email: "",
            name: ""
        }
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.chidren}
        </AuthContext.Provider>
    );
}