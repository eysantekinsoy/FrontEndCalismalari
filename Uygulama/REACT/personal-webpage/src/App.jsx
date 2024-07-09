import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import Sectionabout from './components/Sectionabout'
import Sectionskills from './components/Sectionskills'
import SectionContact from './components/Sectioncontact'

function App() {

  return (
    <>
    <Header/>
    <Section/>
    <Sectionabout/>
    <Sectionskills/>
    <SectionContact/>
    <Footer/>
    </>
  )
}

export default App
