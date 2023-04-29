import * as React from 'react';
import logo from '../img/logo.png'


function ResponsiveAppBar() {
  const handleLogin = async() =>{
    await fetch('http://localhost:3001/')
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#e3f2fd'}}>
        <div className="container-fluid">
            <a href="/" className="navbar-brand" >
                <img src={logo} height="28" alt="fitness logo"/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <a href="/Exercise" className="nav-item nav-link">Exercise</a>
                    <a href="/Bmicheck" className="nav-item nav-link">BMI</a>
                    <a href="/" className="nav-item nav-link disabled" tabindex="-1">Contact</a>
                </div>
                <div className="navbar-nav ms-auto" onClick={handleLogin}>
                    <a href="/Login" className="nav-item nav-link">Login/Signup</a>
                </div>
            </div>
        </div>
    </nav>
</div>
  );
}
export default ResponsiveAppBar;