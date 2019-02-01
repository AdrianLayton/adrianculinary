import React from 'react';

export default class Recipe extends React.Component {
	render() {
	return(
		<div className="recipe-page">
			<div className="recipe-highlight">
				<div className="highlight-image">
					<img src="" />
				</div>
				<div className="highlight-text">
					
				</div>
			</div>
			<div className="rcp-metadata">
				<div className="recipie-title pencil">The Perfect Person</div>
				<div className="rcp-meta-info">
					<i className="fa fa-clock-o" aria-hidden="true"></i><span>Prep Time: 4 hours</span>
					<i className="fa fa-clock-o" aria-hidden="true"></i><span>Prep Cook: 2 hours</span>
					<i className="fa fa-user" aria-hidden="true"></i><span>Feeds: 3 people</span>
				</div>
			</div>
			<div className="recipe-ingredients pencil rcp-ctn ingr-background">
				<ul className="recipe-list">
					<li>1/2 cup of love</li>
					<li>1 tsp happiness </li>
					<li>1 gallon of enthusiasm</li>
				</ul>
			</div>
			<div className="recipe-desc">
			<p> Lorem ipsum dolor amet brunch live-edge meggings disrupt. Palo santo migas distillery mustache. Selfies migas locavore disrupt venmo hammock. Migas polaroid brooklyn enamel pin biodiesel hexagon lo-fi post-ironic wayfarers sriracha raclette af cloud bread marfa.</p>
			</div>
			<div className="recipe-"></div>
		</div>
		)
}
}

