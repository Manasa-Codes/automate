
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Hook for navigating between pages

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/signup', {
//       username,
//       email,
//       password,
//     })
//       .then((res) => {
//         console.log(res);
//         // Redirect to login page after successful signup
//         navigate('/login'); // Redirects to the login page
//       })
//       .catch((err) => {
//         setError(err.response.data.error);
//       });
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Signup</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', {
      username,
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        navigate('/login'); // Redirect to login page after successful signup
      })
      .catch((err) => {
        if (err.response && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError("An error occurred during signup.");
        }
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
