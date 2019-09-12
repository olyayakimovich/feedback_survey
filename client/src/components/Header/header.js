import React from 'react';

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/auth/google">Log in with Google</a></li>
          <li><a href="/surveys">Surveys</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;