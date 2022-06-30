import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Testimoni from "./pages/Testimoni"
import Gold from "./pages/Gold"
import Diamond from "./pages/Diamond"
import { useRef } from "react"
import Cards from "./components/Cards/Cards"

function App() {
  const refPriceList = useRef(null);
  return (
    <>
<Navbar refPriceList={refPriceList} />
      <div className="container">
        <Routes>       
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home refPriceList />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/diamond" element={<Diamond/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App