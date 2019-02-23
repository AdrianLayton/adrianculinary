import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
		constructor() {
		    super();
		    this.state = {
		    	headerClass: "mob-nav"
		    };
		    // this.handleClick = this.handleClick.bind();
		}
	    
	    handleClick(e) {
			e.preventDefault();
	    	this.toggleClass();
	    	// console.log("Test Pass");
	    }	

		toggleClass() {
			const element = document.getElementById('mob-nav');
			const elementCl = element.classList
			const isMobNavActive = element.classList.contains('change');
			console.log(element);
			console.log(element.classList.contains('change'))
			// isMobNavActive ? this.setState({"mob-nav"}) : this.setState({"mob-nav change"})
			if (!isMobNavActive) {
				this.setState({
					headerClass: "mob-nav change"
				})
			}
			else if (isMobNavActive) {
				this.setState({
					headerClass: "mob-nav"
				})
			}
			
			// this.setState({
			// 	isMobNavActive ? element.classList.remove("change") : element.classList.add("change");
			// })
			// this.setState({
			// 	element.classList('change') ? element.classList.add("change") : element.classList.remove("change");
			// })
		    // const oldClassName = document.getElementById('mob-nav').className;
		    // const newClassName = oldClassName === 'red' ? 'blue' : 'red'
		    // document.getElementById('test').className = newClassName
		 }
		render () {		
			return (
				<div className="header">
					<span className="preview">This site is currently in preview it will be launched March 2018</span>
					<div className="logo-container">
						<img id="nav-logo" src="./img/logo.png" />
					</div>
					<div className="mob-logo-container">
						<span className="logo-left mob-nav">
							<i className="logo-icon fas fa-hamburger"></i>
							<h2 className="logo-text">AdrianCulinary</h2>
						</span>
					<div className={this.state.headerClass} id="mob-nav"
						onClick={ () => this.handleClick(event) }>
						  <div className="bar1"></div>
						  <div className="bar2"></div>
						  <div className="bar3"></div>
						</div>
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



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export default class Header extends React.Component {
// 		constructor(props) {
//         super(props);
//         this.addActiveClass= this.addActiveClass.bind(this);
//         this.state = {
//             active: false,
//         };
//     }
//     	toggleClass() {
//         const currentState = this.state.active;
//         this.setState({ active: !currentState });
// 	    };
		
// 	    handleClick() {
// 	    	this.setState()
// 	    }

// 		render () {		
// 			return (
// 				<div className="header">
// 					<span className="preview">This site is currently in preview it will be launched March 2018</span>
// 					<div className="logo-container">
// 						<img id="nav-logo" src="./img/logo.png" />
// 					</div>
// 					<div className="mob-logo-container">
// 						<span className="logo-left mob-nav">
// 							<i className="logo-icon fas fa-hamburger"></i>
// 							<h2 className="logo-text">AdrianCulinary</h2>
// 						</span>
// 						<div className="container mob-nav" onclick="myFunction(this)">
// 						  <div className="bar1">
// 							  <NavLink className="nav-items" exact to="/"> <li > Home </li> </NavLink>
// 						  </div>
// 						  <div className="bar2">
// 						  	<NavLink className="nav-items" to="/about"> <li > About </li> </NavLink>
// 						  </div>
// 						  <div className="bar3">
// 						  <NavLink className="nav-items" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink></div>
// 						</div>
// 					</div>
// 					<div className="nav-primary">
// 						<ul className="menu">
// 							<NavLink className="nav-items hidden" exact to="/"> <li > Home </li> </NavLink>
// 							<NavLink className="nav-items hidden" to="/about"> <li > About </li> </NavLink>
// 							<NavLink className="nav-items hidden=" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink>
// 						</ul>
// 					</div>
// 				</div>
// )}}

