import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

function Header() {
  return (
    <div className="hero  min-h-screen">
    <div className="hero-content bg-fuchsia-300 rounded-md p-36 flex-col lg:flex-row-reverse">
      <img
        src={assets.header_img} alt="header img"
        className="bg-inherit max-w-sm rounded-lg" />
      <div>
        <h1 className="text-5xl font-bold"> Book Appointment <br/>with tructed Doctors</h1>
        <div className="flex justify-between items-center">
            <img className='w-28 py-5' src={assets.group_profiles} alt="" />
        <p className="py-6">
        simply browse through our group of doctors<br className='hidden md:block'/>schedual your appointment
        </p>
        </div>
        <a href="#speciality" className="btn border-cyan-500 bg-cyan-800 text-white">Book appointment <img className="w-5 " src={assets.arrow_icon} alt="book appointment" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Header