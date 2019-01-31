import React from 'react';

export default class SavingCalc extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	age: '';,
    	activity: "";,
    	height: "";,
    	gender: "";,
    	weight: "";,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  let totalCalories = 0;

  calculateCalories(age,height,activity) {
  	let ageCalories = age * 6.8;
  	let heightCalories = height * 12.9;
  	let weightCalories = weight * 6.3

  	let totalCalories = (weightCalories + heightCalories) - ageCalories;
  }

  handleSubmit(event) {
  	calculateCalories(this.state.age,this.state.height,this.state.activity)
    alert('A name was submitted: ' + totalCalories);
    event.preventDefault();
  }
	render() {
		return (
			<div className="calculator-container">
				<div className="caloric-input">
					<label>
						How tall are you ?
					</label>
					<input type="text" className="calc-input" value={this.state.height} onChange={this.handleChange}/>
					<label>
						How Old are you ?
					</label>
					<input type="text" className="calc-input" value={this.state.age} onChange={this.handleChange}/>
					<label>
						How Active are you ?
					</label>
					<input type="text" className="calc-input" value={this.state.age} onChange={this.handleChange}/>
					<label>
						How Much Do you Weigh
					</label>
					<input type="text" className="calc-input" value={this.state.activity} onChange={this.handleChange}/>
					<label>
						Gender
					</label>
					<input type="text" className="calc-input" value={this.state.gender} onChange={this.handleChange}/>
				</div>
			</div>
			)
	}
}