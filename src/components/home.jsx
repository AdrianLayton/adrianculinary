import React from 'react';
import Slideshow from './slideshow.jsx'
import Recipies from './recipies.jsx'

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
			<Recipies />
		</div>
		)
}
}