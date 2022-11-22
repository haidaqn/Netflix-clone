import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged}from "firebase/auth"

const Context = createContext()

export function ContextProvider({children}){

    const [user,setUser] = useState({});

    // dang ky
    const signUp = (email, pw) => {
        return createUserWithEmailAndPassword(auth, email, pw);
    };

    //dang nhap
    const logIn = (auth, email, pw) => {
        return signInWithEmailAndPassword(auth, email, pw);
    }

    //dang xuat
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
     });

    return (
        <Context.Provider value={{ signUp, logIn, logOut, user}}>
            {children}
        </Context.Provider>
    )
};

export const UseManagement = () => {
    return useContext(Context);
}