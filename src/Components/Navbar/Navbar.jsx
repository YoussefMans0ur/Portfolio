import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg fixed-top bg-black">
        <div className="container">
          <Link className="navbar-brand fw-bolder px-3" to={'/'}>Youssef Mansour</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-bar ms-auto">
              <li className="nav-item px-md-3">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item px-md-3">
                <Link className="nav-link" to={'/about'}>About</Link>
              </li>
              <li className="nav-item px-md-3">
                <Link className="nav-link" to={'/skills'}>Skills</Link>
              </li>
              <li className="nav-item px-md-3">
                <Link className="nav-link" to={'/works'}>Works</Link>
              </li>
              <li className="nav-item px-md-3">
                <Link className="nav-link" to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  </>)
}
