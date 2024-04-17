import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroPage from './components/IntroPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePasswordPage from './components/LoginForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
