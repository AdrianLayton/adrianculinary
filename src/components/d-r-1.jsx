import React from 'react';

const Display1 = () => {
	return(
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
					<p className="metadata-description"> Coming Soon </p>
				</div>
			</div>
			)
}

export default Display1;