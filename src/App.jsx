import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catolog/Catalog'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'



const App = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <Catalog/>
<Profile/>


   <Footer/>
   </>
  )
}

export default App