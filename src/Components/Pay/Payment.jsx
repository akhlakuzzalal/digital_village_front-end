import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import './payment.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe(
  'pk_test_51JygH5GVNFdSlIWRfeUCO0c8Uc8oedk6gpNzRNkbP6wQvFCJwQ9tqEQaY6eOSPQzNDQJeQbGmFjDP0ym4E2pkBOJ00ltgQmsu7'
);

function Payment({ price, id, returnPage }) {
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price) {
      fetch('/payment/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
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
          <CheckoutForm returnPage={returnPage} price={price} id={id} />
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
