import React from 'react';

export default class Slideshow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { slideIndex: 0 };
		this.slides = [{
			image: './img/DSC_0312.jpg',
			caption: 'Meals Under 2$',
      key: 1
		}, {
			image: './img/IMG_0239.JPG',
			caption: 'Sheperd\'s Pie',
      key: 2
		}, {
			image: './img/IMG_0828.JPG',
			caption: 'Mandarin Orange Chicken',
      key: 3
		}];
	}

	plusSlides(n) {
    this.setCurrentSlide(this.state.slideIndex + n)
  }

  setCurrentSlide(slideIndex) {
    if (slideIndex >= this.slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = this.slides.length-1 }
    this.setState({ slideIndex })
  }

  renderSlides() {
    let visible = (index) =>
      index == this.state.slideIndex ? 'block' : 'none'

    return this.slides.map((slide, index) => (
      <div className="mySlides fade" style={{display: visible(index)}}>
        <div className="numbertext">
          { index + 1 } / { this.slides.length }
        </div>
        <img src={ slide.image } style={{width: '100%'}}/>
        <div className="text">{ slide.caption }</div>
      </div>
    ))
  }

  renderDots() {
    let active = (index) =>
      index == this.state.slideIndex ? 'active' : ''

    return this.slides.map((slide, index) => (
      <span className={ 'dot ' + active(index)}
        onClick={ () => this.setCurrentSlide(index) }>
      </span>
    ))
  }

  render() {
    return (
      <div className="slideshow">
        <div className="slideshow-container">
          { this.renderSlides() }
          <a className="prev"
             onClick={ () => this.plusSlides(-1) }>
            &#10094;
          </a>
          <a className="next"
             onClick={ () => this.plusSlides(1) }>
            &#10095;
          </a>
        </div>
        <br/>
        <div className="navigation" style={{textAlign:'center'}}>
          { this.renderDots() }
        </div>
      </div>
    )
  }
}