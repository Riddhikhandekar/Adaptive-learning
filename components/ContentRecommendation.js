


// // src/components/ContentRecommendation.js
// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import AuthContext from '../context/AuthContext';

// const ContentRecommendation = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const { user, loading } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       const token = localStorage.getItem('access_token');
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/recommendations/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setCourses(response.data);
//       } catch (err) {
//         setError('Error fetching data');
//         console.error(err);
//       }
//     };

//     if (user && !loading) {
//       fetchRecommendations();
//     }
//   }, [user, loading]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h2>Recommended Courses</h2>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.id}>
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContentRecommendation;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const ContentRecommendations = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/recommendations/');
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching content recommendations:', error.response?.data);
//         setError('Failed to fetch content recommendations.');
//       }
//     };

//     fetchRecommendations();
//   }, []);

//   return (
//     <div>
//       <h2>Recommended Courses</h2>
//       {error && <p>{error}</p>}
//       <ul>
//         {courses.map(course => (
//           <li key={course.id}>{course.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContentRecommendations;









// import React, { useEffect, useState } from 'react';

// const mockCourses = [
//   { id: 1, name: 'Course 1' },
//   { id: 2, name: 'Course 2' },
//   { id: 3, name: 'Course 3' }
// ];

// const ContentRecommendations = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Simulate fetching data from backend
//     const fetchRecommendations = async () => {
//       try {
//         // Instead of making an API call, use mock data
//         setCourses(mockCourses);
//       } catch (error) {
//         console.error('Error fetching content recommendations:', error);
//         setError('Failed to fetch content recommendations.');
//       }
//     };

//     fetchRecommendations();
//   }, []);

//   return (
//     <div>
//       <h2>Recommended Courses</h2>
//       {error && <p>{error}</p>}
//       <ul>
//         {courses.map(course => (
//           <li key={course.id}>{course.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContentRecommendations;





import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Recommendations = () => {
  const [courses, setCourses] = useState([]);
  const user_id = localStorage.getItem('user_id'); // Assuming you store the user_id in localStorage

  useEffect(() => {
    if (user_id) {
      axios.get(`http://localhost:8000/api/recommendations/?user_id=${user_id}`)
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);
        });
    } else {
      console.error('User ID is not available');
    }
  }, [user_id]);

  return (
    <div>
      <h2>Recommended Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
