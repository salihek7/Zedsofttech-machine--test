import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import bg1 from '../../src/images/image1.jpg';  
import bg2 from '../../src/images/image2.jpg';
import bg3 from '../../src/images/image3.jpg';
import bg4 from '../../src/images/image4.jpg';
import bg5 from '../../src/images/image5.jpg';
import bg6 from '../../src/images/image6.jpg';
import bg7 from '../../src/images/image7.jpg';


function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bgIndex, setBgIndex] = useState(0); 
  const navigate = useNavigate(); 

  
  const backgrounds = [
    `url(${bg1})`,
    `url(${bg2})`,
    `url(${bg3})`,
    `url(${bg4})`,
    `url(${bg5})`,
    `url(${bg6})`,
    `url(${bg7})`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length); // Change background every 5 seconds
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(); 
      navigate('/list'); 
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: backgrounds[bgIndex] }}>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
