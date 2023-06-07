import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress progress-primary w-56" value="100" max="100"></progress>;
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;