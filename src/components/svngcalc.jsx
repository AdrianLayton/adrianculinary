import React from 'react';

export default class SavingCalc extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="calculator-container">
				<div className="takeout-input">
					<label>
						Takeout Frequency (per week)
					</label>
					<input type="text" className="calc-input"/>
				</div>
				<div className="caloric-input">
					<label>
						How tall are you ? (inches)
					</label>
					<input type="text" className="calc-input" />
				</div>
				
				<div className="ph">
					<h1> This is the placeholder for the savings calculator-container</h1>
					<h1> This is the placeholder for the savings calculator-container</h1>
					<h1> This is the placeholder for the savings calculator-container</h1>
				</div>
			</div>
			)
	}
}