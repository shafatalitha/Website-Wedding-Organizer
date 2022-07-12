import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import "./App.css"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Gold from "./pages/Gold"
import Diamondpage from "./pages/diamondPage"
import { useRef } from "react"
import Testimonials from "./components/Testimoni/Testimonials"
import Silverpage from "./pages/silverPage"

function App() {
  const refPriceList = useRef(null);
  return (
    <>
<Navbar refPriceList={refPriceList} />
      <div className="container">
        <Routes>       
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home refPriceList={refPriceList} />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/diamond" element={<Diamondpage/>}/>
          <Route path ="/testimonials" element={<Testimonials/>}/>
          <Route path ="/silver" element={<Silverpage/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App