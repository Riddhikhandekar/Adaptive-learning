// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faUser, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import the CSS file



// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/signup">Signup</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="/courses">Courses</Link>
//         </li>
//         <li>
//           <Link to="/content-recommendations">Content Recommendations</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

// src/components/NavBar.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserPlus, faSignInAlt, faUser, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';
// import './NavBar.css';




// components/NavBar.js
import bookLogo from './Images/logo3-png.png';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
      <img src={bookLogo} alt="Book" />

      </div>
      <ul>
      <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/signup">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <FontAwesomeIcon icon={faBook} /> Courses
          </Link>
        </li>
        <li>
          <Link to="/content-recommendations">
            <FontAwesomeIcon icon={faLightbulb} /> Content Recommendations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
