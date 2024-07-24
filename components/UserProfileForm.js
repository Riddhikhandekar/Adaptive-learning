
// // src/components/UserProfileForm.js


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    profile_picture: null,
    bio: '',
    secondary_learning_style: '',
    subjects_of_interest: '',
    motivation_level: '',
    preferred_content_format: '',
    study_schedule: '',
    previous_education_level: '',
    preferred_assessment_types: '',
  });

  useEffect(() => {
    // Fetch the user profile data to pre-fill the form
    axios.get('http://localhost:8000/api/profile/')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profile data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios.post('http://localhost:8000/api/profile/', data)
      .then(response => {
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Date of Birth:</label>
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Phone Number:</label>
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Profile Picture:</label>
        <input type="file" name="profile_picture" onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Bio:</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555', resize: 'vertical' }}></textarea>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Secondary Learning Style:</label>
        <select name="secondary_learning_style" value={formData.secondary_learning_style} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="visual">Visual</option>
          <option value="auditory">Auditory</option>
          <option value="kinesthetic">Kinesthetic</option>
          <option value="reading/writing">Reading/Writing</option>
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Subjects of Interest:</label>
        <select name="subjects_of_interest" value={formData.subjects_of_interest} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="mathematics">Mathematics</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="literature">Literature</option>
          <option value="programming">Programming</option>
          <option value="languages">Languages</option>
          <option value="arts">Arts</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Motivation Level:</label>
        <select name="motivation_level" value={formData.motivation_level} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          {[...Array(10).keys()].map(num => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Preferred Content Format:</label>
        <select name="preferred_content_format" value={formData.preferred_content_format} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="videos">Videos</option>
          <option value="text">Text</option>
          <option value="interactive">Interactive Content</option>
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Study Schedule:</label>
        <select name="study_schedule" value={formData.study_schedule} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="night">Night</option>
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Previous Education Level:</label>
        <select name="previous_education_level" value={formData.previous_education_level} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="high_school">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="post_graduate">Post-Graduate</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', color: '#333' }}>Preferred Assessment Types:</label>
        <select name="preferred_assessment_types" value={formData.preferred_assessment_types} onChange={handleChange} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#555' }}>
          <option value="">Select...</option>
          <option value="quiz">Quiz</option>
          <option value="assignment">Assignment</option>
        </select>
      </div>
      <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>Save</button>
    </form>
  );
};

export default UserProfileForm;






// import React, { useState } from 'react';
// import axios from 'axios';

// const UserProfileForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     date_of_birth: '',
//     gender: '',
//     phone_number: '',
//     profile_picture: null,
//     bio: '',
//     secondary_learning_style: '',
//     subjects_of_interest: '',
//     motivation_level: '',
//     preferred_content_format: '',
//     study_schedule: '',
//     previous_education_level: '',
//     preferred_assessment_types: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     axios.post('/api/profile/', data)
//       .then(response => {
//         alert('Profile updated successfully!');
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Date of Birth:</label>
//         <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Gender:</label>
//         <select name="gender" value={formData.gender} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label>Phone Number:</label>
//         <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Profile Picture:</label>
//         <input type="file" name="profile_picture" onChange={handleChange} />
//       </div>
//       <div>
//         <label>Bio:</label>
//         <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
//       </div>
//       <div>
//         <label>Secondary Learning Style:</label>
//         <select name="secondary_learning_style" value={formData.secondary_learning_style} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="visual">Visual</option>
//           <option value="auditory">Auditory</option>
//           <option value="kinesthetic">Kinesthetic</option>
//           <option value="reading/writing">Reading/Writing</option>
//         </select>
//       </div>
//       <div>
//         <label>Subjects of Interest:</label>
//         <select name="subjects_of_interest" value={formData.subjects_of_interest} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="mathematics">Mathematics</option>
//           <option value="science">Science</option>
//           <option value="history">History</option>
//           <option value="literature">Literature</option>
//           <option value="programming">Programming</option>
//           <option value="languages">Languages</option>
//           <option value="arts">Arts</option>
//           <option value="music">Music</option>
//           <option value="sports">Sports</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label>Motivation Level:</label>
//         <select name="motivation_level" value={formData.motivation_level} onChange={handleChange}>
//           <option value="">Select...</option>
//           {[...Array(10).keys()].map(num => (
//             <option key={num + 1} value={num + 1}>{num + 1}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label>Preferred Content Format:</label>
//         <select name="preferred_content_format" value={formData.preferred_content_format} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="videos">Videos</option>
//           <option value="text">Text</option>
//           <option value="interactive">Interactive Content</option>
//         </select>
//       </div>
//       <div>
//         <label>Study Schedule:</label>
//         <select name="study_schedule" value={formData.study_schedule} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="morning">Morning</option>
//           <option value="afternoon">Afternoon</option>
//           <option value="evening">Evening</option>
//           <option value="night">Night</option>
//         </select>
//       </div>
//       <div>
//         <label>Previous Education Level:</label>
//         <select name="previous_education_level" value={formData.previous_education_level} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="high_school">High School</option>
//           <option value="undergraduate">Undergraduate</option>
//           <option value="graduate">Graduate</option>
//           <option value="post_graduate">Post-Graduate</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label>Preferred Assessment Types:</label>
//         <select name="preferred_assessment_types" value={formData.preferred_assessment_types} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="quiz">Quiz</option>
//           <option value="assignment">Assignment</option>
//         </select>
//       </div>
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default UserProfileForm;