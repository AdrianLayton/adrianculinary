import React from 'react';

const CookWare = () => {
	return (

			<section className='affiliate-col'>
				<div className='product-highlight'>
					<h4 className='label'>
						Best Value
					</h4>
					<div className='product-group'> 
						<div className="product-img">
							<a target="_blank" href="https://www.amazon.com/gp/product/B008M5U1C2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008M5U1C2&linkCode=as2&tag=drianulinary-20&linkId=7bc955c92b7b552eaf182c2df29d4aff">
							<img src="https://s3.amazonaws.com/www.adrianculinary.com/img/affil-knife.jpg" className='product-img' />
							</a>
						</div>
						<div className="product-metadata">
							<h3 className="product-title"> Product Name </h3>
							<p> Product Description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							</p>
							<a target="_blank" href="https://www.amazon.com/gp/product/B008M5U1C2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008M5U1C2&linkCode=as2&tag=drianulinary-20&linkId=7bc955c92b7b552eaf182c2df29d4aff">
								<button className="affil-button"> Buy on Amazon </button>
							</a>
						</div>
					</div>
				</div>
			</section>

		)
}

export default CookWare;