import React from 'react'
import graph from '../img/graph.jpg';
import exe from '../img/exe.jpg';
import food from '../img/food.jpg';
import calculator from '../img/calculator.jpg';
import logo from '../img/logo.png'
// import Exercise from '../img/Ex'

function Home() {
  return (
    <>
        <div className='companyService'>
          <div className='service'>
              <img src={calculator} alt="" className='serviceImg' id='cal'></img>
              <div>
              <p>We start by checing Your BMI and<br></br> Analysing your fitness Level.</p>
              </div>
          </div>
          <div className='service2'>
              <div>
              <p>Then we provide comprehensive data about your fitness <br></br>status and then we plan to improve your it</p>
              </div>
              <img src={graph} alt="" className='serviceImg1'></img>
          </div>
          <div className='service'>
              <img src={exe} alt="" className='serviceImg'></img>
              <div>
              <p>After your fitness analysis we suggest various home exercises<br></br> which are of short duration to match your Hectic lifestyle.</p>
              </div>
          </div>
          <div className='service2'>
              <img src={food} alt="" className='serviceImg1'></img>
              <div>
              <p>Exercise is always incomplete without a healthy and nutritious diet. We got you covered, we provide an extensive and personalised diet plan for your needs only.</p>

              </div>
          </div>
        </div><br></br><br></br>
        <footer class="footer-distributed">

			<div class="footer-left">
        <img src={logo} alt="logo"></img>
				{/* <h3>Company<span>logo</span></h3> */}

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					
					<a href="/">Blog</a>
				
					<a href="/">Pricing</a>
				
					<a href="/">About</a>
					
					<a href="/">Faq</a>
					
					<a href="/">Contact</a>
				</p>

				<p class="footer-company-name">FitHub © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="/"><i class="fa fa-facebook"></i></a>
					<a href="/"><i class="fa fa-twitter"></i></a>
					<a href="/"><i class="fa fa-linkedin"></i></a>
					<a href="//"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    </>
  )
}

export default Home