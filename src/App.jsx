import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import MoviePage from './components/MoviePage/MoviePage.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/MoviePage/:movieID" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
