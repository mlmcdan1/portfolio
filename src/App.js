import React from "react"
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home.js"
import Portfolio from "./component/Portfolio/Portfolio"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import "./App.css"

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App