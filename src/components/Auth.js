import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../services/api';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();  // Replacing useHistory with useNavigate

  const handleAuth = async () => {
    if (isRegister) {
      await register(username, password);
    } else {
      const userData = await login(username, password);
      if (userData) {
        navigate('/papers');  // Replacing history.push with navigate
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isRegister ? 'Register' : 'Login'}</button>
      <p onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
      </p>
    </div>
  );
};

export default Auth;
