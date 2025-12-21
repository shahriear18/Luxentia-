"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
const page = () => {
  let carts = [
  {
    name: "Flyx Max 2 Toy Drone",
    slug: "flyx-max-2-toy-drone",
    img: "drone1.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
    des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
    des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
    price: "21,200$ ",
    discount: "26,500$",
    isavailable: true,
  },
  {
    name: "E88 Pro Foldable Camera Toy Drone",
    slug: "e88-pro-foldable-camera-toy-drone",
    img: "drone2.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
    des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
    des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
    price: " 39,600$",
    discount: "49,500$",
    isavailable: true,
  },
  {
    name: "SE99 Pro 2 4K Dual Camera WiFi Mini Toy Drone",
    slug: "se99-pro-2-4k-dual-camera-wifi-mini-toy-drone",
    img: "drone3.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
    des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
    des4: "Weather-Resistant, Environmental Rating: IP56",
    price: " 185,000$",
    discount: "189,000$",
    isavailable: true,
  },
  {
    name: "E99 Pro 2 4K Dual Camera WiFi Mini Toy Drone",
    slug: "e99-pro-2-4k-dual-camera-wifi-mini-toy-drone",
    img: "drone4.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "K2 Intelligent Aerial Toy Drone",
    slug: "k2-intelligent-aerial-toy-drone",
    img: "drone5.webp",
    des1: "Type: Power Supply Mount",
    des2: "Standard DC-DC Power Supply",
    des3: "Compatibility: Standard Power Supply",
    des4: "Mount Power Supply Directly to Wall or Other Surface",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DK W1 Pro Folding 4K Toy Drone",
    slug: "dk-w1-pro-folding-4k-toy-drone",
    img: "drone6.webp",
    des1: "Type: USB Type-C Power Cable",
    des2: "Cable Length: 5m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DK W1 ProS 4K Toy Drone",
    slug: "dk-w1-pros-4k-toy-drone",
    img: "drone7.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini, Gen 3 Router",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "V198 GPS Camera Drone",
    slug: "v198-gps-camera-drone",
    img: "drone8.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 30m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "M101 Max GPS Drone",
    slug: "m101-max-gps-drone",
    img: "drone9.webp",
    des1: "Type: Mobility Mount",
    des2: "Supports a 9-Degree Mounting Angle",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DK S6 Mini Dual Camera 6K Toy Drone With Wi-Fi & GPS",
    slug: "dk-s6-mini-dual-camera-6k-toy-drone-with-wifi-gps",
    img: "drone10.webp",
    des1: "Type: Pipe Adapter Mount",
    des2: "Maximum Diameter: 63.5 mm (2.5 in)",
    des3: "Compatibility: Starlink Standard, Starlink Enterprise",
    des4: "Durable, Weather-Resistant Materials",
    price: " 20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "DK W7 GPS 4K Toy Drone Without RC",
    slug: "dk-w7-gps-4k-toy-drone-without-rc",
    img: "drone11.webp",
    des1: "Type: Starlink Standard Mobility Mount",
    des2: "Supports 8-Degree Mounting Angle",
    des3: "Compatibility: Starlink Standard, Starlink Enterprise",
    des4: "Durable, Weather-Resistant Materials",
    price: " 32,100$ ",
    discount: "33,150$",
    isavailable: true,
  },
  {
    name: "KF102 Max GPS 4K Drone",
    slug: "kf102-max-gps-4k-drone",
    img: "drone12.webp",
    des1: "Type: Adapter and Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "Durable, Weather-Resistant Materials",
    des4: "Compact and Lightweight",
    price: "12,400$ ",
    discount: "13,300#",
    isavailable: true,
  },
  {
    name: "DJI MINI 4 PRO Fly More Combo + DJI RC2",
    slug: "dji-mini-4-pro-fly-more-combo-dji-rc2",
    img: "drone13.webp",
    des1: "Type: Roof Rack Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "For Vehicle Roof Racks",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Mini 5 Pro Fly More Combo With RC-N3",
    slug: "dji-mini-5-pro-fly-more-combo-with-rc-n3",
    img: "drone14.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI MINI 4 PRO Fly More Combo Plus + DJI RC2 (Global Version)",
    slug: "dji-mini-4-pro-fly-more-combo-plus-dji-rc2-global-version",
    img: "drone15.webp",
    des1: "Type: Router Mount",
    des2: "Type: Router Mount",
    des3: "Compatibility: Gen 3 Router",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Avata 2 Fly More Combo Drone with Goggles 3 & RC Motion 3 Controller",
    slug: "dji-avata-2-fly-more-combo-drone-with-goggles-3-rc-motion-3-controller",
    img: "drone16.webp",
    des1: "Type: Mini Wall Mount",
    des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Color: Gray",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Mini 4K Fly More Combo Drone (Global Version)",
    slug: "dji-mini-4k-fly-more-combo-drone-global-version",
    img: "drone17.webp",
    des1: "Type: Travel Kit",
    des2: "Compatibility: Starlink Mini",
    des3: "Shields Against Dirt, Scrapes and Bumps",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Neo Motion Fly More Combo Drone",
    slug: "dji-neo-motion-fly-more-combo-drone",
    img: "drone18.webp",
    des1: "Type: Standard Wall Mount",
    des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Easy to install and adjust",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Mini 3 Drone Fly More Combo with DJI RC Remote Controller",
    slug: "dji-mini-3-drone-fly-more-combo-with-dji-rc-remote-controller",
    img: "drone19.webp",
    des1: "Type: Standard Roof Rack Mount",
    des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
    des3: "Maximum width: 95 mm (3.74 in)",
    des4: "Compatibility: Starlink Standard, Starlink Enterprise",
    price: "20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "DJI Flip Drone Fly More Combo",
    slug: "dji-flip-drone-fly-more-combo",
    img: "drone20.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 45m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: "12,400$ ",
    discount: "13,300#",
    isavailable: true,
  },
  {
    name: "DJI Neo 2 Fly More Combo Drone Without Remote",
    slug: "dji-neo-2-fly-more-combo-drone-without-remote",
    img: "drone21.webp",
    des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
    des2: "Data Transfer Rate (LAN): 1000 Mbps",
    des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
    des4: "Number of Users: Up to 235, Mesh Compatibility",
    price: "32,100$ ",
    discount: "33,150$",
    isavailable: true,
  },
  {
    name: " DJI Neo 2 Fly More Combo Drone ",
    slug: "dji-neo-2-fly-more-combo-drone",
    img: "drone22.webp",
    des1: "Type: Adapter and Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "Durable, Weather-Resistant Materials",
    des4: "Compact and Lightweight",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Neo Standard",
    slug: "dji-neo-standard",
    img: "drone23.webp",
    des1: "Type: Roof Rack Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "For Vehicle Roof Racks",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Neo2 Standard",
    slug: "dji-neo2-standard",
    img: "drone24.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: "12,400$ ",
    discount: "13,300$",
    isavailable: true,
  },
  {
    name: "DJI Mini 4K Stardard",
    slug: "dji-mini-4k-stardard",
    img: "drone25.webp",
    des1: "Type: Router Mount",
    des2: "Type: Router Mount",
    des3: "Compatibility: Gen 3 Router",
    des4: "Color: White",
    price: "33,150$ ",
    discount: "32,100$",
    isavailable: true,
  },
  {
    name: "Flyx Max 2 Toy Drone",
    slug: "flyx-max-2-toy-drone-2",
    img: "drone26.webp",
    des1: "Type: Router Mount",
    des2: "Type: Router Mount",
    des3: "Compatibility: Gen 3 Router",
    des4: "Color: White",
    price: "33,150$ ",
    discount: "32,100$",
    isavailable: true,
  },
  {
    name: "E88 Pro Foldable Camera Toy Drone",
    slug: "e88-pro-foldable-camera-toy-drone-2",
    img: "drone27.webp",
    des1: "Type: Mini Wall Mount",
    des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Color: Gray",
    price: " 20,000$",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "E99 Pro 2 4K Dual Camera WiFi Mini Toy Drone",
    slug: "e99-pro-2-4k-dual-camera-wifi-mini-toy-drone-2",
    img: "drone28.webp",
    des1: "Type: Travel Kit",
    des2: "Compatibility: Starlink Mini",
    des3: "Shields Against Dirt, Scrapes and Bumps",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DK U2 ProS 4K Toy Drone",
    slug: "dk-u2-pros-4k-toy-drone",
    img: "drone29.webp",
    des1: "Type: Standard Wall Mount",
    des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Easy to install and adjust",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "K2 Intelligent Aerial Toy Drone",
    slug: "k2-intelligent-aerial-toy-drone-2",
    img: "drone30.webp",
    des1: "Type: Standard Roof Rack Mount",
    des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
    des3: "Maximum width: 95 mm (3.74 in)",
    des4: "Compatibility: Starlink Standard, Starlink Enterprise",
    price: "20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "DK W1 Pro Folding 4K Toy Drone",
    slug: "dk-w1-pro-folding-4k-toy-drone-2",
    img: "drone31.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 45m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Neo 2 Standard",
    slug: "dji-neo-2-standard",
    img: "drone32.webp",
    des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
    des2: "Data Transfer Rate (LAN): 1000 Mbps",
    des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
    des4: "Number of Users: Up to 235, Mesh Compatibility",
    price: "12,400$ ",
    discount: "13,300$",
    isavailable: true,
  },
  {
    name: "DJI Mini 4K Stardard",
    slug: "dji-mini-4k-stardard-2",
    img: "drone33.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
    des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
    des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
    price: "21,200$ ",
    discount: "26,500$",
    isavailable: true,
  },
  {
    name: "DJI Mavic 4 Pro Creator Combo With RC Pro 2",
    slug: "dji-mavic-4-pro-creator-combo-with-rc-pro-2",
    img: "drone34.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
    des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
    des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
    price: " 39,600$",
    discount: "49,500$",
    isavailable: true,
  },
  {
    name: "DJI Matrice 4E",
    slug: "dji-matrice-4e",
    img: "drone35.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
    des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
    des4: "Weather-Resistant, Environmental Rating: IP56",
    price: " 185,000$",
    discount: "189,000$",
    isavailable: true,
  },
  {
    name: "DJI Matrice 4T",
    slug: "dji-matrice-4t",
    img: "drone36.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Matrice 4T",
    slug: "dji-matrice-4t-2",
    img: "drone37.webp",
    des1: "Type: Power Supply Mount",
    des2: "Standard DC-DC Power Supply",
    des3: "Compatibility: Standard Power Supply",
    des4: "Mount Power Supply Directly to Wall or Other Surface",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Matrice 350 RTK Drone",
    slug: "dji-matrice-350-rtk-drone",
    img: "drone38.webp",
    des1: "Type: USB Type-C Power Cable",
    des2: "Cable Length: 5m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Matrice 350 RTK Drone",
    slug: "dji-matrice-350-rtk-drone-2",
    img: "drone39.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini, Gen 3 Router",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI P4 Multispectral Drone",
    slug: "dji-p4-multispectral-drone",
    img: "drone40.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 30m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
];

  const STEP = 20;
  const [visibleCount, setVisibleCount] = useState(STEP);
  const visibleCarts = carts.slice(0, visibleCount);
  let [option, setoption] = useState(true);
  let [option2, setoption2] = useState(true);
  let [option3, setoption3] = useState(true);
  let [option4, setoption4] = useState(true);
  return (
    <div className=" container">
      <div className=" border border-b-1 border-t-0 border-l-0 border-r-0 py-[20px] border-[#c0bebe]">
        <h1 className=" font-[600] text-[25px] text-[#0404be]">
          Drone Price in Bangladesh
        </h1>
        <h2 className=" text-[13px] mt-[10px]">
          Drone Price in Bangladesh starts from BDT 5,250 and depending on the
          features and brand the price may go up to BDT 385,000, At Star Tech
          you can get the latest Drones from popular brands like DJI. Browse
          below and order yours now!
        </h2>
      </div>
      <div className=" flex">
        <div className=" mt-[30px] w-[250px] border-[#a3a1a1]">
          <h3 className=" mb-[20px] text-[16px] font-[600]">Price Range</h3>
          <div className=" flex gap-3 items-center">
            <div>
              <input
                className=" flex justify-center border-[#a7a4a4] w-[80px] px-[5px] outline-0 border border-r-0  border-l-0"
                type="number"
                placeholder=" 940"
              />
            </div>
            <p>To</p>
            <div>
              <input
                className=" flex justify-center border-[#a7a4a4] w-[80px] px-[5px] outline-0 border border-r-0  border-l-0"
                type="number"
                placeholder="18,9000"
              />
            </div>
          </div>
          <button className=" font-[600] bg-[#ff7b00] px-[40px] py-[5px] rounded-[20px] mt-[15px] flex justify-center ml-[40px]">
            Filter
          </button>
          <div className=" mt-[30px]">
            <div className=" flex justify-between w-[190px]">
              <p className="  font-[600] mb-[15px] text-[17px]">Avilability</p>
              <FaAngleUp
                style={{ rotate: option ? " 180deg" : "0deg" }}
                onClick={() => {
                  setoption(!option);
                }}
                className=" transition-all"
              />
            </div>
            <ul
              style={{ height: option ? "120px" : "0px" }}
              className=" grid gap-3 transition-all overflow-hidden"
            >
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> In Stack{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Pre order{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Up Coming{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`mb-[40px] grid grid-cols-4 gap-10 overflow-hidden
  transition-all duration-700 ease-in-out
  ${option ? "max-h-[6000px]" : "max-h-[2900px]"}`}
          >
            {visibleCarts.map((item, i) => (
              <div key={i} className=" w-[250px]">
                <div className="cursor-pointer h-[220px] flex justify-center">
                  <Link href={`/Drone/${item.slug}`}>
                  <img
                    className=" flex justify-center"
                    src={`/${item.img}`}
                    width={220}
                    height={50}
                    alt="#"
                  />
                  </Link>
                  
                </div>
                <div className=" py-[20px] h-[220px]">
                  <h2 className=" text-[15px] font-[700] ml-[5px] pb-[10px] cursor-pointer hover:text-[#ff5100] underline-[transparent] hover:underline">
                    {item.name}
                  </h2>
                  <ul className=" grid gap-2 text-[13px] leading-[17px] list-disc pl-5 marker:text-[] text-[#3d3c3c]">
                    <li className="">{item.des1}</li>
                    <li>{item.des2}</li>
                    <li>{item.des3}</li>
                    <li>{item.des4}</li>
                  </ul>
                </div>
                <div className=" flex items-center justify-center text-[18px] gap-10 font-[600] pt-[10px]">
                  <p className=" text-[red]">
                    {item.isavailable ? item.price : "Upcoming"}
                  </p>
                  <del
                    style={{
                      display: item.isavailable ? "block" : "none",
                    }}
                    className=" text-[14px] text-[#5a5959]"
                  >
                    {item.isavailable ? item.discount : ""}
                  </del>
                </div>
                <div className=" flex justify-center mt-[20px] font-[600] text-[13px] gap-3">
                  <button className="cursor-pointer text-[white] px-[20px] bg-[#0044ffb4] py-[5px] rounded-[5px]">
                    {item.isavailable ? "Buy now" : "Pre order"}
                  </button>
                  <button
                    style={{
                      display: item.isavailable ? "block" : "none",
                    }}
                    className="cursor-pointer px-[20px] bg-[#ff5e00] py-[5px] rounded-[5px]"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h2
            onClick={() => {
              if (visibleCount >= carts.length) {
                setVisibleCount(STEP); // show less
              } else {
                setVisibleCount((prev) => Math.min(prev + STEP, carts.length)); // show more
              }
            }}
            className=" w-fit px-6 py-2 mx-auto
             text-[#01011d] cursor-pointer
             hover:underline text-[18px]
             font-[700] flex items-center gap-2"
          >
            {visibleCount >= carts.length ? "Show less" : "Show more"}

            <FaAngleUp
              className={`transition-all duration-300 ${
                visibleCount >= carts.length ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
