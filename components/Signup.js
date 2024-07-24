
// // import React, { useState } from 'react';
// // import axios from 'axios';
// import './Signup.css'; // Import your Signup.css stylesheet






// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:8000/api/register/', {
//         username,
//         email,
//         password,
//       });
//       console.log('Signup successful:', response.data);
//       // Store user_id in localStorage or state
//       localStorage.setItem('user_id', response.data.user_id);
//       navigate('/profile'); // Redirect to profile page
//     } catch (error) {
//       console.error('Signup failed:', error.response.data);
//       setError('Signup failed.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
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
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
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
//         <button type="submit">Signup</button>
//       </form>
//       {error && (
//         <div className="error-popup">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Signup;







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'; // Import your Signup.css stylesheet

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:8000/api/signup/', {
//         username,
//         password,
//       });
      
//       console.log('Signup successful:', response.data);
//       navigate('/login'); // Redirect to login page after signup
//     } catch (error) {
//       console.error('Signup failed:', error.response?.data || error.message);
//       setError('Signup failed.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
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
//         <button type="submit">Signup</button>
//       </form>
//       {error && (
//         <div className="error-popup">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Signup;





// MySQL

// Signup.js
// Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import your Signup.css stylesheet

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/signup/', {
        username,
        password,
      });
      
      console.log('Signup successful:', response.data);
      navigate('/login'); // Redirect to login page after signup
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
      setError(error.response?.data?.error || 'Signup failed.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
      </form>
      {error && (
        <div className="error-popup">
          {error}
        </div>
      )}
    </div>
  );
};

export default Signup;
