import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import CheckoutForm from './CheckoutForm';
import './payment.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

function Payment({ price, id, returnPage }) {
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price) {
      axios
        .post('/payment/create-payment-intent', { price })
        .then((response) => setClientSecret(response.data.clientSecret));
    }
  }, [price]);

  // Theme
  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm returnPage={returnPage} />
        </Elements>
      ) : (
        <>
          <p>Loading .....</p>
        </>
      )}
    </div>
  );
}
export default Payment;
