import React from 'react';

export default class SavingCalc extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	age: '23',
    	activity: '',
    	height: '74',
    	gender: '',
    	weight: '170',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  calculateCalories(age,height,weight) {
  	let ageCalories = age * 6.8;
  	let heightCalories = height * 12.9;
  	let weightCalories = weight * 6.3;

  	const caloricIntake = (weightCalories + heightCalories) - ageCalories;
  	return caloricIntake;
  }; 

  handleSubmit(event) {
  	// this.calculateCalories(this.state.age,this.state.height,this.state.activity)
  	alert(this.state.props.height)
    console.log('A name was submitted: ' + this.state.age);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [evt.target.name]: evt.target.value });
  };
	render() {
		return (
			<div className="calculator-container">
				<form onSubmit={this.handleSubmit}>
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
						<input type="submit" value="Submit" onsubmit="" />
					</div>
				</form>	
			</div>
			)
	}
}