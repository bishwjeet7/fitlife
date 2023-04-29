import React from 'react';
import './App.css';
import MainPage from './component/MainPage';
import ResponsiveAppBar from './component/ResponsiveAppBar';
import Login from './component/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Exercise from './component/Exercise';
import Bmicheck from './component/Bmicheck';
import RedirectToExternalURL from './component/RedirectToExternalURL';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<RedirectToExternalURL />} /> */}

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/Bmicheck" element={<Bmicheck />} />
      </Routes>
    </Router>
  );
}

export default App;
