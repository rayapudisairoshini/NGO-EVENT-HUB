import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoHome } from "react-icons/io5";
function Header() {
  return (
    <div className='d-flex flex-wrap justify-content-around header '>
      <h1>Myshop</h1>
      <ul className='nav fs-5 p-3'>
      <li className='nav-item'>
            <Link to='home' className='nav-link'>
            <IoHome className='fs-3 text-warning'/>Home</Link>
        </li>
       
        <li className='nav-item'>
            <Link to='register' className='nav-link'>
            <SiGnuprivacyguard className='fs-3 text-warning'/>Register</Link>
        </li>
        <li className='nav-item'>
            <Link to='aboutus' className='nav-link'>
            <IoIosInformationCircleOutline className='fs-3 text-warning' />AboutUs</Link>
        </li>
        <li className='nav-item'>
            <Link to='' className='nav-link'>
            <FaSignInAlt className='fs-3 text-warning me-2'/>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header