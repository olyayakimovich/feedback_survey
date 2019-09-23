import React, { Fragment } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {
  return (
    <StripeCheckout
      amount={100} // cents
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  )
};

export default Payments;
