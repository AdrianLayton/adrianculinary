import React from 'react';
import {Link} from 'react-router-dom';

const Display1 = () => {
	return(
		<div className="tool-wrapper">
				<Link to="svngcalc">
					<div className="img-container">
						<img src="./img/timemoney.jpeg" />
					</div>
				</Link>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipe-icon fa fa-wrench" aria-hidden="true"></i>
						</span>
						<span className="recipe-category">
							Tools
						</span>
					</a>
					<h4 className="metadata-title"> Calculate Saving's from Home Cooking </h4>
					<p className="metadata-description"> See how much money you would save based on sex,age, weight, acitivity level and cost of living where you live </p>
				</div>
			</div>
			)
}

export default Display1;