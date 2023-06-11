import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token=import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
       const formData = new FormData();
       formData.append('image', data.image[0])

       fetch(img_hosting_url, {
        method: 'POST',
        body: formData
       })
       .then(res => res.json())
       .then(imgResponse =>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {class_id, name, email, available_seat, instructor_name, price} = data;
                const classItem = {class_id: parseFloat(class_id) ,name, email, available_seat, instructor_name, price: parseFloat(price), image: imgURL}
                
                console.log(classItem)

                axiosSecure.post('/class', classItem)

                .then(data => {
                    console.log('after posting new class item', data.data)
                    if(data.data.insertedId){
                        reset();
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
       })

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/*class id */}
                
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold"> Class Id*</span>
                    </label>
                    <input type="text" placeholder="Class Id"
                        {...register("class_id", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                {/*class name */}
                
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold"> Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                {/* image */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                
                

               <div className='flex gap-5'>
                 {/*instructor name */}
                 <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("instructor_name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                {/* instructor email */}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="email" placeholder="Instructor Email"
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
               </div>


               <div className='flex gap-5'>
                 {/* available seat */}
                 <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seat*</span>
                    </label>
                    <input type="text" placeholder="Available Seat"
                        {...register("available_seat", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                {/* price */}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="text" placeholder="Price"
                        {...register("price", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
               </div>


              
                <input className="btn btn-warning my-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;