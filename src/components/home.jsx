import React from 'react';
import Slideshow from './slideshow.jsx'
import Recipies from './recipies.jsx'
import Display1 from './d-r-1.jsx'

export default class Coming extends React.Component{
		constructor(props) {
			super(props)
		}
	render() {
	return(
		<div className="section">
			<Slideshow />
			<Display1 />
			<Recipies />
		</div>
		)
}
}