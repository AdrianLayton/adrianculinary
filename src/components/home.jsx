import React from 'react';
import Slideshow from './slideshow.jsx'
import Recipe from './recipe.jsx'
import Display1 from './d-r-1.jsx'

export default class Coming extends React.Component{
		constructor(props) {
			super(props)
		}
	render() {
	return(
		<div className="section">
			<section className="main-display">
				<Slideshow />
				<Display1 />
			</section>
			<Recipe />
		</div>
		)
}
}