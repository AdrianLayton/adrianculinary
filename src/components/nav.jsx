import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
		render () {		
			return (
		<div>
			<nav className="nav-primary">
				<h3 className="site-branding nax items"> <bold> Adrian Culinary </bold> </h3>
				<ul>
					<NavLink exact to="/"> <li className="nav-items"> Home </li> </NavLink>
					<NavLink to="/about"> <li className="nav-items"> About </li> </NavLink>
					<NavLink to="/CookWare"> <li className="nav-items">  CookWare </li> </NavLink>
				</ul>
			</nav>
		</div>
			)}}