import React from 'react';
import Slideshow from './slideshow.jsx'

export default class Coming extends React.Component{
		constructor(props) {
			super(props)
		// 	this.state = {
		// 		name: '',
		// 		email: '',
		// 	}

		// }
		// handleChange(event) {
		//    this.setState({value: event.target.value});
		//    console.log(event);
		// }

		// handleSubmit(event) {
		// 	document.forms.signup.reset();

		}
	render() {
	return(
		<div className="section">
			<Slideshow />
				<div className="info-display">
				<h3> Latest Recipies </h3>
				</div>
				<div className="info-display">
				<h3> Best Culinary Products </h3>
				</div>
		</div>
		)
}
}