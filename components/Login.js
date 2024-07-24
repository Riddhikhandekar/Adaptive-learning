// Login.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import your Login.css stylesheet

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:8000/api/login/', {
//         username,
//         password,
//       });
//       console.log('Login successful:', response.data.token);
//       // localStorage.setItem('token', response.data.token); // Save token to localStorage
//       navigate('/profile'); // Redirect to profile page
//     } catch (error) {
//       console.error('Login failed:', error.response.data);
//       setError('Incorrect username or password.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && (
//         <div className="error-popup">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import your Login.css stylesheet

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:8000/api/login/', {
//         username,
//         password,
//       });
//       console.log('Login successful:', response.data.token);
//       // localStorage.setItem('token', response.data.token); // Save token to localStorage
//       navigate('/profile'); // Redirect to profile page
//     } catch (error) {
//       console.error('Login failed:', error.response.data);
//       setError('Incorrect username or password.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && (
//         <div className="error-popup">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



// MySQL

// Login.js

// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your Login.css stylesheet

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      navigate('/profile'); // Redirect to profile page
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError('Incorrect username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && (
        <div className="error-popup">
          {error}
        </div>
      )}
    </div>
  );
};

export default Login;
