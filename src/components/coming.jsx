import React from 'react';
import Slideshow from './slideshow.jsx';


export default class Coming extends React.Component{
	render() {
		return(
			<section className="main-sctn">

				<h1 className="headline"> Coming June 22nd </h1>
				<p className="lead-text"> Sign Up for Email List </p>
				<p className="lead-text"> You'll get 2 exclusive recipies before the public </p>
				
				<form className='sign-up' action="/" method="POST">
					<input type='text' name='name' placeholder='Name'>
					</input>
					<input type='text' name='email' placeholder='Email'>
					</input>
					<button > Submit </button>
				</form>

			</section>
			)
	}
}