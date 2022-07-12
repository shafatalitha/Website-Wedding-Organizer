import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import "./App.css"
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

function App() {

  return (
    <>
<Navbar />
      <div className="container">
        <Routes>       
          <Route path="/about" element={<About />} />
          <Route path ="/testimonials" element={<Testimonials/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/diamond" element={<Diamond/>}/>
          <Route path ="/silver" element={<Silver/>}/>
          <Route path ="/mua" element={<Mua/>}/>
          <Route path ="/entertainment" element={<Entertainment/>}/>
          <Route path ="/engagement" element={<Engagement/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App