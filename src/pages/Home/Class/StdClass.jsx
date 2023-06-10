import React, {  useContext, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/UseCart';


const StdClass = ({ myClass }) => {
    const { image, name, email, available_seat, price, _id } = myClass;

    useEffect(() => {
        AOS.init();
      }, []);

      const {user} = useContext(AuthContext);

      const [, refetch] = useCart();

      const navigate = useNavigate();
      const location = useLocation();

      const handleCart = myClass => {
        console.log(myClass)
        if(user && user.email){

            const classItem = {classItemId: _id, image, name,  available_seat, price, email: user.email}

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
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
        else{
            Swal.fire({
                title: 'If you are not login so, Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In It!'
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
                }
              })
        }
      }

    return (
        <div>
            
            <div className='card md:w-80 w-60 border p-4 bg-slate-200' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">

            <img data-aos="zoom-out-right" data-aos-duration="600" data-aos-delay="500" className='rounded-lg w-80 h-52' src={image} alt="" />
            

            <div data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="1000" className='bg-yellow-200 text-black p-5 rounded-lg mt-2 text-center'>
                <p> <b>Name:</b> {name} </p>
                <p> <b>Email:</b> {email} </p>
                <p> <b>Available_Seat:</b> {available_seat} </p>
                <p> <b>Price:</b> {price} </p>
            </div>

           
            <button onClick={()=> handleCart(myClass)}  className="btn btn-warning mt-2">Add Class</button>
        </div>
        
        </div>
    );
};

export default StdClass;