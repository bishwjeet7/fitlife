import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import rainbowspinner from '../img/rainbow-spinner-loading.gif'

function ShowExercise(props) {
  const { name, force, level, mechanic, equipment, primaryMuscles, secondaryMuscles, instructions, category, img1, img2 } = props.exercise;

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="exercise-card">
      <div className="exercise-card-image">
        <Slider {...sliderSettings}>
          <div>
            <LazyLoadImage
              src={img1}
              alt={name}
              effect="blur"
              placeholderSrc={rainbowspinner}
            />
          </div>
          <div>
            <LazyLoadImage
              src={img2}
              alt={name}
              effect="blur"
              placeholderSrc={rainbowspinner}
              // placeholderSrc="./img/rainbow-spinner-loading.gif"
            />
          </div>
        </Slider>
      </div>
      <div className="exercise-card-info">
        <h3 style={{color:"black"}}>{name}</h3>
        <p className='categ'>{category}</p>
        <button className="btn btn-secondary btn-sm" onClick={toggleDetails}>{showDetails ? 'Hide details' : 'Show details'}</button>
        {showDetails && (
          <div className="exercise-card-details">
            <p>Force: {force}</p>
            <p>Level: {level}</p>
            <p>Mechanic: {mechanic}</p>
            <p>Equipment: {equipment}</p>
            <p>Primary Muscles: {primaryMuscles}</p>
            <p>Secondary Muscles: {secondaryMuscles}</p>
            <p>Instructions: {instructions}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowExercise;

// npm install react-slick - to use slider

