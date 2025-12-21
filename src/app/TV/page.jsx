'use client'
import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import Tvcart from '../../../TVcart.jsx/page'
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
        <h1 className=' font-[600] text-[25px] text-[#0404be]'>TV Price in Bangladesh</h1>
        <h2 className=' text-[13px] mt-[10px]'>TV price starts from BDT 11,900 to BDT 1,250,000 in Bangladesh, depending on brand, model, screen size, and features. Buy your desired TV at the lowest price from Star Tech TV Shop in BD. Browse below and order yours now!</h2>
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
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Sony </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Samsung </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Singer </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Xiomi </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> LG </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Rowa </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Smart </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Hisense </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Daewoo </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Rangs </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Beko </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> TCL </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
           <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'>Screen Size</p>
             <FaAngleUp style={{rotate : option3? " 180deg":"0deg"}} onClick={() =>{setoption3(!option3)}} className=' transition-all' />
            </div>
            <ul style={{ height : option3? "350px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 32 inch </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  43 inch </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  50 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  55 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  65 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  70 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  75 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  70 inch  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  98 inch  </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Resolution</p>
             <FaAngleUp style={{rotate : option4? " 180deg":"0deg"}} onClick={() =>{setoption4(!option4)}} className=' transition-all' />
            </div>
            <ul style={{ height : option4? "150px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> HD </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  Full HD </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  4K UHD </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> 8K </li>

            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Type</p>
             <FaAngleUp style={{rotate : option5? " 180deg":"0deg"}} onClick={() =>{setoption5(!option5)}} className=' transition-all' />
            </div>
            <ul style={{ height : option5? "100px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Basic </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  Smart </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  Android </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Technology</p>
             <FaAngleUp style={{rotate : option6? " 180deg":"0deg"}} onClick={() =>{setoption6(!option6)}} className=' transition-all' />
            </div>
            <ul style={{ height : option6? "100px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> LED </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  OLED </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" />  QLED </li>
            </ul>
          </div>
          <div className=' mt-[50px]'>
            <div className=' flex justify-between w-[190px]'>
            <p className='  font-[600] mb-[15px] text-[17px]'> Special Featchurs</p>
             <FaAngleUp style={{rotate : option7? " 180deg":"0deg"}} onClick={() =>{setoption7(!option7)}} className=' transition-all' />
            </div>
            <ul style={{ height : option7? "250px" : '0px'}} className=' grid gap-4 transition-all overflow-hidden'>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> HDR  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Dolby Audio </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Dts Sound  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Netflix  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Alexa Built-in  </li>
              <li className=' text-[#292828] text-[15px] font-[600] flex items-center gap-2'><input type="checkbox" /> Alexa Compatible  </li>
            </ul>
          </div>
        </div>
        <Tvcart/>
      </div>
    </div>
  )
}

export default page