import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (<>
    <header className="d-flex flex-column align-items-center justify-content-center">
        <div className="w-100 h-100 z-1 position-absolute bg-black bg-opacity-50"></div>
        <div className="header-content z-2 text-center text-white">
            <div className="py-3">
                <h2 className="">Hello</h2>
                <h1 className="fw-lighter">I Am <span className='fw-bolder'></span>|</h1>
            </div>
            <div className="pt-2 d-flex justify-content-center">
                <Link to={'https://www.linkedin.com/in/youssef-mansour1'} target='_blank' className='text-decoration-none'>
                    <div className="header-icon rounded-circle mx-1 p-3 d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-linkedin-in text-white"></i>
                    </div>
                </Link>
                <Link to={'https://github.com/YoussefMans0ur'} target='_blank' className='text-decoration-none'>
                    <div className="header-icon rounded-circle mx-1 p-3 d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-github text-white"></i>
                    </div>
                </Link>
                <Link to={'https://www.facebook.com/profile.php?id=100006219289400'} target='_blank' className='text-decoration-none'>
                    <div className="header-icon rounded-circle mx-1 p-3 d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-facebook-f text-white"></i>
                    </div>
                </Link>
                <Link to={'https://www.youtube.com/@youssefmohamed5160'} target='_blank' className='text-decoration-none'>
                    <div className="header-icon rounded-circle mx-1 p-3 d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-youtube text-white"></i>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  </>)
}