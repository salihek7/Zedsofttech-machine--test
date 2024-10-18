import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ListViewPage from './components/ListViewPage';
import DetailViewPage from './components/DetailViewPage';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/list"
          element={isLoggedIn ? <ListViewPage /> : <Navigate to="/" />}
        />
        <Route path="/detail/:id" element={<DetailViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
