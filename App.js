// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Profile from './components/Profile';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import ContentRecommendation from './components/ContentRecommendation';
// import Courses from './components/Courses';

// const App = () => {
//   return (
//     <AuthProvider> {/* Assuming AuthProvider manages authentication state */}
//       <Router>
//         <NavBar />
//         <div className="App">
//           <main>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/content-recommendations" element={<ContentRecommendation />} />
//               <Route path="/courses" element={<Courses />} />
//               {/* Add other routes as needed */}
//             </Routes>
//           </main>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ContentRecommendation from './components/ContentRecommendation';
import Courses from './components/Courses';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <AuthProvider> {/* Assuming AuthProvider manages authentication state */}
      <Router>
        <NavBar />
        <div className="App">
          <main>
            <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/home" exact component={Home} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={
                //  <PrivateRoute>
                 <Profile />
              //  </PrivateRoute>
              } />
              <Route path="/content-recommendations" element={<ContentRecommendation />} />
              <Route path="/courses" element={<Courses />} />
              {/* Add other routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
