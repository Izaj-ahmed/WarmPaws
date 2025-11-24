import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();



const AuthProvider = ({children}) => {

    const [loading , setLoaading] = useState(true);
    const [user , setUser] = useState (null);



    const registerWithEmailPAssword = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEmailPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged (auth,(currentUser) =>{
            setUser(currentUser);
            setLoaading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authData = {
        registerWithEmailPAssword,
        setUser,
        signInWithEmailPassword,
        user,
        
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;