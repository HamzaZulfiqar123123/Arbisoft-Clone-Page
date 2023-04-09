import React from 'react'
import Gallery from './Components/Gallery'
import Header from './Components/Header'
import Main from './Components/Main'
import Page3 from './Components/Page3'
import Reviews from './Components/Reviews'
import './App.css'
import Carousel from './Components/Carousel'
import Certifications from './Components/Certifications'
import Duration from './Components/Duration'
import Join from './Components/Join'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Reviews />
      <Page3 />
      <Gallery />
      <Carousel />
      <Certifications />
      <Duration />
      <Join />
      <Footer />
    </div>
  )
}

export default App