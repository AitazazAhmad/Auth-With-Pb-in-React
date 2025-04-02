import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/signUp'; // Ensure the path is correct
import SignIn from './components/SignIn'; // Ensure the path is correct

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect to SignUp */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;