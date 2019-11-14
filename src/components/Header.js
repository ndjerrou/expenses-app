import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Homepage
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create an expense
    </NavLink>

    <NavLink to="/help" activeClassName="is-active">
      Need help?
    </NavLink>
  </header>
);

export default Header;
