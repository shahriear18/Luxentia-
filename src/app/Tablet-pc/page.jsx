'use client'
import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import Tablecart from '../../../Table-pc-cart/page'
const page = () => {
  let [option,setoption] = useState(true);
  let [option2,setoption2] = useState(true);
  let [option3,setoption3] = useState(true);
  let [option4,setoption4] = useState(true);
  let [option5,setoption5] = useState(true);
  let [option6,setoption6] = useState(true);
  let [option7,setoption7] = useState(true);
  return (
    <div className=' container'>
      <div className=' border border-b-1 border-t-0 border-l-0 border-r-0 py-[20px] border-[#c0bebe]'>
        <h1 className=' font-[600] text-[25px] text-[#0404be]'>Tablet Price in Bangladesh</h1>
        <h2 className=' text-[13px] mt-[10px]'>Tablet price starts from BDT 9,990 to BDT 270,000 in Bangladesh, depending on brand, model, and features. Buy the Latest Tablet PC from Star Tech online shop. Browse below and order yours now!!</h2>
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
            <p className='  font-[600] mb-[15px] text-[17px]'>Brand</p>
             <FaAngleUp style={{rotate : option2? " 180deg":"0deg"}} onClick={() =>{setoption2(!option2)}} className=' transition-all' />
            </div>
            <ul style={{ height : option2? "220px" : '0px'}} className=' grid gap-4 transition-all overflow-scroll'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Apple </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Samsung </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Lenovo </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Xiomi </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Huawei </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Honor </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Apple </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Walton </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Huion </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Google </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Amazon </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Teclast </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
           <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'>Screen Size</p>
             <FaAngleUp style={{rotate : option3? " 180deg":"0deg"}} onClick={() =>{setoption3(!option3)}} className=' transition-all' />
            </div>
            <ul style={{ height : option3? "270px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Up to 6.5 inch </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 6.5 to 7.4 inch </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 7.5 to 8.4 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 8.5 to 9.4 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 9.5 to 10.4 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 10.5 to 11.4 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 11.5 and Above  </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Storage</p>
             <FaAngleUp style={{rotate : option4? " 180deg":"0deg"}} onClick={() =>{setoption4(!option4)}} className=' transition-all' />
            </div>
            <ul style={{ height : option4? "250px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 16GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  32GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  64GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 128GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 256GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 512GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 1Tb </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 2Tb </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> RAM</p>
             <FaAngleUp style={{rotate : option5? " 180deg":"0deg"}} onClick={() =>{setoption5(!option5)}} className=' transition-all' />
            </div>
            <ul style={{ height : option5? "250px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 1GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  2GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  3GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 4GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 6GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 6GB </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 8Tb </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 12Gb </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 16Gb </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Operating System</p>
             <FaAngleUp style={{rotate : option6? " 180deg":"0deg"}} onClick={() =>{setoption6(!option6)}} className=' transition-all' />
            </div>
            <ul style={{ height : option6? "110px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Android </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  Windows </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  iPadOS </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Conetivity</p>
             <FaAngleUp style={{rotate : option7? " 180deg":"0deg"}} onClick={() =>{setoption7(!option7)}} className=' transition-all' />
            </div>
            <ul style={{ height : option7? "70px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Wi-fi Only  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Wi-fi + Cellular </li>
            </ul>
          </div>
        </div>
        <Tablecart/>
      </div>
    </div>
  )
}

export default page