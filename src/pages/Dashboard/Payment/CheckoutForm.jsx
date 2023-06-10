import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import useAuth from '../../../hooks/UseAuth';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    }, [])

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error)
            setCardError(error.message);
        }
        else{
            setCardError('');
            console.log('paymentmethod', paymentMethod)
        }

        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'we don know',
                    name: user?.displayName || 'anonymous'
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError);
          }
        console.log(paymentIntent);
        setProcessing(false)
        if(paymentIntent.status === 'succeeded' ){
            setTransactionId(paymentIntent.id);
            // const transactionId = paymentIntent.id;

            // TODO next steps
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-warning btn-sm mt-3' type="submit" disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'> {cardError} </p> }
            {transactionId && <p className='text-red-600'>Complete: {transactionId} </p> }
        </>
    );
};

export default CheckoutForm;