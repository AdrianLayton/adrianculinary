import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter, 
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/header.jsx'
import Nav from './components/nav.jsx';
import Coming from './components/coming.jsx';
import Slideshow from './components/slideshow.jsx';
import Modal from './components/modal.jsx';
import Footer from './components/footer.jsx';


// APP COMPONENTS //

import Home from './Home';
import About from './About';
import KitchenWare from './KitchenWare';


export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isModalOpen: false};
		this.openModal = this.openModal.bind(this);
	}
	openModal() {
		this.setState({ isModalOpen: true })
	}

	closeModal() {
		this.setState({ isModalOpen: false })
	}
  	const App = () => (
  		<BrowserRouter>
	  		<div>
		  		<Header />	
			  		<Switch>
				  		<Route exact path="/" component={Home} />
				  		<Route exact path="/about" component={About} />
				  		<Route exact path="/kitchenware" component={About} />
				  	</Switch>
			  	<Footer />
	  		</div>
  		</BrowserRouter>
  		)
	
}

// render() {
// 		return(
// 			<div className="main">
// 				<Nav />
// 				<Coming openModal={this.openModal}/>
// 					<button onClick={() => this.openModal()} />
// 				<Slideshow />
// 					<button onClick={() => this.openModal()}>Open modal</button>
// 				<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
// 					<h1>Modal title</h1>
// 					<p>hello</p>
// 					<p><button onClick={() => this.closeModal()}>Close</button></p>
// 				</Modal>
// 				<Footer />
// 			</div>
// 			)
// 	}
const contentNode = document.getElementById('contents');

ReactDOM.render(<Content /> , contentNode);

