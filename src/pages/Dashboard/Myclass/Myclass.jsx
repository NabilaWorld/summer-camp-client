import React from 'react';


import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/UseCart';

const MyCart = () => {
    const [cart, refetch] = useCart();
    // how does reduce work
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item =>{
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
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){
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
           
            <div className='uppercase font-semibold flex justify-evenly h-10 items-center'>
                <h3 className="text-3xl">Total Items: {cart.length} </h3>
                <h3 className="text-3xl">Total Price: ${total} </h3>

                <button className="btn btn-warning btn-sm"> PAY </button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            cart.map((item, index)=> <tr
                            key={item._id}
                            >
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                </td>
                                <td> {item.name} </td>
                                <td > ${item.price} </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost text-red-600 "> <FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr> )
                        }
                        
                    </tbody>
                    

                </table>
            </div>

        </div>
    );
};

export default MyCart;