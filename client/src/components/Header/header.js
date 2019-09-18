import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <Link to={isLoggedIn ? '/surveys': '/'} className="left brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right">
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
