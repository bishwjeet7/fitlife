import React, { useState } from 'react';
import Exer from '../exercises.json';
import ShowExercise from './ShowExercise';
import Footer from './Footer';
import '../App.css';
import spinner from '../img/rainbow-spinner-loading.gif';

function Exercise() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInProgress, setSearchInProgress] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchInProgress(true);
    setSearchQuery(event.target.value);
    setTimeout(() => {
      setSearchInProgress(false);
    }, 1000); // Adjust the timeout duration to your preference
  };

  const filteredExercises = Exer.exercises.filter((exer) =>
    exer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <br />
      <div className="container">
        <form action="" className="search">
          <input
            className="search__input"
            type="search"
            placeholder="Search"
            id="searchInput"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />

          <div className="search__icon-container">
            <label htmlFor="searchInput" className="search__label" aria-label="Search">
              <svg viewBox="0 0 1000 1000" title="Search">
                <path
                  fill="currentColor"
                  d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"
                />
              </svg>
            </label>

            <button className="search__submit" aria-label="Search">
              <svg viewBox="0 0 1000 1000" title="Search">
                <path
                  fill="currentColor"
                  d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"
                />
              </svg>
              </button>
          </div>
        </form>
        {searchInProgress && (
          <div className="loading-spinner-container">
            <img src={spinner} alt="Loading" />
          </div>
        )}
      </div>
      <br />
      <div className='allExerciseContainer'>
        {filteredExercises.map((exer, index) => {
          return <ShowExercise key={index} exercise={exer} />;
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Exercise;
