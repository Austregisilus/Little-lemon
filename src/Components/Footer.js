import React from 'react'
import { NavLink } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="mt-5 h-[30vh] bg-slate-600 opacity-90">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <nav className="col-span-2 md:col-span-4 ml-4">
          <h6 className="text-[15px] font-bold my-3 text-white">Navigation Links</h6>
          <ul>
            <li className="mt-4 leading-3">
              <NavLink to="/" className="text-slate-200 hover:text-white">Home</NavLink>
            </li>
            <li className="mt-4 leading-3">
              <NavLink to="/Reservation" className="text-slate-200 hover:text-white">Reservation</NavLink>
            </li>
            <li className="mt-4 leading-3">
              <NavLink to="/Menu" className="text-slate-200 hover:text-white">Menu</NavLink>
            </li>
            <li className="mt-4 leading-3">
              <NavLink to="/Order" className="text-slate-200 hover:text-white">Order Online</NavLink>
            </li>
          </ul>
        </nav>
        <nav className="col-span-2 md:col-span-4">
          <h6 className="text-[15px] font-bold my-3 text-white">About us</h6>
          <ul>
            <li className="mt-4 leading-3">
              <NavLink to="/" className="text-slate-200 hover:text-white">Home</NavLink>
            </li>
            <li className="mt-4 leading-3">
              <NavLink to="/Reservation" className="text-slate-200 hover:text-white">Reservation</NavLink>
            </li>
            <li className="mt-4 leading-3">
              <NavLink to="/Menu" className="text-slate-200 hover:text-white">Menu</NavLink>
            </li>
            <li className="mt-4 leading-3">
              <NavLink to="/Order" className="text-slate-200 hover:text-white">Order Online</NavLink>
            </li>
          </ul>
        </nav>
        <nav className="col-span-2 md:col-span-4">
          <h3 className="text-[15px] font-bold my-3 text-white">Social links</h3>
          <ul>
            <li className="mt-4 leading-3">
              <TwitterIcon className="text-slate-200 hover:text-white" />
            </li>
            <li className="mt-4 leading-3">
              <InstagramIcon  className="text-slate-200 hover:text-white"/>
            </li>
            <li className="mt-4 leading-3">
              <FacebookIcon  className="text-slate-200 hover:text-white"/>
            </li>
            <li className="mt-4 leading-3">
              <LinkedInIcon  className="text-slate-200 hover:text-white"/>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer