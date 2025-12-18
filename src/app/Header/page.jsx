import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <header className=" h-[70px] bg-[#cccaca] text-[white] bg-[rgb(0,1,32)]">
        <div className="container">
          <nav className="h-[70px] flex items-center justify-between">
          <Link href={"/"}>
            <h1 className={` text-[#ffffff] text-[30px] font-[600] px-[10px]`}>Teach</h1>
          </Link>
            <div className=" flex items-center bg-[#fffefe] h-[40px] w-[550px] rounded-[5px] overflow-hidden">
              <input
                className="w-[500px] h-[40px] pl-[10px] outline-none focus:outline-none text-[black] font-[500]"
                type="text"
                placeholder="Search here"
              />
              <div className="px-[17px] py-[12px] bg-[#ff8800]">
                <FaSearch />
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" flex items-center gap-2 px-[10px] py-[9px] cursor-pointer transition-all hover:bg-[#ffffff1f] rounded-[5px]">
                <div className=" text-[#c24105]">
                  <FaGift size={25} />
                </div>
                <div>
                  <p className="text-[15px] font-[500]">Offers</p>
                  <p className=" text-[13px] text-[#8a8888] mt-[-4px]">
                    Latest offers
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-2 px-[10px] py-[9px] cursor-pointer hover:bg-[#ffffff1f] rounded-[5px]">
                <div className=" text-[#c24105]">
                  <FaHandsHelping size={27} />
                </div>
                <div>
                  <p className="text-[15px] font-[500]">Deals</p>
                  <p className=" text-[13px] text-[#8a8888] mt-[-4px]">
                    Best Deals
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-2 px-[10px] py-[9px] cursor-pointer hover:bg-[#ffffff1f] rounded-[5px]">
                <div className=" text-[#c24105]">
                  <FaUser size={22} />
                </div>
                <div>
                  <p className="text-[15px] font-[500]">Acounts</p>
                  <p className=" text-[12px] text-[#8a8888] mt-[-4px]">
                    Register or Log in
                  </p>
                </div>
              </div>
              <div>
                <button className=" bg-[#5555e4] px-[15px] py-[15px] rounded-[5px] font-[500] cursor-pointer ">
                  Contact us
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default page;
