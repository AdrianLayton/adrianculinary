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
					<div>
						<a href="#" className="catg-link">
							<span> 
								<i className="recipe-icon fa fa-wrench" aria-hidden="true"></i>
							</span>
							<span className="recipe-category">
								Tools
							</span>
						</a>
					</div>
					<h4 className="metadata-title"> Calculate Saving's from Home Cooking </h4>
					<p className="metadata-description"> Coming Soon currently developing the API. You will be able to see how much money you save based on your state, caloric intake and what level of restaraunts you go too</p>
				</div>
			</div>
			)
}

export default Display1;