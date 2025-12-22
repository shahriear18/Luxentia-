import React from 'react'
import Navbar from '@/app/Header/page'
import Baner from './Baner/page'
import Servises from './Servises/page'
import Catagories from './Catagories/page'
import Feachered from './Featcheredproduct/page'
const page = () => {
  return (
    <div className='container'>
      <Baner/>
      <Servises/>
      <Catagories/>
      <Feachered/>
    </div>
  )
}

export default page