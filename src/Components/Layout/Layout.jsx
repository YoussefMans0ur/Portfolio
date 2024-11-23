import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (<>
    <Navbar/>
    {/* <Home/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/> */}
    <Outlet></Outlet>
    <Footer/>
  </>)
}
