import React from "react"
import Navbar from "../components/NavBar/Navbar"
import Footer from "../components/Footer/Footer"

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
           {children}
      <Footer />
    </>
  )
}

export default Layout
