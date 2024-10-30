import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Staff from './pages/Staff'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Nav/> {/* show in all pages */}
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/staff' element={<Staff/>} />
      <Route path='/staff/:country' element={<Staff/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
      <Route path='/my-appointment' element={<MyAppointment/>} />
      <Route path='/appointment/:comId' element={<Appointment/>} /> 

   </Routes>
   <Footer/>
    </div>
  )
}

export default App