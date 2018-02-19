import React from 'react';

export default class RecipiesDisplay extends React.Component {
	render() {
	return(
		<article>
			<header>
				<ul>
					<li>
						<i className="recipie-icon fa fa-cutlery" aria-hidden="true"></i>
						<h4>Recipie</h4>
					</li>
				</ul>
			</header>
			<div>
				<h2>
					Best Recipie
				</h2>
			</div>
		</article>

		)
}}