class Someone extends React.Component {
  state={
    age:10,
    weight:10,
    height: 10
  }


  calculateCalories = (age, height, weight) => {
    let ageCalories = age * 6.8;
    let heightCalories = height * 12.9;
    let weightCalories = weight * 6.3;
    let caloricIntake = weightCalories + heightCalories - ageCalories;
    const totalCalories = caloricIntake;
    return totalCalories;
  };

  handleSubmit = (e) => {
    const { age, height, weight } = this.state;
    const results = document.querySelector(".results");

    results.innerHTML = `<h1>A name was submitted: ${this.calculateCalories(
      age,
      height,
      weight
    )}</h1>`;
    e.preventDefault();
  };
  render() {
    return <button onClick={this.handleSubmit}>Submit</button>;
  }
}

