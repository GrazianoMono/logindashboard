import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard';
import Login from './views/Login';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
	  </React.StrictMode>
  );
}

export default App;
