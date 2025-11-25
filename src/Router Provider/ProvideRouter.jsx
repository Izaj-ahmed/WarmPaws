import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const ProvideRouter = ({children}) => {

    const {loading ,user} = useContext(AuthContext);
    console.log(user);
    

    if(loading){
        return <p>Loading...</p>
    }
    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>


}
export default ProvideRouter;