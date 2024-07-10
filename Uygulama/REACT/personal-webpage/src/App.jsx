import React,{ useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Sectionabout from './components/Sectionabout'
import Sectionskills from './components/Sectionskills'
import Sectionprojects from './components/Sectionprojects'
import SectionContact from './components/Sectioncontact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Section/>
    <Sectionabout/>
    <Sectionskills/>
    <Sectionprojects/>
    <SectionContact/>
    <Footer/>
    </>
  )
}

export default App
