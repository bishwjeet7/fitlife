import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

function Bmicheck() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoURL, setCurrentVideoURL] = useState('');

  const handleShowModal = (videoURL) => {
    setCurrentVideoURL(videoURL);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setCurrentVideoURL('');
    setShowModal(false);
  };
  
  const convertToEmbedURL = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|v\/|u\/\w\/|embed\/)?([\w-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calculatedBmi = (weight / ((height / 100) ** 2)).toFixed(2);
    setBmi(calculatedBmi);

    try {
      const response = await axios.post('http://localhost:3001/api/bmi', {
        name,
        age,
        gender,
        height,
        weight,
        bmi: calculatedBmi,
      });
      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving data:', error.message);
    }

    try {
      const options = {
        method: 'GET',
        url: 'https://musclewiki.p.rapidapi.com/exercises',
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '9e6420f89cmsh49633c11a344bbep1f276fjsn1be6543c7d1d',
          'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      const allExercises = response.data;
      const randomExercises = [];

      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * allExercises.length);
        randomExercises.push(allExercises[randomIndex]);
      }

      setExercises(randomExercises);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <div>Bmicheck</div> */}
      <div className="container-1" style={{ paddingLeft: 100, paddingRight: 100 }}>
        <h1 className="my-4 text-center">Calculate Your BMI</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (in cm)</label>
            <input
              type="number"
              className="form-control"
              controlid="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (in kg)</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div className="mt-4">
            <h2 className="text-center">Your BMI is: {bmi}</h2>
          </div>
        )}
        {exercises.length > 0 && (
          <div className="mt-4">
            <h3 className="text-center">Recommended Exercises:</h3>
            <ul>
              <div className="row">
                {exercises.map((exercise, index) => (
                  <div key={index} className="col-md-4">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="card-title">{exercise.exercise_name}</h5>
                        <p><strong>Category:</strong> {exercise.Category}</p>
                        <p><strong>Difficulty:</strong> {exercise.Difficulty}</p>
                        <p><strong>Force:</strong> {exercise.Force}</p>
                        <p><strong>Grips:</strong> {exercise.Grips}</p>
                        <p><strong>Target:</strong> {exercise.target.Primary.join(', ')}</p>
                        <details>
                          <summary>Details</summary>
                          <p>{exercise.details}</p>
                        </details>
                        <details>
                          <summary>Steps</summary>
                          <ol>
                            {exercise.steps.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ol>
                        </details>
                        {/* <a href={exercise.youtubeURL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch Video</a> */}
                        <Button className="btn btn-primary" onClick={() => handleShowModal(exercise.youtubeURL)}>Watch Video</Button>

                        {console.log(exercise.youtubeURL)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </ul>
          </div>
        )}
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>Exercise Video</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={currentVideoURL}
        title="Exercise Video"
        allowFullScreen
      ></iframe>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

      <Footer />
    </>
  );
}

export default Bmicheck;

