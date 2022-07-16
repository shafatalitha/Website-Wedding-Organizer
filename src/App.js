import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import "./App.css"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Cards from "./components/Cards/Cards"
import Gold from "./pages/Gold"
import Testimonials from "./components/Testimoni/Testimonials"
import Diamond from "./components/Diamond/Diamond"
import Silver from "./components/Silver/Silver"
import Mua from "./components/Mua/Mua"
import Entertainment from "./components/Entertainment/Entertainment"
import Engagement from "./components/Engagement/Engagement"
import Dokumentasi from "./components/Dokumentasi/Dokumentasi"
import Jawa from "./components/Jawa/Jawa"
import Sunda from "./components/Sunda/Sunda"

function App() {

  return (
    <>
<Navbar />
      <div className="container">
        <Routes>       
          <Route path="/about-us" element={<About />} />
          <Route path ="/testimoni" element={<Testimonials/>}/>
          <Route path="/pricelist" element={<Cards/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/diamond" element={<Diamond/>}/>
          <Route path ="/silver" element={<Silver/>}/>
          <Route path ="/mua" element={<Mua/>}/>
          <Route path ="/entertainment" element={<Entertainment/>}/>
          <Route path ="/engagement" element={<Engagement/>}/>
          <Route path ="/dokumentasi" element={<Dokumentasi/>}/>
          <Route path ="/jawa" element={<Jawa/>}/>
          <Route path ="/sunda" element={<Sunda/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App