import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments/payments';

const renderContent = (isLoggedIn, credits) => {
  return isLoggedIn ?
    <Fragment>
      <li>
        <Payments />
      </li>
      <li style={{ margin: '0 10px' }}>
        Credits: {credits}
      </li>
      <li>
        <a href="/api/logout">Log out</a>
      </li>
    </Fragment> :
    <li>
      <a href="/auth/google">Log in with Google</a>
    </li>
};

const Header = ({ isLoggedIn, credits }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={isLoggedIn ? '/surveys' : '/'} className="left brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right">
          {renderContent(isLoggedIn, credits)}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.googleId,
  credits: auth.credits,
});

export default connect(mapStateToProps)(Header);
