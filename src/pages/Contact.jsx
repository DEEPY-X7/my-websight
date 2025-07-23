import React from 'react'
import ContactPage from '../components/Contact/ContactPage'
import Navbar from '../components/Home/Navbar'
import FooterCTA from '../components/Home/FooterCTA'

function Contact() {
  return (
    <>
    <Navbar/>
      <ContactPage/>
      <FooterCTA/>
    </>
  )
}

export default Contact