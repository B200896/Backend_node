"use client"

import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext with a default value
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user , setuser] = useState("");
    

    let islogedin = !!token;

    useEffect(() => {
        // Retrieve the token from localStorage when the component mounts
        const savedToken = localStorage.getItem("Token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const storeServerToken = (serverToken) => {
        localStorage.setItem("Token", serverToken);
        setToken(serverToken);
    };

    const DeleteToken = ()=>{

        setToken("");
        localStorage.removeItem("Token");
    }

    const authenticateUser = async ()=>{

        console.log("I am ",token)
         
        try{

            const response = await fetch('http://localhost:4000/user',{

                method:"GET",
                headers:{

                    Authorization:`Bearer ${token}`
                }
            });

            console.log(response,"response")

            if(response.ok){

                const data = await response.json();
                setuser(data)
            }

        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{

        authenticateUser();
    },[token])

    return (
        <AuthContext.Provider value={{token,storeServerToken,DeleteToken,user,islogedin}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
