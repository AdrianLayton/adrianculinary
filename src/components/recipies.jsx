import React from 'react';

export default class Recipies extends React.Component {
	render() {
	return(
		<div className="block-wrapper">
			<div className="recipie-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/IMG_0239.JPG" />
				</div>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipie-icon fa fa-cutlery" aria-hidden="true"></i>
						</span>
						<span className="recipie-category">
							Recipie
						</span>
					</a>
					<h4 className="metadata-title"> The Best Sheperd's Pie </h4>
					<p className="metadata-description"> Jan 13 </p>
				</div>
			</div>
			<div className="recipie-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/DSC_0225.jpg" />
				</div>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipie-icon fa fa-cutlery" aria-hidden="true"></i>
						</span>
						<span className="recipie-category">
							Recipie
						</span>
					</a>
					<h4 className="metadata-title"> Amazing Breakfast Sandwiches </h4>
					<p className="metadata-description"> Jan 20 </p>
				</div>
			</div>
			<div className="recipie-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/IMG_1666.JPG" />
				</div>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipie-icon fa fa-cutlery" aria-hidden="true"></i>
						</span>
						<span className="recipie-category">
							Recipie
						</span>
					</a>
					<h4 className="metadata-title"> 5 Star Steak </h4>
					<p className="metadata-description"> February 3rd </p>
				</div>
			</div>
		</div>
		)}
}