import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Homepage from './pages/Homepage'
import Bakery from './pages/Bakery'
import Cloud from './pages/Cloud'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Forgetpass from './pages/Forgetpass'
import Signup from './pages/Signup'



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/bakery' element={<Bakery/>}/>
        <Route path='/cloud' element={<Cloud/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot' element={<Forgetpass/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
