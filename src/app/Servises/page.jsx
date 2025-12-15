import React from 'react'
import { FiTruck } from "react-icons/fi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";


const page = () => {
  return (
    <div className=' container'>
      <div className=' h-[100px] flex justify-around mt-[410px]'>
        <div className=' flex items-center gap-3'><div className='p-[10px] rounded-full bg-[#ff3c00]'><FaLaptop size={30} className=' text-[#ffffff]'/></div><div className=''><p className=' font-[700] text-[17px]'>Laptop Finder</p ><p className=' text-[14px] text-[#000000af] font-[500]'>If Product Not matched</p></div></div>
        <div  className=' flex items-center gap-3'><div className=' p-[10px] rounded-full bg-[#ff3c00]'><MdErrorOutline size={30} className='text-[white]' /></div><div><p className=' font-[700] text-[17px]'>Privacy Policy</p><p className=' text-[14px] text-[#000000af] font-[500]'>Check before dealing</p></div></div>
        <div className=' flex items-center gap-3'><div className='p-[10px] rounded-full bg-[#ff3c00]'><FaMoneyCheckAlt size={30} className=' text-[#ffffff]' /></div><div><p className=' font-[700] text-[17px]'>Emi Policy</p><p className=' text-[14px] text-[#000000af] font-[500]'>We Provide 0% EMI facelities</p></div></div>
        <div className=' flex items-center gap-3'><div className='p-[10px] rounded-full bg-[#ff3c00]'><LuMessageSquareText size={30} className=' text-[#ffffff]'/></div><div><p className=' font-[700] text-[17px]'>Customer support</p><p className=' text-[14px] text-[#000000af] font-[500]'> Cal us -90157543***</p></div></div>
      </div>
    </div>
  )
}

export default page;