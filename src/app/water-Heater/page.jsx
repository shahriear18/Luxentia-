'use client'
import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import Waterheatercart from '../../../Water-heatercart/page'
const page = () => {
  let [option,setoption] = useState(true);
  let [option2,setoption2] = useState(true);
  let [option3,setoption3] = useState(true);
  let [option4,setoption4] = useState(true);
  return (
    <div className=' container'>
      <div className=' border border-b-1 border-t-0 border-l-0 border-r-0 py-[20px] border-[#c0bebe]'>
        <h1 className=' font-[600] text-[25px] text-[#0404be]'>Geyser Price in Bangladesh | Buy Water Heater Online</h1>
        <h2 className=' text-[13px] mt-[10px]'>Geyser Price starts from BDT 7,990 to BDT 110,500 in Bangladesh, depending on model and capacity. Get latest Water Heater Geyser this winter from Star Tech Online Shop. Browse below and order now!</h2>
      </div>
      <div className=' flex'>
        <div className=' mt-[30px] w-[250px] border-[#a3a1a1]' >
          <h3 className=' mb-[20px] text-[16px] font-[600]'>Price Range</h3>
          <div className=' flex gap-3 items-center'>
            <div>
            <input className=' flex justify-center border-[#a7a4a4] w-[80px] px-[5px] outline-0 border border-r-0  border-l-0'  type="number" placeholder=' 940' />
          </div>
          <p>To</p>
          <div>
            <input className=' flex justify-center border-[#a7a4a4] w-[80px] px-[5px] outline-0 border border-r-0  border-l-0'  type="number" placeholder='18,9000' />
          </div>            
          </div>
          <button className=' font-[600] bg-[#ff7b00] px-[40px] py-[5px] rounded-[20px] mt-[15px] flex justify-center ml-[40px]'>Filter</button>
          <div className=' mt-[30px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'>Avilability</p>
             <FaAngleUp style={{rotate : option? " 180deg":"0deg"}} onClick={() =>{setoption(!option)}} className=' transition-all' />
            </div>
            <ul style={{ height : option? "120px" : '0px'}} className=' grid gap-3 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> In Stack </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Pre order </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Up Coming </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'>Avilability</p>
             <FaAngleUp style={{rotate : option2? " 180deg":"0deg"}} onClick={() =>{setoption2(!option2)}} className=' transition-all' />
            </div>
            <ul style={{ height : option2? "220px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> TESY </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Midea </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Haier </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Rangs </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Ariston </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> IEGA </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
           <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'>Capacity</p>
             <FaAngleUp style={{rotate : option3? " 180deg":"0deg"}} onClick={() =>{setoption3(!option3)}} className=' transition-all' />
            </div>
            <ul style={{ height : option3? "220px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Up to 30 Litre </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 31 to 40 Litre </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 41 to 60 Litre </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 61 to 80 Litre </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 81 to 80 Litre </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 101 Litre to Above </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'>Avilability</p>
             <FaAngleUp style={{rotate : option4? " 180deg":"0deg"}} onClick={() =>{setoption4(!option4)}} className=' transition-all' />
            </div>
            <ul style={{ height : option4? "70px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Vertical </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Horizontal </li>
            </ul>
          </div>
        </div>
        <Waterheatercart/>
      </div>
    </div>
  )
}

export default page