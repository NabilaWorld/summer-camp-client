import React from 'react';



import Swal from 'sweetalert2';
import useCart from '../../../hooks/UseCart';
import { Link } from 'react-router-dom';



const MyCart = () => {
    const [cart, refetch] = useCart();
    // how does reduce work
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    fetch(`https://b7a12-summer-camp-server-side-steel.vercel.app/carts/${item._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                )
            }
        })
    }


    return (
        <div className='w-full'>

            <h1 className='text-center font-bold text-3xl my-10'>Selected Class</h1>

            <div className=' font-semibold flex justify-evenly my-5 h-10 items-center'>
                <h3 className="text-3xl">Total Items: {cart.length} </h3>
                <h3 className="text-3xl">Total Price: ${total} </h3>

                <Link to='/dashboard/payment'><button className="btn btn-warning btn-sm"> PAY </button></Link>
            </div>

            <div className="overflow-x-auto ml-5  w-[800px]  grid md:grid-cols-2 gap-3 ">
                {
                    cart.map((item) => <div className='mb-5' key={item._id}>

                        <div className='border rounded-lg bg-slate-300 mt-5 p-5'>

                            <center><img className='w-80 h-60 rounded-lg' src={item.image} alt="" /></center>

                            <br />
                            <div className='text-center'>
                                <p className='mb-2 font-bold'> {item.name} </p>
                                
                                <button onClick={() => handleDelete(item)} className='btn btn-warning w-24'> Delete </button>

                                

                            </div>

                        </div>



                    </div>)


                }
            </div>

        </div>
    );
};

export default MyCart;