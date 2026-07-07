import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashRestaurant from './pages/dash_restaurant'
import Login from './pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashRestaurant />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/restau" element={<DashRestaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
