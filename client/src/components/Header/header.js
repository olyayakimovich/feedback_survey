import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const renderContent = isLoggedIn => {
  return isLoggedIn ? 
    <Fragment>
      <li>
        <a href="/surveys">Surveys</a>
      </li>
      <li>
        <a href="/api/logout">Log out</a>
      </li>
    </Fragment> : 
    <li>
      <a href="/auth/google">Log in with Google</a>
    </li>
};

const Header = ({ isLoggedIn }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent(isLoggedIn)}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.googleId,
});

export default connect(mapStateToProps)(Header);
