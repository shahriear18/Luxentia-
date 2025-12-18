import Image from "next/image";
import React from "react";

const page = () => {
  let carts = [
    {
      name: "Starlink Mini Kit",
      img: "starlink1.webp",
      des1: "Antenna: Electronic Phased Array",
      des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
      des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
      des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
      price : "21,200$ ",
      discount : "26,500$",
      isavailable : true
    },
    {
      name: "Starlink Standard Kit",
      img: "starlink2.webp",
      des1: "Antenna: Electronic Phased Array",
      des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
      des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
      des4: "Ethernet Ports: 2x Latching Ethernet LAN ports with removable cover",
      price : " 39,600$",
      discount : "49,500$",
      isavailable : true
    },
    {
      name: "Starlink Flat High Performance Kit",
      img: "starlink3.webp",
      des1: "Antenna: Electronic Phased Array",
      des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
      des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
      des4: "Weather-Resistant, Environmental Rating: IP56",
      price : " 185,000$",
      discount : "189,000$",
      isavailable : true
    },{
      name: "Starlink Mini 15 Meter DC Power Cable for Mini KIT",
      img: "starlink4.webp",
      des1: "Type: Power Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard Power Supply Mount for Standard KIT",
      img: "starlink5.webp",
      des1: "Type: Power Supply Mount",
      des2: "Standard DC-DC Power Supply",
      des3: "Compatibility: Standard Power Supply",
      des4: "Mount Power Supply Directly to Wall or Other Surface",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini 5 Meter USB Type-C Power Cable for Mini KIT",
      img: "starlink6.webp",
      des1: "Type: USB Type-C Power Cable",
      des2: "Cable Length: 5m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini 15 Meter RJ45 Ethernet Cable for Mini KIT",
      img: "starlink7.webp",
      des1: "Type: RJ45 Ethernet Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Mini, Gen 3 Router",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini 30 Meter DC Power Cable for Mini KIT",
      img: "starlink8.webp",
      des1: "Type: Power Cable",
      des2: "Cable Length: 30m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini Mobility Mount for Mini KIT",
      img: "starlink9.webp",
      des1: "Type: Mobility Mount",
      des2: "Supports a 9-Degree Mounting Angle",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: White",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard Pipe Adapter Mount for Standard KIT",
      img: "starlink10.webp",
      des1: "Type: Pipe Adapter Mount",
      des2: "Maximum Diameter: 63.5 mm (2.5 in)",
      des3: "Compatibility: Starlink Standard, Starlink Enterprise",
      des4: "Durable, Weather-Resistant Materials",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard Mobility Mount for Standard KIT",
      img: "starlink11.webp",
      des1: "Type: Starlink Standard Mobility Mount",
      des2: "Supports 8-Degree Mounting Angle",
      des3: "Compatibility: Starlink Standard, Starlink Enterprise",
      des4: "Durable, Weather-Resistant Materials",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini Pipe Adapter and Flat Mount for Mini KIT",
      img: "starlink12.webp",
      des1: "Type: Adapter and Mount",
      des2: "Compatibility: Starlink Mini",
      des3: "Durable, Weather-Resistant Materials",
      des4: "Compact and Lightweight",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Vehicle Roof Rack Mount for Starlink Mini KIT",
      img: "starlink13.webp",
      des1: "Type: Roof Rack Mount",
      des2: "Compatibility: Starlink Mini",
      des3: "For Vehicle Roof Racks",
      des4: "Color: White",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard 15 Meter RJ45 Ethernet Cable for Standard KIT",
      img: "starlink14.webp",
      des1: "Type: RJ45 Ethernet Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Standard",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Gen 3 Router Mount",
      img: "starlink15.webp",
      des1: "Type: Router Mount",
      des2: "Type: Router Mount",
      des3: "Compatibility: Gen 3 Router",
      des4: "Color: White",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini Wall Mount for Mini KIT",
      img: "starlink16.webp",
      des1: "Type: Mini Wall Mount",
      des2: "Compatibility: Starlink Mini, 4-inch Overhang Maximum",
      des3: "Durable, weather-resistant materials",
      des4: "Color: Gray",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Mini Travel Kit",
      img: "starlink17.webp",
      des1: "Type: Travel Kit",
      des2: "Compatibility: Starlink Mini",
      des3: "Shields Against Dirt, Scrapes and Bumps",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard Wall Mount for Standard KIT",
      img: "starlink18.webp",
      des1: "Type: Standard Wall Mount",
      des2: "Compatibility: Starlink Standard, Starlink Enterprise, 4 inch Overhang Maximum",
      des3: "Durable, weather-resistant materials",
      des4: "Easy to install and adjust",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard Roof Rack Mount for Standard KIT",
      img: "starlink19.webp",
      des1: "Type: Standard Roof Rack Mount",
      des2: "Thickness: 15 mm (0.59 in) to 44.5 mm (1.75 in)",
      des3: "Maximum width: 95 mm (3.74 in)",
      des4: "Compatibility: Starlink Standard, Starlink Enterprise",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Standard 45 Meter RJ45 Ethernet Cable for Standard KIT",
      img: "starlink20.webp",
      des1: "Type: RJ45 Ethernet Cable",
      des2: "Cable Length: 45m",
      des3: "Compatibility: Starlink Standard",
      des4: "Color: Black",
      price : " ",
      discount : "",
      isavailable : false
    },{
      name: "Starlink Gen 3 Mesh Tri-Band Wi-Fi 6 Router",
      img: "starlink21.webp",
      des1: "Frequency: Tri Band, 4 x 4 MU-MIMO, Wi-Fi 6",
      des2: "Data Transfer Rate (LAN): 1000 Mbps",
      des3: "Ports: 1x WAN, 2x LAN (10/100/1000 RJ45)",
      des4: "Number of Users: Up to 235, Mesh Compatibility",
      price : " ",
      discount : "",
      isavailable : false
    },
  ];
  return (
    <div className=" grid grid-cols-4 gap-10">
      {
        carts.map((item,i) =>(
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
            <li>
              {item.des3}
            </li>
            <li>
              {item.des4}
            </li>
          </ul>
        </div>
        <div className=" flex items-center justify-center text-[18px] gap-10 font-[600]">
        <p className=" text-[red]">{item.isavailable? item.price : "Upcoming"}</p>
        <del className=" text-[14px] text-[#5a5959]">{item.isavailable? item.discount : ''}</del>
      </div>
      <div className=" flex justify-center mt-[20px] font-[600] text-[13px] gap-3">
         <button className="cursor-pointer text-[white] px-[20px] bg-[#0044ffb4] py-[5px] rounded-[5px]">{item.isavailable?"Buy now" : "Pre order"}</button>
          <button
          style={{
            display : item.isavailable? "block" : 'none',
                    }}
           className="cursor-pointer px-[20px] bg-[#ff5e00] py-[5px] rounded-[5px]">Add to cart</button>
         </div>

      </div>          
        ))
      }

      
    </div>
  );
};

export default page;
