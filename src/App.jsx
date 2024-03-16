import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login/Login.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import MovieUpload from './Pages/MovieUpload.jsx'
import MovieList from './Pages/MovieList.jsx'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/MovieUpload" element={<MovieUpload />} />
          <Route path="/MovieList" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
