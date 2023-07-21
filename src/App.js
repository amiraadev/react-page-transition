
import './App.css'
import {Routes,Route,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { AnimatePresence } from "framer-motion";



function App() {
   const location = useLocation();

  return (
    <>
      <Navbar/> 
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </AnimatePresence> 
   
    </>
  )
}

export default App
