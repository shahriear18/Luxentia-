"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
const page = () => {
  let carts = [
  {
    name: "Hohem iSteady XE Kit Smartphone Gimbal Stabilizer",
    slug: "Hohem-iSteady-XE-Kit-Smartphone-Gimbal-Stabilizer",
    img: "gambal1.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
    des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
    des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
    price: "21,200$ ",
    discount: "26,500$",
    isavailable: true,
  },
  {
    name: "Hohem iSteady X3 SE Foldable Gimbal Stabilizer",
    slug: "Hohem-iSteady-X3-SE-Foldable-Gimbal-Stabilizer",
    img: "gambal2.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
    des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
    des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
    price: " 39,600$",
    discount: "49,500$",
    isavailable: true,
  },
  {
    name: "Zhiyun SMOOTH-X2 Smartphone Gimbal",
    slug: "Zhiyun-SMOOTH-X2-Smartphone-Gimbal",
    img: "gambal3.jpg",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
    des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
    des4: "Weather-Resistant, Environmental Rating: IP56",
    price: " 185,000$",
    discount: "189,000$",
    isavailable: true,
  },
  {
    name: "Zhiyun Smooth-Q3 3-Axis Gimbal Stabilizer",
    slug: "Zhiyun-Smooth-Q3-3-Axis-Gimbal-Stabilizer",
    img: "gambal4.jpg",
    des1: "Type: Power Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Smooth Q4 Handheld Gimbal Stabilizer",
    slug: "Zhiyun-Smooth-Q4-Handheld-Gimbal-Stabilizer",
    img: "gambal5.webp",
    des1: "Type: Power Supply Mount",
    des2: "Standard DC-DC Power Supply",
    des3: "Compatibility: Standard Power Supply",
    des4: "Mount Power Supply Directly to Wall or Other Surface",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Smooth-Q3 Combo 3-Axis Gimbal Stabilizer",
    slug: "Zhiyun-Smooth-Q3-Combo-3-Axis-Gimbal-Stabilizer",
    img: "gambal6.jpg",
    des1: "Type: USB Type-C Power Cable",
    des2: "Cable Length: 5m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Smooth-X2 COMBO Smartphone Gimbal",
    slug: "Zhiyun-Smooth-X2-COMBO-Smartphone-Gimbal",
    img: "gambal7.jpg",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini, Gen 3 Router",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Osmo Mobile 7 Smartphone Gimbal",
    slug: "DJI-Osmo-Mobile-7-Smartphone-Gimbal",
    img: "gambal8.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 30m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Hohem iSteady Pro4 3-Axis Action Camera Gimbal Stabilizer",
    slug: "Hohem-iSteady-Pro4-3-Axis-Action-Camera-Gimbal-Stabilizer",
    img: "gambal9.webp",
    des1: "Type: Mobility Mount",
    des2: "Supports a 9-Degree Mounting Angle",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI RS 3 Pro Gimbal Stabilizer Combo",
    slug: "DJI-RS-3-Pro-Gimbal-Stabilizer-Combo",
    img: "gambal10.webp",
    des1: "Type: Pipe Adapter Mount",
    des2: "Maximum Diameter: 63.5 mm (2.5 in)",
    des3: "Compatibility: Starlink Standard, Starlink Enterprise",
    des4: "Durable, Weather-Resistant Materials",
    price: " 20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "FEIYU Vimble 3 Handheld Stabilizer",
    slug: "FEIYU-Vimble-3-Handheld-Stabilizer",
    img: "gambal11.webp",
    des1: "Type: Starlink Standard Mobility Mount",
    des2: "Supports 8-Degree Mounting Angle",
    des3: "Compatibility: Starlink Standard, Starlink Enterprise",
    des4: "Durable, Weather-Resistant Materials",
    price: " 32,100$ ",
    discount: "33,150$",
    isavailable: true,
  },
  {
    name: "Zhiyun SMOOTH 5 Smartphone Gimbal",
    slug: "Zhiyun-SMOOTH-5-Smartphone-Gimbal",
    img: "gambal12.webp",
    des1: "Type: Adapter and Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "Durable, Weather-Resistant Materials",
    des4: "Compact and Lightweight",
    price: "12,400$ ",
    discount: "13,300#",
    isavailable: true,
  },
  {
    name: "DJI Osmo Mobile 6 Foldable Smartphone Gimbal",
    slug: "DJI-Osmo-Mobile-6-Foldable-Smartphone-Gimbal",
    img: "gambal13.jpg",
    des1: "Type: Roof Rack Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "For Vehicle Roof Racks",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "FEIYU VB4 Handheld Stabilizer",
    slug: "FEIYU-VB4-Handheld-Stabilizer",
    img: "gambal14.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Osmo Mobile 7P Smartphone Gimbal",
    slug: "DJI-Osmo-Mobile-7P-Smartphone-Gimbal",
    img: "gambal15.webp",
    des1: "Type: Router Mount",
    des2: "Type: Router Mount",
    des3: "Compatibility: Gen 3 Router",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Insta360 Flow Pro AI Tracking Smartphone Gimbal Stabilizer",
    slug: "Insta360-Flow-Pro-AI-Tracking-Smartphone-Gimbal-Stabilizer",
    img: "gambal16.webp",
    des1: "Type: Mini Wall Mount",
    des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Color: Gray",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "FEIYU SCORP-Mini P Handheld Stabilizer",
    slug: "FEIYU-SCORP-Mini-P-Handheld-Stabilizer",
    img: "gambal17.webp",
    des1: "Type: Travel Kit",
    des2: "Compatibility: Starlink Mini",
    des3: "Shields Against Dirt, Scrapes and Bumps",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Hohem iSteady M6 Kit AI Gimbal Stabilizer",
    slug: "Hohem-iSteady-M6-Kit-AI-Gimbal-Stabilizer",
    img: "gambal18.webp",
    des1: "Type: Standard Wall Mount",
    des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Easy to install and adjust",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Crane-M2S Smartphone and Camera Handheld Stabilizer Gimbal",
    slug: "Zhiyun-Crane-M2S-Smartphone-and-Camera-Handheld-Stabilizer-Gimbal",
    img: "gambal19.webp",
    des1: "Type: Standard Roof Rack Mount",
    des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
    des3: "Maximum width: 95 mm (3.74 in)",
    des4: "Compatibility: Starlink Standard, Starlink Enterprise",
    price: "20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "Zhiyun Smooth 5S 3-Axis Smartphone Handheld Gimbal Combo",
    slug: "Zhiyun-Smooth-5S-3-Axis-Smartphone-Handheld-Gimbal-Combo",
    img: "gambal20.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 45m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: "12,400$ ",
    discount: "13,300#",
    isavailable: true,
  },
  {
    name: "FEIYU SCORP-Mini P Handheld Stabilizer Kit",
    slug: "FEIYU-SCORP-Mini-P-Handheld-Stabilizer-Kit",
    img: "gambal21.webp",
    des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
    des2: "Data Transfer Rate (LAN): 1000 Mbps",
    des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
    des4: "Number of Users: Up to 235, Mesh Compatibility",
    price: "32,100$ ",
    discount: "33,150$",
    isavailable: true,
  },
  {
    name: "Zhiyun CRANE-M3 3-Axis Handheld Gimbal Stabilizer",
    slug: "Zhiyun-CRANE-M3-3-Axis-Handheld-Gimbal-Stabilizer",
    img: "gambal22.webp",
    des1: "Type: Adapter and Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "Durable, Weather-Resistant Materials",
    des4: "Compact and Lightweight",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Hohem iSteady M7 AI Gimbal Stabilizer",
    slug: "Hohem-iSteady-M7-AI-Gimbal-Stabilizer",
    img: "gambal23.jpg",
    des1: "Type: Roof Rack Mount",
    des2: "Compatibility: Starlink Mini",
    des3: "For Vehicle Roof Racks",
    des4: "Color: White",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI RS 3 Mini Gimbal Stabilizer",
    slug: "DJI-RS-3-Mini-Gimbal-Stabilizer",
    img: "gambal24.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: "12,400$ ",
    discount: "13,300$",
    isavailable: true,
  },
  {
    name: "Hohem iSteady MT2 Kit Camera Gimbal",
    slug: "Hohem-iSteady-MT2-Kit-Camera-Gimbal",
    img: "gambal26.webp",
    des1: "Type: Router Mount",
    des2: "Type: Router Mount",
    des3: "Compatibility: Gen 3 Router",
    des4: "Color: White",
    price: "33,150$ ",
    discount: "32,100$",
    isavailable: true,
  },
  {
    name: "DJI RS 4 Mini Handheld Camera Gimbal Stabilizer",
    slug: "DJI-RS-4-Mini-Handheld-Camera-Gimbal-Stabilizer",
    img: "gambal27.webp",
    des1: "Type: Mini Wall Mount",
    des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Color: Gray",
    price: " 20,000$",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "DJI RS 4 Mini Handheld Camera Gimbal Stabilizer Combo",
    slug: "DJI-RS-4-Mini-Handheld-Camera-Gimbal-Stabilizer-Combo",
    img: "gambal28.webp",
    des1: "Type: Travel Kit",
    des2: "Compatibility: Starlink Mini",
    des3: "Shields Against Dirt, Scrapes and Bumps",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI RS 4 Handheld Camera Gimbal Stabilizer",
    slug: "DJI-RS-4-Handheld-Camera-Gimbal-Stabilizer",
    img: "gambal29.webp",
    des1: "Type: Standard Wall Mount",
    des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
    des3: "Durable, weather-resistant materials",
    des4: "Easy to install and adjust",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI RS 3 Gimbal Stabilizer Combo",
    slug: "DJI-RS-3-Gimbal-Stabilizer-Combo",
    img: "gambal30.webp",
    des1: "Type: Standard Roof Rack Mount",
    des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
    des3: "Maximum width: 95 mm (3.74 in)",
    des4: "Compatibility: Starlink Standard, Starlink Enterprise",
    price: "20,000$ ",
    discount: "26,200$",
    isavailable: true,
  },
  {
    name: "DJI RS 4 Handheld Camera Gimbal Stabilizer Combo",
    slug: "DJI-RS-4-Handheld-Camera-Gimbal-Stabilizer-Combo",
    img: "gambal31.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 45m",
    des3: "Compatibility: Starlink Standard",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI Osmo Mobile 8",
    slug: "DJI-Osmo-Mobile-8",
    img: "gambal32.webp",
    des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
    des2: "Data Transfer Rate (LAN): 1000 Mbps",
    des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
    des4: "Number of Users: Up to 235, Mesh Compatibility",
    price: "12,400$ ",
    discount: "13,300$",
    isavailable: true,
  },
  {
    name: "Zhiyun Smooth-XS 2-Axis Gimbal for Smartphone",
    slug: "Zhiyun-Smooth-XS-2-Axis-Gimbal-for-Smartphone",
    img: "gambal33.webp",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
    des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
    des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
    price: "21,200$ ",
    discount: "26,500$",
    isavailable: true,
  },
  {
    name: "Zhiyun Smooth X Foldable Smartphone Gimbal",
    slug: "Zhiyun-Smooth-X-Foldable-Smartphone-Gimbal",
    img: "gambal34.jpg",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
    des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
    des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
    price: " 39,600$",
    discount: "49,500$",
    isavailable: true,
  },
  {
    name: "DJI Osmo Mobile SE Smartphone Gimbal with 3-Axis Stabilization",
    slug: "DJI-Osmo-Mobile-SE-Smartphone-Gimbal-with-3-Axis-Stabilization",
    img: "gambal35.jpg",
    des1: "Antenna: Electronic Phased Array",
    des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
    des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
    des4: "Weather-Resistant, Environmental Rating: IP56",
    price: " 185,000$",
    discount: "189,000$",
    isavailable: true,
  },
  {
    name: "Hohem iSteady Mobile+ Kit Gimbal Stabilizer",
    slug: "Hohem-iSteady-Mobile+-Kit-Gimbal-Stabilizer",
    img: "gambal36.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "DJI OM 5 3 Axis Stable Gimbal",
    slug: "DJI-OM-5-3-Axis-Stable-Gimbal",
    img: "gambal37.webp",
    des1: "Type: Power Supply Mount",
    des2: "Standard DC-DC Power Supply",
    des3: "Compatibility: Standard Power Supply",
    des4: "Mount Power Supply Directly to Wall or Other Surface",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Smooth Q4 Combo Gimbal Stabilizer",
    slug: "Zhiyun-Smooth-Q4-Combo-Gimbal-Stabilizer",
    img: "gambal38.jpg",
    des1: "Type: USB Type-C Power Cable",
    des2: "Cable Length: 5m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Insta360 Flow Standalone AI Tracking Smartphone Gimbal Stabilizer",
    slug: "Insta360-Flow-Standalone-AI-Tracking-Smartphone-Gimbal-Stabilizer",
    img: "gambal39.webp",
    des1: "Type: RJ45 Ethernet Cable",
    des2: "Cable Length: 15m",
    des3: "Compatibility: Starlink Mini, Gen 3 Router",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Smooth 5S 3-Axis Smartphone Handheld Gimbal",
    slug: "Zhiyun-Smooth-5S-3-Axis-Smartphone-Handheld-Gimbal",
    img: "gambal40.webp",
    des1: "Type: Power Cable",
    des2: "Cable Length: 30m",
    des3: "Compatibility: Starlink Mini",
    des4: "Color: Black",
    price: " ",
    discount: "",
    isavailable: false,
  },
  {
    name: "Zhiyun Smooth 5S 3-Axis Smartphone Handheld Gimbal",
    slug: "Zhiyun-Smooth-5S-3-Axis-Smartphone-Handheld-Gimbal",
    img: "gambal41.webp",
    des1: "Type: Pipe Adapter Mount",
    des2: "Maximum Diameter: 63.5 mm (2.5 in)",
    des3: "Compatibility: Starlink Standard, Starlink Enterprise",
    des4: "Durable, Weather-Resistant Materials",
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
          Gimbal Price in Bangladesh
        </h1>
        <h2 className=" text-[13px] mt-[10px]">
          Gimbal Price in Bangladesh starts from BDT 5000 to BDT 121,000
          depending on model, brand and features. Get your Gimbal Stabilizer for
          your camera from Star Tech Online Shop. Browse below and order yours
          now!!
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
              <p className="  font-[600] mb-[15px] text-[17px]">Brand</p>
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
                <input type="checkbox" /> Dji{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Zhiyan{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Baseus{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Insta36{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Honem{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> IEGA{" "}
              </li>
            </ul>
          </div>
          <div className=" mt-[50px]">
            <div className=" flex justify-between w-[190px]">
              <p className="  font-[600] mb-[15px] text-[17px]">Axis</p>
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
                <input type="checkbox" /> 2 Axis{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 3 Axis{" "}
              </li>
            </ul>
          </div>
          <div className=" mt-[50px]">
            <div className=" flex justify-between w-[190px]">
              <p className="  font-[600] mb-[15px] text-[17px]">Maxmum Load</p>
              <FaAngleUp
                style={{ rotate: option3 ? " 180deg" : "0deg" }}
                onClick={() => {
                  setoption3(!option3);
                }}
                className=" transition-all"
              />
            </div>
            <ul
              style={{ height: option3 ? "150px" : "0px" }}
              className=" grid gap-4 transition-all overflow-hidden"
            >
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 101g - 200g{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 21g - 300g{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> 500g - 1kg{" "}
              </li>
              <li className=" text-[#292828] text-[15px] font-[600] flex items-center gap-2">
                <input type="checkbox" /> Over 1 kg{" "}
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
                  <Link href={`/Gimbal/${item.slug}`}>
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
