import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';

import Header from './components/header.jsx'
import Nav from './components/nav.jsx';
import newNav from './components/newNav.jsx'
import Home from './components/home.jsx';
import Slideshow from './components/slideshow.jsx';
import Modal from './components/modal.jsx';
import Footer from './components/footer.jsx';
import About from './components/about.jsx';



class Content extends React.Component {
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
					  		<Route path="/kitchenware" component={Kitchenware} />
					  		<Route path="/thankyou" component={ThankYou} />
					  	</Switch>
				</div>
			</BrowserRouter>
			)
	}
}

const contentNode = document.getElementById('contents');

ReactDOM.render(<Content /> , contentNode);

