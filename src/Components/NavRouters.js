import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Apply from '../Pages/Apply';
import Rules from '../Pages/Rules';
import ContactUs from '../Pages/ContactUs';

const NavRouters = () => {
  //const navigate = useNavigate()
  return (
    <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/Apply' element={<Apply />} />
        <Route path='/Rules' element={<Rules />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>
    </Routes>
  )
}

export default NavRouters