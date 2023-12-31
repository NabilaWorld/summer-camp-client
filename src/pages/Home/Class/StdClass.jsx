import React, { useContext, useEffect } from 'react';


import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/UseCart';

import { Fade } from "react-awesome-reveal";
import useCheckRole from '../../../hooks/useCheckRole';


const StdClass = ({ myClass }) => {
    const { image, name, email, available_seat, price, _id, instructor_name } = myClass;



    const { user } = useContext(AuthContext);
    const [role] = useCheckRole()
    console.log('role:', role)
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handleCart = myClass => {
        console.log(myClass)
        if (user && user.email) {

            const classItem = { classItemId: _id, image, name, instructor_name, available_seat, price, email: user.email }

            fetch('https://b7a12-summer-camp-server-side-steel.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'If you are not login so, Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In It!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div >

            <Fade duration={1000} delay={500}>
                <div className={`card md:w-80 w-60 border p-4 ${available_seat === 0 ? 'bg-red-200' : 'bg-slate-200'}`} >

                    <Fade duration={1200} delay={1000}><img className='rounded-lg w-80 h-52' src={image} alt="" /></Fade>


                    <Fade duration={1400} delay={1500}>
                        <div className='bg-yellow-200  p-5 rounded-lg mt-2 text-center text-xl h-60 text-blue-800'>

                            <Fade duration={1600} delay={200}><p> <b>Name:</b> {name} </p></Fade>

                            <Fade duration={1800} delay={400}><p> <b>Instructor Name:</b> {instructor_name} </p></Fade>

                            <Fade duration={2000} delay={600}><p> <b>Email:</b> {email} </p></Fade>

                            <Fade duration={2200} delay={800}> <p> <b>Available_Seat:</b> {available_seat} </p> </Fade>

                            <Fade duration={2400} delay={1000}> <p> <b>Price:</b> {price} </p> </Fade>

                        </div>
                    </Fade>

                    <Fade duration={2600} delay={1200}>




                        <button
                            onClick={() => handleCart(myClass)}
                            className={`btn btn-warning mt-2 w-full ${available_seat === 0 ? 'disabled' : ''}`}
                            disabled={available_seat === 0 || role === 'instructor' || role === 'admin'}
                        >
                            Add Class
                        </button>

                    </Fade>
                </div>
            </Fade>

        </div>
    );
};

export default StdClass;