import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';

import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';
import CookWare from './components/cookware.jsx';
import ThankYou from './components/thankyou.jsx';
import About from './components/about.jsx';
import SavingCalc from './components/svngcalc.jsx';
import Recipe from './components/rcp-display.jsx';



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
					  		<Route path="/recipe" component={Recipe} />
					  		<Route path="/thankyou" component={ThankYou} />
					  		<Route path="/svngcalc" component={SavingCalc} />
					  	</Switch>
					<Footer />
				</div>
			</BrowserRouter>
			)
	}
}