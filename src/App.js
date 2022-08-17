import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import "./App.css"
import Cards from "./components/Cards/Cards"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
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
import Share from "./components/Share/Share"
function App() {

  return (
    <>
<Navbar />
      <div className="container">
        <Routes>       
          <Route path="/about-us" element={<About />} />
          <Route path ="/testimoni" element={<Testimonials/>}/>
          <Route path ="/pricelist" element={<Cards/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/pricelist/paket-gold" element={<Gold />} />
          <Route path="/pricelist/paket-diamond" element={<Diamond/>}/>
          <Route path ="/pricelist/paket-silver" element={<Silver/>}/>
          <Route path ="/pricelist/paket-mua" element={<Mua/>}/>
          <Route path ="/pricelist/paket-entertainment" element={<Entertainment/>}/>
          <Route path ="/pricelist/paket-engagement" element={<Engagement/>}/>
          <Route path ="/pricelist/paket-dokumentasi" element={<Dokumentasi/>}/>
          <Route path ="/pricelist/adat-jawa" element={<Jawa/>}/>
          <Route path ="/pricelist/adat-sunda" element={<Sunda/>}/>
        </Routes>
        <Share/>
        <Footer/>
        
      </div>
    </>
  )
}

export default App