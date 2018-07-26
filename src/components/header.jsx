import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
		render () {		
			return (
				<div className="header">
					<div className="logo-container">
						<img id="nav-logo" src="./img/logo.png" />
					</div>
					<div className="nav-primary">
						<ul className="menu">
							<NavLink className="nav-items" exact to="/"> <li > Home </li> </NavLink>
							<NavLink className="nav-items" to="/about"> <li > About </li> </NavLink>
							<NavLink className="nav-items" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink>
						</ul>
					</div>
				</div>
)}}
