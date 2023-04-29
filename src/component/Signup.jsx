import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Footer from './Footer';
// import './Loginstyle.css';
// import ejs from 'ejs';
// import fs from 'fs';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <>
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           mt: 8,
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//       <Footer/>
//     </>
//   );
// }

// export default Login;

// function Login() {
//   const registerTemplate = fs.readFileSync('./login/views/register.ejs', 'utf8');
//   const html = ejs.render(registerTemplate, { title: 'Sign up' });

//   return (
//     <>   
//       <div dangerouslySetInnerHTML={{ __html: html }}></div>
//       <Footer/>
//     </>
//   );
// }

// export default Login;


// import React from 'react';

function Login() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,email,password,password2
    }
    const formDataJSON = JSON.stringify(data);
    console.log(formDataJSON)
    
    try {
      const response = await fetch('http://localhost:9800/users/register',  {
        method:"POST",
        headers: {
           'Content-Type': 'application/json'
        },
        body:formDataJSON
      });
      console.log(response.json());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="name" value = {name} placeholder="User name" required onChange={(e)=>setName(e.target.value)}/>
          <input type="email" name="email" value = {email} placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" name="password" value = {password} placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
          <input type="password" name="password2" value = {password2} placeholder="Confirm Password" required onChange={(e)=>setPassword2(e.target.value)}/>
          <button type="submit">Sign up</button>
          <p style={{ textAlign: 'center' }}>{'Sign up'}</p>
        </form>
      </div>
      <a href='/signup'>Not have account? Signup</a>

      {/* <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <a href="/sendOtp">Forgot Password</a>
      </div> */}
    </div>
    <Footer/>
    </>
  );
}

export default Login;

