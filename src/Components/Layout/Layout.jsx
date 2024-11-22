import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (<>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </>)
}
