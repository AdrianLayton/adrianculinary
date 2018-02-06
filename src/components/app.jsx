import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';

import Header from './header.jsx';

import Home from './home.jsx';
import Footer from './footer.jsx';

import CookWare from './cookware.jsx';
import ThankYou from './thankyou.jsx';
import About from './about.jsx';



export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<BrowserRouter>
				<div className="main">
					<Header />
				  		<Switch>
					  		<Route exact path="/" component={Home} />
					  		<Route path="/about" component={About} />
					  		<Route path="/cookWare" component={CookWare} />
					  		<Route path="/thankyou" component={ThankYou} />
					  	</Switch>
					<Footer />
				</div>
			</BrowserRouter>
			)
	}
}
