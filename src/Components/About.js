import React from 'react';
import about from "../Components/Assets/Mario and Adrian A.jpg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-[100px] mx-[40px]">
        <div>
            <img
            src={about}
            alt="about"
            className="rounded-[16px]"
            />
        </div>
        <div className="flex flex-col my-6 mx-6 justify-center">
            <h5 className="lg:text-[30px] lg:text-left font-bold text-lime-500 text-[20px] text-center">
                About us
            </h5>
            <h1 className="lg:text-[64px] lg:text-left font-bold text-[40px] text-center text-yellow-500">
                Little Lemon
            </h1>
            <p className="mt-10 text-lg text-slate-900 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="inline-flex font-bold justify-center items-center text-white mt-10 bg-slate-950 h-10 w-[200px] rounded-[16px]">
                About Little Lemon
                <span className="mx-0.5">
                    <ArrowLongRightIcon className="h-6 w-6"/>
                </span>
            </button>
        </div>
    </div>
  )
}

export default About