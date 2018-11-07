import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ children, ...props }) => (
    <NavLink
        exact
        className="p1 mx2 black rounded text-decoration-none "
        activeClassName="bg-white"
        {...props}
    >
        {children}
    </NavLink>
);

const Header = () => (
    <header className="flex items-center justify-between px4">
        <h1 className="h1"> 🥘 My Recipes</h1>
        <nav>
            <HeaderLink to="/"> Home</HeaderLink>

            <HeaderLink to="/Favorites"> Favorites </HeaderLink>
        </nav>
    </header>
);


//console.log
HeaderLink.propTypes = {
    children: propTypes.node,
}
export default Header;