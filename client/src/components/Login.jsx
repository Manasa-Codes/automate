// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState(''); 
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Hook for navigating between pages

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   axios.post('http://localhost:3001/login', {
//     email,
//     password,
//   })
//     .then((res) => {
//       console.log(res);
  
//       navigate('/'); 
//     })
//     .catch((err) => {
//       if (err.response && err.response.data.error) {
//         setError(err.response.data.error); // Set the error message from the backend
//       } else {
//         setError("Invalid email or password"); // Handle any other errors
//       }
//     });
// };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Login</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        navigate('/'); // Redirect to home page after successful login
      })
      .catch((err) => {
        if (err.response && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError("Invalid email or password");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
