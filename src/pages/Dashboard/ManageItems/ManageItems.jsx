import React from 'react';
import { FaTrashAlt, FaEdit} from 'react-icons/fa';
import useClass from '../../../hooks/UseClass';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';


const ManageItems = () => {

    const [myClass, , refetch] = useClass();

    const [axiosSecure] = useAxiosSecure();

    const handleDeleteItem = item => {
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
           

            axiosSecure.delete(`/class/${item._id}`)
            .then(res=> {
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
                
                 
            })

            }
          })
    }

    return (
        <div>
            <h3 className="font-semibold text-3xl"></h3>


            <div className="overflow-x-auto">
                <table className="table w-[800px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Instructor</th>
                            <th>Seat</th>
                            <th>price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myClass.map((item, index) => <tr key={item._id}>
                                <th> {index+1} </th>
    
                                <td> <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="" />
                                    </div>
                                </div>
                                </td>
    
                                <td>{item.name}</td>
    
                                <td> {item.email} </td>
    
                                <td> {item.instructor_name} </td>
    
                                <td> {item.available_seat} </td>
    
                                <td> {item.price} </td>
    
                                <td> <button className="btn btn-warning"> <FaEdit></FaEdit> </button> </td>
    
                                <td> <button onClick={()=> handleDeleteItem(item)} className="btn btn-warning"> <FaTrashAlt></FaTrashAlt> </button> </td>
                            </tr> )
                        }

                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;