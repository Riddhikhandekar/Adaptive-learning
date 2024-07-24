// // src/components/Home.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Import Home.css stylesheet


// const Home = () => {
//   return (
//     <div className="home">
//       <header>
//         <h1>Welcome to Your Learning Platform</h1>
//       </header>
//       <main>
//         <section className="hero">
//           <div className="hero-content">
//             <h2>Start Your Learning Journey Today</h2>
//             <p>Explore courses tailored just for you.</p>
//             {/* <Link to="/signup" className="btn btn-primary">Get Started</Link> */}
//           </div>
//         </section>

//         <section className="featured">
//           {/* <h2>Featured Courses</h2> */}
//           {/* Placeholder for featured courses */}
//           <div className="course-list">
//             {/* Example course card */}
//             <div className="course-card">
//               {/* <h3>Course Title</h3> */}
//               {/* <p>Description of the course.</p> */}
//               {/* <Link to="/courses" className="btn btn-secondary">View Course</Link> */}
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer>
//         {/* <nav>
//           <ul>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/content-recommendations">Recommended Courses</Link></li>
//             {/* Add more links as needed */}
//           {/* </ul> */}
//         {/* </nav> } */}
//         {/* <p>&copy; 2024 Your Learning Platform. All rights reserved.</p> */}
//       </footer>
//     </div>
//   );
// };

// export default Home;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Import Home.css stylesheet

// const Home = () => {
//   return (
//     <div className="home">
//       <header>
//         <h1>Welcome to Your Learning Platform</h1>
//       </header>
//       <main>
//         <section className="hero">
//           <div className="hero-content">
//             <h2>Start Your Learning Journey Today</h2>
//             <p>Explore courses tailored just for you.</p>
//             <Link to="/signup" className="btn btn-primary">Get Started</Link>
//           </div>
//         </section>

//         <section className="featured">
//           <h2>Featured Courses</h2>
//           <div className="course-carousel">
//             <div className="course-card">
//               <h3>Course Title 1</h3>
//               <p>Description of the course.</p>
//               <Link to="/courses" className="btn btn-secondary">View Course</Link>
//             </div>
//             <div className="course-card">
//               <h3>Course Title 2</h3>
//               <p>Description of the course.</p>
//               <Link to="/courses" className="btn btn-secondary">View Course</Link>
//             </div>
//             <div className="course-card">
//               <h3>Course Title 3</h3>
//               <p>Description of the course.</p>
//               <Link to="/courses" className="btn btn-secondary">View Course</Link>
//             </div>
//             {/* Add more course cards as needed */}
//           </div>
//         </section>

//         <section className="testimonials">
//           {/* <h2>Student Testimonials</h2> */}
//           <div className="testimonial">
//             {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla leo vitae lectus interdum luctus."</p> */}
//             {/* <p className="author">- John Doe</p> */}
//           </div>
//           <div className="testimonial">
//             {/* <p>"Suspendisse potenti. Proin aliquam leo at sapien tincidunt, vel lacinia risus lobortis."</p> */}
//             {/* <p className="author">- Jane Smith</p> */}
//           </div>
//         </section>

//         <section className="call-to-action">
//           <h2>Ready to Get Started?</h2>
//           <p>Sign up today and unlock a world of learning!</p>
//           <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
//         </section>
//       </main>

//       {
//       /* <footer>
//         <nav>
//           <ul>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/content-recommendations">Recommended Courses</Link></li>
//             {/* Add more links as needed */}
//           {/* </ul> */}
//         {/* </nav> */}
//         {/* <p>&copy; 2024 Your Learning Platform. All rights reserved.</p> */}
//       {/* </footer> */}

//     </div>
//   );
// };

// export default Home;







import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import Home.css stylesheet

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Your Learning Platform</h1>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Start Your Learning Journey Today</h2>
            <p>Explore courses tailored just for you.</p>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </section>

        <section className="featured">
          <h2>Featured Courses</h2>
          <div className="course-carousel">
            <div className="course-card">
              <h3>Course Title 1</h3>
              <p>Description of the course.</p>
              <Link to="/courses" className="btn btn-secondary">View Course</Link>
            </div>
            <div className="course-card">
              <h3>Course Title 2</h3>
              <p>Description of the course.</p>
              <Link to="/courses" className="btn btn-secondary">View Course</Link>
            </div>
            <div className="course-card">
              <h3>Course Title 3</h3>
              <p>Description of the course.</p>
              <Link to="/courses" className="btn btn-secondary">View Course</Link>
            </div>
            {/* Add more course cards as needed */}
          </div>
        </section>

        <section className="testimonials">
          <h2>Student Testimonials</h2>
          <div className="testimonial">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla leo vitae lectus interdum luctus."</p>
            <p className="author">- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"Suspendisse potenti. Proin aliquam leo at sapien tincidunt, vel lacinia risus lobortis."</p>
            <p className="author">- Jane Smith</p>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Ready to Get Started?</h2>
          <p>Sign up today and unlock a world of learning!</p>
          <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
        </section>
      </main>

      <footer>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/content-recommendations">Recommended Courses</Link></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        <p>&copy; 2024 Your Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
