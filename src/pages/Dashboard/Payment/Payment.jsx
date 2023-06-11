import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/UseCart';

// TODO: provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce( (sum, item)=> sum + item.price, 0 );
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='w-[400px]'>
            <p className='text-center font-bold text-3xl mb-10'>Pay The Money</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;