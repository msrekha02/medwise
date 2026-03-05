import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div
      id='cta'
      className='border-y border-dashed border-[#8fbcbc] w-full max-w-5xl mx-auto px-10 sm:px-16 mt-'
    >
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-[#8fbcbc] py-16 sm:py-20 ">

            {/* Text */}
            <p className="text-xl font-medium max-w-md text-[#1e3a3a]">
                Access verified medicine information and make smarter healthcare decisions with MedWise.
            </p>

            {/* Button */}
            <Link 
                to="/app" 
                className="flex items-center gap-2 rounded py-3 px-8 bg-[#2c5c5c] hover:bg-[#1e3a3a] transition text-white"
            >
                <span>Explore Now</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="size-4.5"
                >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                </svg>
            </Link>

        </div>
    </div>
  )
}

export default CallToAction
