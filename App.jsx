// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import New from "./components/one"
// import Two from "./components/class"
import Navbar from "./components/hotel/navbar"
import HeroSection from "./components/hotel/herosection"
import AboutUs from "./components/hotel/aboutus"
import Rooms from "./components/hotel/rooms"
import WeddingHall from "./components/hotel/weddinghall"
import Amenities from "./components/hotel/amenities"
import NearbyAttractions from "./components/hotel/nearby"
import Gallery from "./components/hotel/gallery"
import ContactForm from "./components/hotel/contactform"
import Footer from "./components/hotel/footer"
import '../src/assets/css/style.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <Rooms/>
    <WeddingHall/>
    <Amenities/>
    <NearbyAttractions/>
    <Gallery/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
