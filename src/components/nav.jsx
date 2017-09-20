import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
		render () {		
			return (
		<div>
			<nav className="nav-primary">
				<h3 className="site-branding"> <bold> Adrian Culinary </bold> </h3>
				<ul>
					<NavLink className="nav-items" exact to="/"> <li > Home </li> </NavLink>
					<NavLink className="nav-items" to="/about"> <li > About </li> </NavLink>
					<NavLink className="nav-items" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink>
				</ul>
			</nav>
		</div>
			)}}