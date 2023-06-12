import React from 'react';
import useAuth from '../../../hooks/UseAuth';
import moment from 'moment/moment';

const AdminHome = () => {
    const { user } = useAuth();
    const formattedDateTime = moment().format('MMMM, Do, YYYY, dddd, h:mm:ss a');
    return (
        <>
            <h1 className='text-3xl mb-5 text-center font-bold'>Hello These is Admin Profile</h1>

            <p className='my-5 text-xl font-bold bg-slate-300 rounded-3xl p-5'>{formattedDateTime}</p>

            <div className='border p-5 rounded-3xl bg-slate-300'>
                <img className='h-40 w-60 rounded-lg' src={user.photoURL} alt="" /> <br />
                <p className='text-center font-bold'> {user.displayName} </p>
            </div>
        </>
    );
};

export default AdminHome;