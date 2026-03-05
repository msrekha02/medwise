import React from 'react'

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-[#1e3a3a]/70 bg-gradient-to-r from-[#e6f2f2] via-[#cfe6e6] to-[#e6f2f2] mt-10">

        {/* Left Section */}
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-semibold text-[#1e3a3a]">
              MedWise<span className="text-[#2c5c5c]">.</span>
            </h1>
          </div>

          {/* Platform */}
          <div>
            <p className="text-[#1e3a3a] font-semibold">Platform</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-[#2c5c5c] transition">Home</a></li>
              <li><a href="/#features" className="hover:text-[#2c5c5c] transition">Features</a></li>
              <li><a href="/#about" className="hover:text-[#2c5c5c] transition">About</a></li>
              <li><a href="/#contact" className="hover:text-[#2c5c5c] transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-[#1e3a3a] font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-[#2c5c5c] transition">Medicine Directory</a></li>
              <li><a href="/" className="hover:text-[#2c5c5c] transition">Drug Categories</a></li>
              <li><a href="/" className="hover:text-[#2c5c5c] transition">Health Articles</a></li>
              <li><a href="/" className="hover:text-[#2c5c5c] transition">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#1e3a3a] font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-[#2c5c5c] transition">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-[#2c5c5c] transition">Terms of Use</a></li>
            </ul>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex flex-col max-md:items-center max-md:text-center gap-3 items-end">

          <p className="max-w-60 text-[#1e3a3a]/80">
            Providing reliable and verified medicine information for safer and smarter healthcare decisions.
          </p>

          <div className="flex items-center gap-4 mt-3">
                        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble size-5 hover:text-[#2c5c5c]" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-[#2c5c5c]" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter size-5 hover:text-[#2c5c5c]" aria-hidden="true">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube size-6 hover:text-[#2c5c5c]" aria-hidden="true">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                                </path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                        </a>
                    </div>

          <p className="mt-3 text-center text-[#1e3a3a]/60">
            © 2026 MedWise. All rights reserved.
          </p>

        </div>

      </footer>
    </>
  )
}

export default Footer
