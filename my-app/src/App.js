import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import Contact from './Contact'
// import 
// import About from './About'
import Service from './Service'
import Navbar from './Navbar'
import Error from './Error'
import Footer from './Footer'
import Testimonial from './Testimonial'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
     <Routes>
       {/* <Route exact path='/' element={<Home/>}/>
       <Route exact path='/service' element={<Service/>}/>
       <Route exact path='/testimonial' element={<Testimonial/>}/>
       <Route exact path='/contact' element={<Contact/>}/>
       <Route path='*' element={<Error/>}/> */}
       <Route path='/' element={<Navbar/>}>
         <Route index element={<Home/>}/>
         <Route path='service' element={<Service/>}/>
         <Route path='testimonial' element={<Testimonial/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='*' element={<h2>Error 404 Page Not found</h2>}/>
       </Route>
       
       
     </Routes>
    <Footer/>
    </>
  )
}

export default App
