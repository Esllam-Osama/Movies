import { useState } from 'react'
import Nav from './componnents/shared/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './componnents/pages/Home'
import Details from './componnents/pages/Details'
import Contactus from './componnents/pages/Contactus'
import Footer from './componnents/shared/Footer'
import Notmatch from './componnents/pages/Notmatch'
import Yourmovies from './componnents/pages/Yourmovies'
function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='*' element={<Notmatch />} />
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/yourmovies' element={<Yourmovies />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
