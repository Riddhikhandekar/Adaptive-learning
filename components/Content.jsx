// // components/Content.js

import React from 'react';

const Content = () => {
  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/HbKsvJkftbQ' },
    { id: 2, url: 'https://www.youtube.com/embed/V6kJKn7VsFs' },
    { id: 3, url: 'https://www.youtube.com/embed/HbKsvJkftbQ' },
    { id: 4, url: 'https://www.youtube.com/embed/V6kJKn7VsFs' },
    // Add more video URLs here
  ];

  return (
    <div className="content">
      <h2>YouTube Video Carousel</h2>
      <div id="videoCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {videos.map((video, index) => (
            <div key={video.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={video.url}
                  title={`YouTube Video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#videoCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#videoCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Content;




// components/Content.js

// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported

// const Content = () => {
//   const videos = [
//     { id: 1, url: 'https://www.youtube.com/embed/HbKsvJkftbQ' },
//     { id: 2, url: 'https://www.youtube.com/embed/V6kJKn7VsFs' },
//     { id: 3, url: 'https://www.youtube.com/embed/HbKsvJkftbQ' },
//     { id: 4, url: 'https://www.youtube.com/embed/V6kJKn7VsFs' },
//     // Add more video URLs here
//   ];

//   useEffect(() => {
//     // Initialize Bootstrap carousel if not done elsewhere
//     const carousel = document.querySelector('#videoCarousel');
//     if (carousel) {
//       new window.bootstrap.Carousel(carousel); // Initialize Bootstrap carousel
//     }
//   }, []);

//   return (
//     <div className="content">
//       <h2>YouTube Video Carousel</h2>
//       <div id="videoCarousel" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           {videos.map((video, index) => (
//             <div key={video.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//               <div className="video-container">
//                 <iframe
//                   width="560"
//                   height="315"
//                   src={video.url}
//                   title={`YouTube Video ${video.id}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           ))}
//         </div>
//         <a className="carousel-control-prev" href="#videoCarousel" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#videoCarousel" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Content;
