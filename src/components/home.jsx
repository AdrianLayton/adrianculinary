import React from 'react';
import Slideshow from './slideshow.jsx'

export default class Coming extends React.Component{
		constructor(props) {
			super(props)
			this.state = {
				name: '',
				email: '',
			}

		}
		handleChange(event) {
		   this.setState({value: event.target.value});
		   console.log(event);
		}

		handleSubmit(event) {
			document.forms.signup.reset();

		}
	render() {
	return(
		<div>
			<Slideshow />
			<section className="main-sctn">

				<h1 className="headline"> Coming August 15th </h1>
				<p className="lead-text"> Sign Up for Email List </p>
				<p className="lead-text"> You'll get 2 exclusive recipies before the public </p>
				
				<form  className='sign-up' action="/" method="POST" name="signup" onSubmit={this.handleSubmit}>
					
					<input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange}>
					</input>
					<input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}>
					</input>

					<button className='button' value="Submit" >
					Submit
					</button>

				</form>

			</section>
		</div>
		)
}
}