import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './Content';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState('');

  // Fetch courses for the current page
  useEffect(() => {
    setLoading(true);
    axios.get(`http://127.0.0.1:8000/courses/?page=${currentPage}`)
      .then(response => {
        setCourses(response.data.results);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError(error);
        setLoading(false);
      });
  }, [currentPage]);

  // Handle filtering by subject
  useEffect(() => {
    setLoading(true);
    axios.get(`http://127.0.0.1:8000/courses/?subject=${filter}`)
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError(error);
        setLoading(false);
      });
  }, [filter]);

  // Function to handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Courses</h1>

      {/* Filter input */}
      <input type="text" placeholder="Filter by subject" value={filter} onChange={(e) => setFilter(e.target.value)} />

      {/* Error handling */}
      {error && <p>Error fetching courses: {error.message}</p>}

      {/* Loading indicator */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>Subjects: {course.subjects.join(', ')}</p>
                <p>Level: {course.level}</p>
                <p>Tags: {course.tags.join(', ')}</p>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div>
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            )}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            )}
          </div>
        </div>
      )}

      <Content />
    </div>
  );
};

export default Courses;
