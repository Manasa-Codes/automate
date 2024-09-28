
// // import React, { useEffect, useState } from "react";
// // import axios from 'axios';
// // import './Homepage.css';

// // function Homepage() {
// //   const [file, setFile] = useState(null); // State for file upload
// //   const [image, setImage] = useState([]); // State for images
// //   const [platforms, setPlatforms] = useState([]); // State for selected platforms
// //   const [caption, setCaption] = useState(""); // State for caption
// //   const [previewImage, setPreviewImage] = useState(null); // Preview the image before upload

// //   // Platform options
// //   const availablePlatforms = ['Facebook', 'Instagram', 'Twitter'];

// //   // Handle platform selection
// //   const handlePlatformChange = (e) => {
// //     const selectedPlatform = e.target.value;
// //     if (platforms.includes(selectedPlatform)) {
// //       setPlatforms(platforms.filter(p => p !== selectedPlatform));
// //     } else {
// //       setPlatforms([...platforms, selectedPlatform]);
// //     }
// //   };

// //   // Upload handler
// //   const handleUpload = () => {
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('caption', caption);
// //     formData.append('platforms', JSON.stringify(platforms)); // Send platforms as JSON string

// //     axios.post('http://localhost:3001/upload', formData)
// //       .then(res => {
// //          console.log(res);
// //          fetchImages(); 
        
// //       })
// //       .catch(err => console.log(err));
// //   };

// //   // Fetch images from the server
// //   const fetchImages = () => {
// //     axios.get('http://localhost:3001/getImage')
// //       .then(res => setImage(res.data)) // Update the image state
// //       .catch(err => console.log(err));
// //   };

// //   // Preview the selected image
// //   const handleFileChange = (e) => {
// //     const selectedFile = e.target.files[0];
// //     setFile(selectedFile);
// //     setPreviewImage(URL.createObjectURL(selectedFile)); // Set the preview image
// //   };

// //   // Fetch images on component mount
// //   useEffect(() => {
// //     fetchImages();
// //   }, []);

// //   return (
// //     <div className="container">
// //       <input type="file" onChange={handleFileChange} />
// //       {previewImage && <img src={previewImage} alt="preview" className="preview" />}
      
// //       <input 
// //         type="text" 
// //         placeholder="Add a caption..." 
// //         value={caption} 
// //         onChange={e => setCaption(e.target.value)} 
// //       />
      
       
// //       <button onClick={handleUpload}>Upload</button>
// //       <br />
// //     </div>
// //   );
// // }

// // export default Homepage;
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import './Homepage.css';

// function Homepage() {
//   const [file, setFile] = useState(null); // State for file upload
//   const [image, setImage] = useState([]); // State for images
//   const [platforms, setPlatforms] = useState([]); // State for selected platforms
//   const [caption, setCaption] = useState(""); // State for caption
//   const [previewImage, setPreviewImage] = useState(null); // Preview the image before upload

//   // Platform options
//   const availablePlatforms = ['Facebook', 'Instagram', 'Twitter'];

//   // Handle platform selection
//   const handlePlatformChange = (e) => {
//     const selectedPlatform = e.target.value;
//     if (platforms.includes(selectedPlatform)) {
//       setPlatforms(platforms.filter(p => p !== selectedPlatform));
//     } else {
//       setPlatforms([...platforms, selectedPlatform]);
//     }
//   };

//   // Upload handler
//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('caption', caption);
//     formData.append('platforms', JSON.stringify(platforms)); // Send platforms as JSON string

//     axios.post('http://localhost:3001/upload', formData)
//       .then(res => {
//         console.log(res);
//         fetchImages();
//       })
//       .catch(err => console.log(err));
//   };

//   // Fetch images from the server
//   const fetchImages = () => {
//     axios.get('http://localhost:3001/getImage')
//       .then(res => setImage(res.data)) // Update the image state
//       .catch(err => console.log(err));
//   };

//   // Preview the selected image
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setPreviewImage(URL.createObjectURL(selectedFile)); // Set the preview image
//   };

//   // Fetch images on component mount
//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-logo">MyApp</div>
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <a href="Networks.jsx"> <button className="navbar-button">Networks</button></a>
//           </li>
//         </ul>
//       </nav>

//       {/* Content */}
//       <div className="container">
//         <input type="file" onChange={handleFileChange} />
//         {previewImage && <img src={previewImage} alt="preview" className="preview" />}

//         <input
//           type="text"
//           placeholder="Add a caption..."
//           value={caption}
//           onChange={e => setCaption(e.target.value)}
//         />

//         <button onClick={handleUpload}>Upload</button>
//         <br />
//       </div>
//     </div>
//   );
// }

// export default Homepage;
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Homepage.css';

function Homepage() {
  const [file, setFile] = useState(null); // State for file upload
  const [image, setImage] = useState([]); // State for images
  const [platforms, setPlatforms] = useState([]); // State for selected platforms
  const [caption, setCaption] = useState(""); // State for caption
  const [previewImage, setPreviewImage] = useState(null); // Preview the image before upload

  const navigate = useNavigate(); // Initialize useNavigate

  // Platform options
  const availablePlatforms = ['Facebook', 'Instagram', 'Twitter'];

  // Handle platform selection
  const handlePlatformChange = (e) => {
    const selectedPlatform = e.target.value;
    if (platforms.includes(selectedPlatform)) {
      setPlatforms(platforms.filter(p => p !== selectedPlatform));
    } else {
      setPlatforms([...platforms, selectedPlatform]);
    }
  };

  // Upload handler
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('caption', caption);
    formData.append('platforms', JSON.stringify(platforms)); // Send platforms as JSON string

    axios.post('http://localhost:3001/upload', formData)
      .then(res => {
        console.log(res);
        fetchImages();
      })
      .catch(err => console.log(err));
  };

  // Fetch images from the server
  const fetchImages = () => {
    axios.get('http://localhost:3001/getImage')
      .then(res => setImage(res.data)) // Update the image state
      .catch(err => console.log(err));
  };

  // Preview the selected image
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewImage(URL.createObjectURL(selectedFile)); // Set the preview image
  };

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">MyApp</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            {/* Navigate to Networks page when the button is clicked */}
            <button 
              className="navbar-button" 
              onClick={() => navigate('/networks')} // Use useNavigate hook for redirection
            >
              Networks
            </button>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="container">
        <input type="file" onChange={handleFileChange} />
        {previewImage && <img src={previewImage} alt="preview" className="preview" />}

        <input
          type="text"
          placeholder="Add a caption..."
          value={caption}
          onChange={e => setCaption(e.target.value)}
        />

        <button onClick={handleUpload}>Upload</button>
        <br />
      </div>
    </div>
  );
}

export default Homepage;
