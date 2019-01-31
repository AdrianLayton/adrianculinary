import React from 'react';

export default class Recipe extends React.Component {
	render() {
	return(
		<div className="block-wrapper">
			<div className="recipe-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/IMG_0239.JPG" />
				</div>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipe-icon fa fa-cutlery" aria-hidden="true"></i>
						</span>
						<span className="recipe-category">
							Recipe
						</span>
					</a>
					<h4 className="metadata-title"> The Best Sheperd's Pie </h4>
					<p className="metadata-description"> Coming Soon </p>
				</div>
			</div>
			<div className="recipe-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/DSC_0225.jpg" />
				</div>
				<div className="metadata-container">
					<div className="tag-container">
						<a href="#" className="catg-link">
							<span> 
								<i className="recipe-icon fa fa-cutlery" aria-hidden="true"></i>
							</span>
							<span className="recipe-category">
								Recipe
							</span>
						</a>
					</div>
					<h4 className="metadata-title"> Amazing Breakfast Sandwiches </h4>
					<p className="metadata-description"> Coming Soon </p>
				</div>
			</div>
			<div className="recipe-wrapper">
				<a href="#"></a>
				<div className="img-container">
					<img src="./img/IMG_1666.JPG" />
				</div>
				<div className="metadata-container">
					<a href="#" className="catg-link">
						<span> 
							<i className="recipe-icon fa fa-cutlery" aria-hidden="true"></i>
						</span>
						<span className="recipe-category">
							Recipe
						</span>
					</a>
					<h4 className="metadata-title"> 5 Star Steak </h4>
					<p className="metadata-description"> Coming Soon </p>
				</div>
			</div>
		</div>
		)}
}