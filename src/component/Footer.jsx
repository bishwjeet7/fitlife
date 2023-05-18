import React from 'react'
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../img/logo.png'
// library.add(fab, faCheckSquare, faCoffee)


function Footer() {
  return (
    <footer class="footer-distributed">

			<div class="footer-left">
        <img src={logo} alt="logo" style={{maxHeight:"150px"}}></img>
				{/* <h3>Company<span>logo</span></h3> */}

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					
					<a href="/">Blog</a>
				
					<a href="/">Pricing</a>
				
					<a href="/">About</a>
					
					<a href="/">Faq</a>
					
					<a href="/">Contact</a>
				</p>

				<p class="footer-company-name">Fitness © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>LOVELY PROFESSIONAL UNIVERSITY </span> PUNJAB, INDIA</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p> 91+ 8650837371</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@fitness.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="/"><i class="fa-brands fa-facebook"></i></a>
					<a href="/"><i class="fa-brands fa-twitter"></i></a>
					<a href="/"><i class="fa-brands fa-linkedin"></i></a>
					<a href="/"><i class="fa-brands fa-github"></i></a>
                    {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}

				</div>

			</div>

		</footer>
  )
}

export default Footer
