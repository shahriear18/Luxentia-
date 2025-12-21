"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
const page = () => {
  let carts = [
  {
    name: "Shameem Tropica 30 Litre Geyser (7 Gallon Standard)",
    slug: "Shameem-Tropica-30-Litre-Geyser-(7-Gallon-Standard)",
    img: "water-heater1.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
    des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
    des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
    price: "21,200$ ",
    discount: "26,500$",
    isavailable: true,
  },
  {
    name: "Shameem Tropica 30 Litre Geyser (7 Gallon Special)",
    slug: "Shameem-Tropica-30-Litre-Geyser-(7-Gallon-Special)",
    img: "water-heater2.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
    des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
    des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
    price: " 39,600$",
    discount: "49,500$",
    isavailable: true,
  },
  {
    name: "Shameem Tropica 10 Gallon Standard Geyser (45 Litre)",
    slug: "Shameem-Tropica-10-Gallon-Standard-Geyser-(45-Litre)",
    img: "water-heater3.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
    des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
    des4: "Weather-Resistant, Environmental Rating: IP56",
    price: " 185,000$",
    discount: "189,000$",
    isavailable: true,
  },
  {
    name: "Shameem Tropica 15 Gallon Standard Geyser (67.5 Litre)",
    slug: "Shameem-Tropica-15-Gallon-Standard-Geyser-(67.5-Litre)",
    img: "water-heater4.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Shameem Tropica 10 Gallon Special Geyser (45 Litre)",
    slug: "Shameem-Tropica-10-Gallon-Special-Geyser-(45-Litre)",
    img: "water-heater5.webp",
    des1: "Type: Power Supply Mount",
    des2: "Standard DC-DC Power Supply",
    des3: "Compatibility: Standard Power Supply",
    des4: "Mount Power Supply Directly to Wall or Other Surface",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "IEGA 45 Liter Floor Mount Geyser (10 Gallon)",
    slug: "IEGA-45-Liter-Floor-Mount-Geyser-(10-Gallon)",
    img: "water-heater6.webp",
    des1: "Type: USB Type-C Power Cable",
    des2: "Cable Length: 5m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Shameem Tropica 15 Gallon Special Geyser (67.5 Litre)",
    slug: "Shameem-Tropica-15-Gallon-Special-Geyser-(67.5-Litre)",
    img: "water-heater7.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini, Gen 3 Router",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "IEGA 67.5 Liter Floor Mount Geyser (15 Gallon)",
    slug: "IEGA-67.5-Liter-Floor-Mount-Geyser-(15-Gallon)",
    img: "water-heater8.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 30m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Haier 30 Litre Water Heater Geyser - ES30H-CK3(BD)",
    slug: "Haier-30-Litre-Water-Heater-Geyser---ES30H-CK3(BD)",
    img: "water-heater9.webp",
    des1: "Type: Mobility Mount",
    des2: "Supports a 9-Degree Mounting Angle",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Rangs REG-35GL 35 Liter Geyser",
    slug: "Rangs-REG-35GL-35-Liter-Geyser",
    img: "water-heater10.webp",
    des1: "Type: Pipe Adapter Mount",
    des2: "Maximum Diameter: 63.5 mm (2.5 in)",
    des3: "Compatibility: Starlink Standard, Starlink Enterprise",
    des4: "Durable, Weather-Resistant Materials",
    price: " 20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },

  {
  name: "Rangs REG-35GL 35 Liter Geyser",
  slug: "Rangs-REG-35GL-35-Liter-Geyser",
  img: "water-heater11.webp",
  des1: "Type: Starlink Standard Mobility Mount",
  des2: "Supports 8-Degree Mounting Angle",
  des3: "Compatibility: Starlink Standard, Starlink Enterprise",
  des4: "Durable, Weather-Resistant Materials",
  price: " 32,100$ ",
  discount: "33,150$",
  isavailable: true,
},
{
  name: "Shameem Tropica 10 Gallon Wall Hanging Standard Geyser (45 Litre)",
  slug: "Shameem-Tropica-10-Gallon-Wall-Hanging-Standard-Geyser-(45-Litre)",
  img: "water-heater12.webp",
  des1: "Type: Adapter and Mount",
  des2: "Compatibility: Starlink Mini",
  des3: "Durable, Weather-Resistant Materials",
  des4: "Compact and Lightweight",
  price: "12,400$ ",
  discount: "13,300#",
  isavailable: true,
},
{
  name: "TESY Compact Above Sink 10L Water Heater",
  slug: "TESY-Compact-Above-Sink-10L-Water-Heater",
  img: "water-heater13.webp",
  des1: "Type: Roof Rack Mount",
  des2: "Compatibility: Starlink Mini",
  des3: "For Vehicle Roof Racks",
  des4: "Color: White",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Starlink Standard 15 Meter RJ45 Ethernet Cable for Standard KIT",
  slug: "Starlink-Standard-15-Meter-RJ45-Ethernet-Cable-for-Standard-KIT",
  img: "water-heater14.webp",
  des1: "Type: RJ45 Ethernet Cable",
  des2: "Cable Length: 15m",
  des3: "Compatibility: Starlink Standard",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "TESY Compact Above Sink 10L Water Heater",
  slug: "TESY-Compact-Above-Sink-10L-Water-Heater",
  img: "water-heater15.webp",
  des1: "Type: Router Mount",
  des2: "Type: Router Mount",
  des3: "Compatibility: Gen 3 Router",
  des4: "Color: White",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "TESY Compact Under Sink 10L Water Heater",
  slug: "TESY-Compact-Under-Sink-10L-Water-Heater",
  img: "water-heater16.webp",
  des1: "Type: Mini Wall Mount",
  des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
  des3: "Durable, weather-resistant materials",
  des4: "Color: Gray",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "IEGA 90 Liter Floor Mount Geyser (20 Gallon)",
  slug: "IEGA-90-Liter-Floor-Mount-Geyser-(20-Gallon)",
  img: "water-heater17.webp",
  des1: "Type: Travel Kit",
  des2: "Compatibility: Starlink Mini",
  des3: "Shields Against Dirt, Scrapes and Bumps",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "TESY Compact Above Sink 15L Water Heater",
  slug: "TESY-Compact-Above-Sink-15L-Water-Heater",
  img: "water-heater18.webp",
  des1: "Type: Standard Wall Mount",
  des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
  des3: "Durable, weather-resistant materials",
  des4: "Easy to install and adjust",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Midea 30 Liter Geyser (D30-15A6)",
  slug: "Midea-30-Liter-Geyser-(D30-15A6)",
  img: "water-heater19.webp",
  des1: "Type: Standard Roof Rack Mount",
  des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
  des3: "Maximum width: 95 mm (3.74 in)",
  des4: "Compatibility: Starlink Standard, Starlink Enterprise",
  price: "20,000$ ",
  discount: "26,200$",
  isavailable: true,
},
{
  name: "Shameem Tropica 20 Gallon Special Geyser (90 Liter)",
  slug: "Shameem-Tropica-20-Gallon-Special-Geyser-(90-Liter)",
  img: "water-heater20.webp",
  des1: "Type: RJ45 Ethernet Cable",
  des2: "Cable Length: 45m",
  des3: "Compatibility: Starlink Standard",
  des4: "Color: Black",
  price: "12,400$ ",
  discount: "13,300#",
  isavailable: true,
},
{
  name: "Rangs REG-45GL 45 Liter Geyser",
  slug: "Rangs-REG-45GL-45-Liter-Geyser",
  img: "water-heater21.webp",
  des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
  des2: "Data Transfer Rate (LAN): 1000 Mbps",
  des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
  des4: "Number of Users: Up to 235, Mesh Compatibility",
  price: "32,100$ ",
  discount: "33,150$",
  isavailable: true,
},
{
  name: " TESY Compact Above Sink 10L Water Heater  ",
  slug: "TESY-Compact-Above-Sink-10L-Water-Heater",
  img: "water-heater22.webp",
  des1: "Type: Adapter and Mount",
  des2: "Compatibility: Starlink Mini",
  des3: "Durable, Weather-Resistant Materials",
  des4: "Compact and Lightweight",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Shameem Tropica 20 Gallon Standard Geyser (90 Liter)",
  slug: "Shameem-Tropica-20-Gallon-Standard-Geyser-(90-Liter)",
  img: "water-heater23.webp",
  des1: "Type: Roof Rack Mount",
  des2: "Compatibility: Starlink Mini",
  des3: "For Vehicle Roof Racks",
  des4: "Color: White",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "TESY Compact Above Sink 10L Water Heater",
  slug: "TESY-Compact-Above-Sink-10L-Water-Heater",
  img: "water-heater24.webp",
  des1: "Type: RJ45 Ethernet Cable",
  des2: "Cable Length: 15m",
  des3: "Compatibility: Starlink Standard",
  des4: "Color: Black",
  price: "12,400$ ",
  discount: "13,300$",
  isavailable: true,
},
{
  name: "Shameem Tropica 30 Litre Geyser (7 Gallon Special)",
  slug: "Shameem-Tropica-30-Litre-Geyser-(7-Gallon-Special)",
  img: "water-heater26.webp",
  des1: "Type: Router Mount",
  des2: "Type: Router Mount",
  des3: "Compatibility: Gen 3 Router",
  des4: "Color: White",
  price: "33,150$ ",
  discount: "32,100$",
  isavailable: true,
},
{
  name: "Shameem Tropica 15 Gallon Standard Geyser (67.5 Litre)",
  slug: "Shameem-Tropica-15-Gallon-Standard-Geyser-(67.5-Litre)",
  img: "water-heater27.webp",
  des1: "Type: Mini Wall Mount",
  des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
  des3: "Durable, weather-resistant materials",
  des4: "Color: Gray",
  price: " 20,000$",
  discount: "26,200$",
  isavailable: true,
},
{
  name: "Shameem Tropica 15 Gallon Standard Geyser (67.5 Litre)",
  slug: "Shameem-Tropica-15-Gallon-Standard-Geyser-(67.5-Litre)",
  img: "water-heater28.webp",
  des1: "Type: Travel Kit",
  des2: "Compatibility: Starlink Mini",
  des3: "Shields Against Dirt, Scrapes and Bumps",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Shameem Tropica 30 Litre Geyser (7 Gallon Special)",
  slug: "Shameem-Tropica-30-Litre-Geyser-(7-Gallon-Special)",
  img: "water-heater29.webp",
  des1: "Type: Standard Wall Mount",
  des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
  des3: "Durable, weather-resistant materials",
  des4: "Easy to install and adjust",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Haier 30 Litre Water Heater Geyser - ES30H-CK3(BD)",
  slug: "Haier-30-Litre-Water-Heater-Geyser---ES30H-CK3(BD)",
  img: "water-heater30.webp",
  des1: "Type: Standard Roof Rack Mount",
  des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
  des3: "Maximum width: 95 mm (3.74 in)",
  des4: "Compatibility: Starlink Standard, Starlink Enterprise",
  price: "20,000$ ",
  discount: "26,200$",
  isavailable: true,
},
{
  name: "Haier 30 Litre Water Heater Geyser - ES30H-CK3(BD)",
  slug: "Haier-30-Litre-Water-Heater-Geyser---ES30H-CK3(BD)",
  img: "water-heater31.webp",
  des1: "Type: RJ45 Ethernet Cable",
  des2: "Cable Length: 45m",
  des3: "Compatibility: Starlink Standard",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Shameem Tropica 15 Gallon Standard Geyser (67.5 Litre)",
  slug: "Shameem-Tropica-15-Gallon-Standard-Geyser-(67.5-Litre)",
  img: "water-heater32.webp",
  des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
  des2: "Data Transfer Rate (LAN): 1000 Mbps",
  des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
  des4: "Number of Users: Up to 235, Mesh Compatibility",
  price: "12,400$ ",
  discount: "13,300$",
  isavailable: true,
},
{
  name: "Shameem Tropica 20 Gallon Standard Geyser (90 Liter)",
  slug: "Shameem-Tropica-20-Gallon-Standard-Geyser-(90-Liter)",
  img: "water-heater33.webp",
  des1: "Antenna: Electronic Phased Array",
  des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
  des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
  des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
  price: "21,200$ ",
  discount: "26,500$",
  isavailable: true,
},
{
  name: "IEGA 67.5 Liter Floor Mount Geyser (15 Gallon)",
  slug: "IEGA-67.5-Liter-Floor-Mount-Geyser-(15-Gallon)",
  img: "water-heater34.webp",
  des1: "Antenna: Electronic Phased Array",
  des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
  des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
  des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
  price: " 39,600$",
  discount: "49,500$",
  isavailable: true,
},
{
  name: "IEGA 67.5 Liter Floor Mount Geyser (15 Gallon)",
  slug: "IEGA-67.5-Liter-Floor-Mount-Geyser-(15-Gallon)",
  img: "water-heater35.webp",
  des1: "Antenna: Electronic Phased Array",
  des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
  des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
  des4: "Weather-Resistant, Environmental Rating: IP56",
  price: " 185,000$",
  discount: "189,000$",
  isavailable: true,
},
{
  name: "Shameem Tropica 15 Gallon Special Geyser (67.5 Litre)",
  slug: "Shameem-Tropica-15-Gallon-Special-Geyser-(67.5-Litre)",
  img: "water-heater36.webp",
  des1: "Type: Power Cable",
  des2: "Cable Length: 15m",
  des3: "Compatibility: Starlink Mini",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "TESY Compact Above Sink 15L Water Heater",
  slug: "TESY-Compact-Above-Sink-15L-Water-Heater",
  img: "water-heater37.webp",
  des1: "Type: Power Supply Mount",
  des2: "Standard DC-DC Power Supply",
  des3: "Compatibility: Standard Power Supply",
  des4: "Mount Power Supply Directly to Wall or Other Surface",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "TESY Compact Above Sink 10L Water Heater",
  slug: "TESY-Compact-Above-Sink-10L-Water-Heater",
  img: "water-heater38.webp",
  des1: "Type: USB Type-C Power Cable",
  des2: "Cable Length: 5m",
  des3: "Compatibility: Starlink Mini",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "Shameem Tropica 30 Litre Geyser (7 Gallon Standard)",
  slug: "Shameem-Tropica-30-Litre-Geyser-(7-Gallon-Standard)",
  img: "water-heater39.webp",
  des1: "Type: RJ45 Ethernet Cable",
  des2: "Cable Length: 15m",
  des3: "Compatibility: Starlink Mini, Gen 3 Router",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
},
{
  name: "IEGA 45 Liter Floor Mount Geyser (10 Gallon)",
  slug: "IEGA-45-Liter-Floor-Mount-Geyser-(10-Gallon)",
  img: "water-heater40.webp",
  des1: "Type: Power Cable",
  des2: "Cable Length: 30m",
  des3: "Compatibility: Starlink Mini",
  des4: "Color: Black",
  price: " ",
  discount: "",
  isavailable: false,
}

];

  let [option, setoption] = useState(true);
  let [option2, setoption2] = useState(true);
  let [option3, setoption3] = useState(true);
  let [option4, setoption4] = useState(true);
  let [option5, setoption5] = useState(true);
  const STEP = 20;
  const [visibleCount, setVisibleCount] = useState(STEP);
  const visibleCarts = carts.slice(0, visibleCount);
  return (
    <div className=" container">
      <div className=" border border-b-1 border-t-0 border-l-0 border-r-0 py-[20px] border-[#c0bebe]">
        <h1 className=" font-[600] text-[25px] text-[#0404be]">
          Geyser Price in Bangladesh | Buy Water Heater Online
        </h1>
        <h2 className=" text-[13px] mt-[10px]">
          Geyser Price starts from BDT 7,990 to BDT 110,500 in Bangladesh,
          depending on model and capacity. Get latest Water Heater Geyser this
          winter from Star Tech Online Shop. Browse below and order now!
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
          <div className=" mt-[50px]">
            <div className=" flex justify-between w-[190px]">
              <p className="  font-[600] mb-[15px] text-[17px]">Avilability</p>
              <FaAngleUp
                style={{ rotate: option2 ? " 180deg" : "0deg" }}
                onClick={() => {
                  setoption2(!option2);
                }}
                className=" transition-all"
              />
            </div>
            <ul
              style={{ height: option2 ? "220px" : "0px" }}
              className=" grid gap-4 transition-all overflow-hidden"
            >
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> TESY{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Midea{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Haier{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Rangs{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Ariston{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> IEGA{" "}
              </li>
            </ul>
          </div>
          <div className=" mt-[50px]">
            <div className=" flex justify-between w-[190px]">
              <p className="  font-[600] mb-[15px] text-[17px]">Capacity</p>
              <FaAngleUp
                style={{ rotate: option3 ? " 180deg" : "0deg" }}
                onClick={() => {
                  setoption3(!option3);
                }}
                className=" transition-all"
              />
            </div>
            <ul
              style={{ height: option3 ? "220px" : "0px" }}
              className=" grid gap-4 transition-all overflow-hidden"
            >
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Up to 30 Litre{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 31 to 40 Litre{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 41 to 60 Litre{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 61 to 80 Litre{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 81 to 80 Litre{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 101 Litre to Above{" "}
              </li>
            </ul>
          </div>
          <div className=" mt-[50px]">
            <div className=" flex justify-between w-[190px]">
              <p className="  font-[600] mb-[15px] text-[17px]">Avilability</p>
              <FaAngleUp
                style={{ rotate: option4 ? " 180deg" : "0deg" }}
                onClick={() => {
                  setoption4(!option4);
                }}
                className=" transition-all"
              />
            </div>
            <ul
              style={{ height: option4 ? "70px" : "0px" }}
              className=" grid gap-4 transition-all overflow-hidden"
            >
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Vertical{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Horizontal{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`mb-[40px] grid grid-cols-4 gap-10 overflow-hidden
  transition-all duration-700 ease-in-out
  ${option5 ? "max-h-[6000px]" : "max-h-[2900px]"}`}
          >
            {visibleCarts.map((item, i) => (
              <div key={i} className=" w-[250px]">
                <div className="cursor-pointer h-[220px] flex justify-center">
                  <Link href = {`/water-Heater/${item.slug}`}>
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
            <div></div>
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
