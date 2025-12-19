import Image from "next/image";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const page = () => {
  let carts = [
    {
      name: "Flyx Max 2 Toy Drone",
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
      img: "drone34.webp",
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
      name: "DJI Matrice 4E",
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
      img: "drone36.webp",
      des1: "Type: Power Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price: " ",
      discount: "",
      isavailable: false,
    },
    ,
    {
      name: "DJI Matrice 4T",
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
  const [option, setoption] = useState(true);
  const STEP = 20;
  const [visibleCount, setVisibleCount] = useState(STEP);
  const visibleCarts = carts.slice(0, visibleCount);

  return (
    <div>
    <div
      className={`mb-[40px] grid grid-cols-4 gap-10 overflow-hidden
  transition-all duration-700 ease-in-out
  ${option ? "max-h-[6000px]" : "max-h-[2900px]"}`}
    >
      {visibleCarts.map((item, i) => (
        <div key={i} className=" w-[250px]">
          <div className="cursor-pointer h-[220px] flex justify-center">
            <Image
              className=" flex justify-center"
              src={`/${item.img}`}
              width={220}
              height={50}
              alt="#"
            />
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

  );
};

export default page;
