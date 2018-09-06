import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
     <h2>Expenisfy</h2>
     <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink><br/>
     <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
     <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
    </header>
  );

export default Header