import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import CustumerReservation from './pages/customerReservation'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login/>} />
          <Route path="/admin/register" element={<Register/>} />
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<CustumerReservation/>}></Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
