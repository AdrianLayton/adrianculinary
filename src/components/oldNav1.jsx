import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
		render () {		
			return (
				<div className="page-top">
					<div className="nav-logo">
						<h3 className='site-branding'/>
					</div>
					<nav>
						<ul className="menu">
							<NavLink  exact to="/"> <li > Home </li> </NavLink>
							<NavLink  to="/about"> <li > About </li> </NavLink>
							<NavLink  to="/CookWare"> <li >  Cooking Resources  </li> </NavLink>
						</ul>
					</nav>
				</div>


		
			)}}