// import { useState } from 'react'

// import './App.css'
// import Homepage from './components/Homepage'

// function App() {
  
//   return (
//     <div>
//       <Homepage/>
      
//     </div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Homepage from './components/Homepage';
import Networks from './components/Networks'; // Import Networks component

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Homepage />} />  {/* Home route */}
          <Route path="/networks" element={<Networks />} />  {/* Networks route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
