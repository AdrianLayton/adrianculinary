import React from 'react';

const Display1 = () => {
	return(
		<div className="tool-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/moneyVsTime.jpeg" />
				</div>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipe-icon fa fa-wrench" aria-hidden="true"></i>
						</span>
						<span className="recipe-category">
							Tools
						</span>
					</a>
					<h4 className="metadata-title"> The Best Sheperd's Pie </h4>
					<p className="metadata-description"> Coming Soon </p>
				</div>
			</div>
			)
}

export default Display1;