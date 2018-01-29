import React from 'react';

const Footer = () => {
			return (
				<div>
					<div className="newsletter">
						<div className="newsletter-row">
							<div className="newsletter-tagline">
								<h3 className="newsletter-heading"> Never have a boring meal again</h3>
								<p className="tagline"> Get weekly recipies and our first course free</p>
							</div>
							<div className="around-form">
								<form method="post" action="/" className="sign-up"> 
									<div className="input-container">
										<input type="email" name="email" className="newsletter-email" placeholder="name@example.com" /> 
										<button type="submit" className="form-submit"> Subscribe</button>
									</div>
								</form>
								<p aria-hidden="true"> 
									Thank you! We've sent you a confirmation email 
								</p>
							</div>
						</div>
					</div>
					<footer>
						<div className="footer-top">

							
						</div>

						<div className='footer-bottom'>
							<a href="https://www.instagram.com/adrianculinary" className="sm-icon">
								<i className="fa fa-instagram fa-2x"></i>
							</a>
							<a href="#" className="sm-icon">
								<i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
							</a>
						</div>
					</footer>
				</div>
				)
		}

export default Footer;