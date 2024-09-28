import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminDashboard from './pages/AdminDashboard'
import Signup from './pages/Signup'
import UserProtectedRoutes from '../context/UserProtectedRoute'
import AdminProtectedRoutes from '../context/AdminProtectedRoute'
import AddDoctorDashboard from './components/AddDoctorDashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const App = () => {
  const queryClient = new QueryClient();

  return (
   <div className=''>
  <Navbar/>
  <QueryClientProvider client={queryClient}>
<Routes>
  <Route path='/'  element={<Home />}/>
  <Route path='/doctors/:speciality?'  element={<Doctors />}/>
  <Route path='login'  element={<Login />}/>
  <Route path='/about'  element={<About />}/>
  <Route path='/contact'  element={<Contact />}/>
  <Route path='/my-profile'  element={<UserProtectedRoutes><MyProfile /></UserProtectedRoutes>}/>
  <Route path='/admindashboard'  element={<AdminProtectedRoutes> <AdminDashboard/>
  
 </AdminProtectedRoutes>}/>
  {/* <Route path='/adddoctor'  element={<AdminProtectedRoutes><AddDoctorDashboard /></AdminProtectedRoutes>}/> */}

  <Route path='/my-appointment'  element={<MyAppointment/>}/>
  <Route path='/appointment/:doctorId'  element={<Appointment />}/>
  <Route path='signup'  element={<Signup />}/>
</Routes>
</QueryClientProvider>
<Footer/>
   </div>
  )
}

export default App