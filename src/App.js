import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Blog from "./pages/Blog"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>       
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App