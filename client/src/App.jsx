// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
// import Homepage from './components/Homepage';
// import Networks from './components/Networks'; // Import Networks component
// import Login from './components/Login'; // Import Login component
// import Signup from './components/Signup'; // Import Signup component

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           {/* Define the routes */}
//           <Route path="/" element={<Homepage />} />  {/* Home route */}
//           <Route path="/networks" element={<Networks />} />  {/* Networks route */}
//           <Route path="/login" element={<Login />} />  {/* Login route */}
//           <Route path="/signup" element={<Signup />} />  {/* Signup route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Homepage from './components/Homepage';
import Networks from './components/Networks'; // Import Networks component
import Login from './components/Login'; // Import Login component
import Signup from './components/Signup'; // Import Signup component
import DeleteData from './components/DeleteData'; // Import DeleteData component

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Homepage />} />  {/* Home route */}
          <Route path="/networks" element={<Networks />} />  {/* Networks route */}
          <Route path="/login" element={<Login />} />  {/* Login route */}
          <Route path="/signup" element={<Signup />} />  {/* Signup route */}
          <Route path="/deleteData" element={<DeleteData />} />  {/* DeleteData route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
