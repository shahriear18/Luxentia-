import React from 'react'
import Navbar from '@/app/Header/page'
import Baner from './Baner/page'
import Servises from './Servises/page'
import Catagories from './Catagories/page'
const page = () => {
  return (
    <div className='container'>
      <Baner/>
      <Servises/>
      <Catagories/>
    </div>
  )
}

export default page