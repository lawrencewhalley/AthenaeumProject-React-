import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login/Login.jsx'
import LandingPage from './Pages/LandingPage.jsx'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
