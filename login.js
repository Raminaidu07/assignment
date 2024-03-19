// Login.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    // Perform login logic here
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;