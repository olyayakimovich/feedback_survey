import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../../actions/index';

const Payments = ({ handleStripeToken }) => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$1 for 1 email credit"
      amount={100} // cents
      token={token => handleStripeToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add credits</button>
    </StripeCheckout>
  )
};

const mapDispatchToProps = dispatch => ({
  handleStripeToken: token => dispatch(handleToken(token)),
})

export default connect(null, mapDispatchToProps)(Payments);
