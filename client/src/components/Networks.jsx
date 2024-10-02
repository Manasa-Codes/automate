
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Networks.css';

// function Networks() {
//   const navigate = useNavigate();
  
//   // State to track connection status for each platform
//   const [facebookConnected, setFacebookConnected] = useState(false);
//   const [instagramConnected, setInstagramConnected] = useState(false);
//   const [twitterConnected, setTwitterConnected] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:3001/status')
//       .then(res => res.json())
//       .then(data => {
//         setFacebookConnected(data.facebookConnected);
//         setInstagramConnected(data.instagramConnected);
//       setTwitterConnected(data.twitterConnected);
//       })
//       .catch((err) => console.error('Error checking Facebook connection status:', err));

//     // Check Instagram and Twitter connection status
//     fetch('http://localhost:3001/check-instagram-status', {
//       credentials: 'include',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.connected) {
//           setInstagramConnected(true);
//         }
//       })
//       .catch((err) => console.error('Error checking Instagram connection status:', err));

//     fetch('http://localhost:3001/check-twitter-status', {
//       credentials: 'include',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.connected) {
//           setTwitterConnected(true);
//         }
//       })
//       .catch((err) => console.error('Error checking Twitter connection status:', err));

//   }, []);

//   // Handle connect buttons
//   const handleConnect = (platform) => {
//     if (platform === 'Facebook') {
//       window.location.href = 'http://localhost:3001/auth/facebook'; 
//     } else if (platform === 'Instagram') {
//       window.location.href = 'http://localhost:3001/auth/instagram'; 
//     } else if (platform === 'Twitter') {
//       window.location.href = 'http://localhost:3001/auth/twitter'; 
//     }
//   };
//   setTimeout(() => {
//     navigate('/networks');
//   }, 1000); // Adjust the delay if needed
// };

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
//           <button 
//             className="connect-button"
//             onClick={() => handleConnect('Facebook')}
//             disabled={facebookConnected} // Disable button if already connected
//           >
//             {facebookConnected ? 'Connected' : 'Connect'}
//           </button>
//         </div>

//         {/* Instagram */}
//         <div className="platform">
//           <span>Instagram</span>
//           <button 
//             className="connect-button"
//             onClick={() => handleConnect('Instagram')}
//             disabled={instagramConnected} // Disable button if already connected
//           >
//             {instagramConnected ? 'Connected' : 'Connect'}
//           </button>
//         </div>

//         {/* Twitter */}
//         <div className="platform">
//           <span>Twitter</span>
//           <button 
//             className="connect-button"
//             onClick={() => handleConnect('Twitter')}
//             disabled={twitterConnected} // Disable button if already connected
//           >
//             {twitterConnected ? 'Connected' : 'Connect'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Networks;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networks.css';

function Networks() {
  const navigate = useNavigate();
  
  // State to track connection status for each platform
  const [facebookConnected, setFacebookConnected] = useState(false);
  const [instagramConnected, setInstagramConnected] = useState(false);
  const [twitterConnected, setTwitterConnected] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/status')
      .then(res => res.json())
      .then(data => {
        setFacebookConnected(data.facebookConnected);
        setInstagramConnected(data.instagramConnected);
        setTwitterConnected(data.twitterConnected);
      })
      .catch((err) => console.error('Error checking Facebook connection status:', err));

    // Check Instagram and Twitter connection status
    fetch('http://localhost:3001/check-instagram-status', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.connected) {
          setInstagramConnected(true);
        }
      })
      .catch((err) => console.error('Error checking Instagram connection status:', err));

    fetch('http://localhost:3001/check-twitter-status', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.connected) {
          setTwitterConnected(true);
        }
      })
      .catch((err) => console.error('Error checking Twitter connection status:', err));

  }, [navigate]);

  // Handle connect buttons
  const handleConnect = (platform) => {
    if (platform === 'Facebook') {
      window.location.href = 'http://localhost:3001/auth/facebook'; 
    } else if (platform === 'Instagram') {
      window.location.href = 'http://localhost:3001/auth/instagram'; 
    } else if (platform === 'Twitter') {
      window.location.href = 'http://localhost:3001/auth/twitter'; 
    }
  
  };

  const handleDeleteData = () => {
    navigate('/deleteData'); // Redirect to DeleteData.jsx
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
            <div className="platform">
          <button 
            className="delete-button"
            onClick={handleDeleteData}
          >
            Delete Data
          </button>
        </div>
            
          </li>
        </ul>
      </nav>

      {/* Platforms Section */}
      <div className="platforms-container">
        <h2>Select Social Media Platforms</h2>

        {/* Facebook */}
        <div className="platform">
          <span>Facebook</span>
          <button 
            className="connect-button"
            onClick={() => handleConnect('Facebook')}
            disabled={facebookConnected} // Disable button if already connected
          >
            {facebookConnected ? 'Connected' : 'Connect'}
          </button>
        </div>

        {/* Instagram */}
        <div className="platform">
          <span>Instagram</span>
          <button 
            className="connect-button"
            onClick={() => handleConnect('Instagram')}
            disabled={instagramConnected} // Disable button if already connected
          >
            {instagramConnected ? 'Connected' : 'Connect'}
          </button>
        </div>

        {/* Twitter */}
        <div className="platform">
          <span>Twitter</span>
          <button 
            className="connect-button"
            onClick={() => handleConnect('Twitter')}
            disabled={twitterConnected} // Disable button if already connected
          >
            {twitterConnected ? 'Connected' : 'Connect'}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Networks;

