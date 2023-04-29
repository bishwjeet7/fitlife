import React from 'react'
import Imgborder from '../img/border.svg';
import Doctor from '../img/doctor.svg';
import Footer from './Footer';
import backgroundImage from '../img/workouts-720.webp';
import community from '../img/community-2160.webp';
import Newsletter from './Newsletter';

function MainPage() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% auto',
    backgroundPosition: 'center',
    width: '47%',
    height: '500px',
    display: 'inline-block',
    textAlign: 'center',
    margin: '10px',
    backgroundColor:'#f0f4f6',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
  };
  const div2Style = {
    width: '50%',
    height: '200px',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '200px',
    fontSize: '24px',
    fontWeight: 'bold',
  };
  const div3Style = {
    backgroundImage: `url(${community})`,
    // backgroundSize: '100%',
    backgroundPosition: 'center',
    width: '98%',
    height: '100vh',
    display: 'inline-block',
    textAlign: 'center',
    margin: '10px',
    backgroundColor:'#f0f4f6',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
  };
  return (
    <>
    <div className='company-heading'>
        <div>
            <img src={Imgborder} alt='border' className='border-img'/>
        </div>
        <div className='headingLine'>
            <p><strong>Welcome to Your Health Companion,</strong><br/><br></br> your ultimate online resource for health and wellness. Our mission is to empower individuals to live healthier lives by providing comprehensive, trustworthy, and up-to-date information on a wide range of health topics. Our team of experts, including physicians, nutritionists, and fitness trainers, work tirelessly to create content that is both engaging and informative.</p>
        </div>
        <div className='doctorImg'>
          <img src={Doctor} alt='border' className='border-img'/>
        </div>
      <div className='workOut'>
        <div style={divStyle}>
          <br/>
          <h1>Workout Videos</h1>
          <p>Exercise with certified personal trainers whether you’re<br></br> at home or on the road.</p>
          <p><a href='/'>Find a Workout</a></p>
        </div>
        <div style={divStyle}>
          <br/>
          <h1>Healthy Recipes</h1>
          <p>Fuel your day with recipes by Registered Dietitians and<br></br> professional chefs.</p>
          <p><a href='/'>Find a Recipe</a></p>
        </div>
      </div>
      <div>
        <div style={div3Style}>
          <br></br>
          <h1>Supportive Community</h1>
          <p>Stay motivated and engaged with a little help from a<br></br> supportive community of other members.</p>
          <p><a href='/'>Become a Member</a></p>
        </div>
      </div>

      <Newsletter/>
        {/* <Home/> */}
        <Footer/>

    </div>
    </>
  )
}

export default MainPage