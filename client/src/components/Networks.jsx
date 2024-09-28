// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Networks.css';

// // function Networks() {
// //   const navigate = useNavigate(); // useNavigate for redirecting

// //   return (
// //     <div>
// //       {/* Navbar */}
// //       <nav className="navbar">
// //         <div className="navbar-logo">MyApp</div>
// //         <ul className="navbar-menu">
// //           <li className="navbar-item">
// //             <button className="navbar-button" onClick={() => navigate('/')}>
// //               Home
// //             </button>
// //           </li>
// //         </ul>
// //       </nav>

// //       {/* Platforms Section */}
// //       <div className="platforms-container">
// //         <h2>Select Social Media Platforms</h2>

// //         {/* Facebook */}
// //         <div className="platform">
// //           <span>Facebook</span>
// //           <button className="connect-button">Connect</button>
// //         </div>

// //         {/* Instagram */}
// //         <div className="platform">
// //           <span>Instagram</span>
// //           <button className="connect-button">Connect</button>
// //         </div>

// //         {/* Twitter */}
// //         <div className="platform">
// //           <span>Twitter</span>
// //           <button className="connect-button">Connect</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Networks;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Networks.css';

// function Networks() {
//   const navigate = useNavigate(); // useNavigate for redirecting

//   const handleConnect = (platform) => {
//     if (platform === 'Facebook') {
//       // Redirect to your backend's Facebook authentication route
//       window.location.href = 'http://localhost:3001/auth/facebook'; // Make sure this route exists in your backend
//     } else {
//       // Handle other platforms here
//       console.log(`Connect with ${platform}`);
//     }
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-logo">MyApp</div>
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <button className="navbar-button" onClick={() => navigate('/')}>
//               Home
//             </button>
//           </li>
//         </ul>
//       </nav>

//       {/* Platforms Section */}
//       <div className="platforms-container">
//         <h2>Select Social Media Platforms</h2>

//         {/* Facebook */}
//         <div className="platform">
//           <span>Facebook</span>
//           <button className="connect-button" onClick={() => handleConnect('Facebook')}>
//             Connect
//           </button>
//         </div>

//         {/* Instagram */}
//         <div className="platform">
//           <span>Instagram</span>
//           <button className="connect-button" onClick={() => handleConnect('Instagram')}>
//             Connect
//           </button>
//         </div>

//         {/* Twitter */}
//         <div className="platform">
//           <span>Twitter</span>
//           <button className="connect-button" onClick={() => handleConnect('Twitter')}>
//             Connect
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Networks;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Networks.css';

function Networks() {
  const navigate = useNavigate(); // useNavigate for redirecting

  const handleConnect = (platform) => {
    if (platform === 'Facebook') {
      // Redirect to your backend's Facebook authentication route
      window.location.href = 'http://localhost:3001/auth/facebook'; // Make sure this route exists in your backend
    } else {
      // Handle other platforms here (e.g., Instagram, Twitter)
      console.log(`Connect with ${platform}`);
      // You can add similar redirect logic for Instagram and Twitter if needed
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">MyApp</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button className="navbar-button" onClick={() => navigate('/')}>
              Home
            </button>
          </li>
        </ul>
      </nav>

      {/* Platforms Section */}
      <div className="platforms-container">
        <h2>Select Social Media Platforms</h2>

        {/* Facebook */}
        <div className="platform">
          <span>Facebook</span>
          <button className="connect-button" onClick={() => handleConnect('Facebook')}>
            Connect
          </button>
        </div>

        {/* Instagram */}
        <div className="platform">
          <span>Instagram</span>
          <button className="connect-button" onClick={() => handleConnect('Instagram')}>
            Connect
          </button>
        </div>

        {/* Twitter */}
        <div className="platform">
          <span>Twitter</span>
          <button className="connect-button" onClick={() => handleConnect('Twitter')}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Networks;

