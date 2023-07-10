import React from 'react'
import hero from "../Components/Assets/restauranfood.jpg"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-auto lg:h-[90vh] bg-gradient-to-r from-lime-700 to-yellow-400 px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row py-[20px] space-x-2">
        <div className="flex flex-1 flex-col basis-1/2 py-10 justify-center">
            <h6 className="lg:text-[20px] font-bold text-slate-100 text-[15px] text-center">
                Welcome to
            </h6>
            <h1 className="lg:text-[64px] font-bold text-yellow-500 text-[40px] text-center">
                Little Lemon
            </h1>
            <h2 className="lg:text-[40px] font-bold text-slate-100 text-[30px] text-center">
                Chicago
            </h2>
            <p className="my-6 mx-6 text-md text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-row flex-10 space-x-10 justify-start my-6 mx-6">
                <NavLink
                 to="/Reservation"
                 className="p-2 w-40 font-bold rounded-lg bg-yellow-400 text-center text-gray-800 hover:bg-yellow-500 hover:text-gray-950">
                    Reserve a table
                    </NavLink>
                <p className="inline-flex font-bold items-center text-slate-50">About Little Lemon<span className="mx-0.5"><ArrowLongRightIcon className="h-6 w-6"/></span></p>
            </div>
        </div>
        <div className="flex grow-0 basis-1/2 bg-slate-600 rounded-[16px]">
            <img
            src={hero}
            className="w-full lg:h-[98vh]] h-[80vh] object-cover rounded-[16px]"
            alt="hero"/>
        </div>
    </div>
</section>
  )
}

export default Hero