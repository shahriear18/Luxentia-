
import Image from "next/image";
import Link from "next/link";
import React from "react";
const page = () => {
  let carts = [
    {
      name: "Starlink Mini Kit",
      slug: "1-starlink-mini-kit",
      img: "starlink1.webp",
      des1: "Antenna: Electronic Phased Array",
      des2: "Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
      des3: "Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices",
      des4: "Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug",
      price: "21,200$",
      discount: "26,500$",
      isavailable: true,
    },
    {
      name: "Starlink Standard Kit",
      slug: "2-starlink-standard-kit",
      img: "starlink2.webp",
      des1: "Antenna: Electronic Phased Array",
      des2: "Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
      des3: "Coverage: Up to 297 m² (3,200 ft²), Connect up to 235 Devices",
      des4: "Ethernet Ports: 2x Latching Ethernet LAN ports",
      price: "39,600$",
      discount: "49,500$",
      isavailable: true,
    },
    {
      name: "Starlink Flat High Performance Kit",
      slug: "3-starlink-flat-high-performance-kit",
      img: "starlink3.webp",
      des1: "Antenna: Electronic Phased Array",
      des2: "Frequency: Dual Band -3 x 3 MIMO, Wi-Fi 5",
      des3: "Mesh Compatibility: Compatible with up to 12 Starlink Nodes",
      des4: "Weather-Resistant, IP56",
      price: "185,000$",
      discount: "189,000$",
      isavailable: true,
    },
    {
      name: "Starlink Mini 15 Meter DC Power Cable for Mini KIT",
      slug: "4-starlink-mini-15m-dc-power-cable",
      img: "starlink4.webp",
      des1: "Type: Power Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard Power Supply Mount for Standard KIT",
      slug: "5-starlink-standard-power-supply-mount",
      img: "starlink5.webp",
      des1: "Type: Power Supply Mount",
      des2: "Standard DC-DC Power Supply",
      des3: "Compatibility: Standard Power Supply",
      des4: "Wall Mountable",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini 5 Meter USB Type-C Power Cable for Mini KIT",
      slug: "6-starlink-mini-5m-usb-c-power-cable",
      img: "starlink6.webp",
      des1: "Type: USB Type-C Cable",
      des2: "Cable Length: 5m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini 15 Meter RJ45 Ethernet Cable for Mini KIT",
      slug: "7-starlink-mini-15m-rj45-ethernet-cable",
      img: "starlink7.webp",
      des1: "Type: RJ45 Ethernet Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Mini, Gen 3 Router",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini 30 Meter DC Power Cable for Mini KIT",
      slug: "8-starlink-mini-30m-dc-power-cable",
      img: "starlink8.webp",
      des1: "Type: Power Cable",
      des2: "Cable Length: 30m",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini Mobility Mount for Mini KIT",
      slug: "9-starlink-mini-mobility-mount",
      img: "starlink9.webp",
      des1: "Type: Mobility Mount",
      des2: "9-Degree Mounting Angle",
      des3: "Compatibility: Starlink Mini",
      des4: "Color: White",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard Pipe Adapter Mount for Standard KIT",
      slug: "10-starlink-standard-pipe-adapter-mount",
      img: "starlink10.webp",
      des1: "Type: Pipe Adapter Mount",
      des2: "Max Diameter: 63.5mm",
      des3: "Compatibility: Standard, Enterprise",
      des4: "Weather Resistant",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard Mobility Mount for Standard KIT",
      slug: "11-starlink-standard-mobility-mount",
      img: "starlink11.webp",
      des1: "Type: Mobility Mount",
      des2: "8-Degree Mounting Angle",
      des3: "Compatibility: Standard, Enterprise",
      des4: "Durable Material",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini Pipe Adapter and Flat Mount for Mini KIT",
      slug: "12-starlink-mini-pipe-adapter-flat-mount",
      img: "starlink12.webp",
      des1: "Type: Adapter & Mount",
      des2: "Compatibility: Starlink Mini",
      des3: "Weather Resistant",
      des4: "Lightweight",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Vehicle Roof Rack Mount for Starlink Mini KIT",
      slug: "13-starlink-mini-vehicle-roof-rack-mount",
      img: "starlink13.webp",
      des1: "Type: Roof Rack Mount",
      des2: "Vehicle Compatible",
      des3: "For Starlink Mini",
      des4: "Color: White",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard 15 Meter RJ45 Ethernet Cable for Standard KIT",
      slug: "14-starlink-standard-15m-rj45-ethernet-cable",
      img: "starlink14.webp",
      des1: "Type: RJ45 Ethernet Cable",
      des2: "Cable Length: 15m",
      des3: "Compatibility: Starlink Standard",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Gen 3 Router Mount",
      slug: "15-starlink-gen-3-router-mount",
      img: "starlink15.webp",
      des1: "Type: Router Mount",
      des2: "Compatibility: Gen 3 Router",
      des3: "Wall Mountable",
      des4: "Color: White",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini Wall Mount for Mini KIT",
      slug: "16-starlink-mini-wall-mount",
      img: "starlink16.webp",
      des1: "Type: Mini Wall Mount",
      des2: "4-inch Overhang",
      des3: "Weather Resistant",
      des4: "Color: Gray",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Mini Travel Kit",
      slug: "17-starlink-mini-travel-kit",
      img: "starlink17.webp",
      des1: "Type: Travel Kit",
      des2: "Compatibility: Starlink Mini",
      des3: "Protective Case",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard Wall Mount for Standard KIT",
      slug: "18-starlink-standard-wall-mount",
      img: "starlink18.webp",
      des1: "Type: Wall Mount",
      des2: "4-inch Overhang",
      des3: "Compatibility: Standard, Enterprise",
      des4: "Easy Install",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard Roof Rack Mount for Standard KIT",
      slug: "19-starlink-standard-roof-rack-mount",
      img: "starlink19.webp",
      des1: "Type: Roof Rack Mount",
      des2: "Width: Up to 95mm",
      des3: "Compatibility: Standard, Enterprise",
      des4: "Heavy Duty",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Standard 45 Meter RJ45 Ethernet Cable for Standard KIT",
      slug: "20-starlink-standard-45m-rj45-ethernet-cable",
      img: "starlink20.webp",
      des1: "Type: RJ45 Ethernet Cable",
      des2: "Cable Length: 45m",
      des3: "Compatibility: Starlink Standard",
      des4: "Color: Black",
      price: "",
      discount: "",
      isavailable: false,
    },
    {
      name: "Starlink Gen 3 Mesh Tri-Band Wi-Fi 6 Router",
      slug: "21-starlink-gen-3-mesh-wifi-6-router",
      img: "starlink21.webp",
      des1: "Tri Band Wi-Fi 6",
      des2: "4x4 MU-MIMO",
      des3: "Up to 235 Users",
      des4: "Mesh Compatible",
      price: "",
      discount: "",
      isavailable: false,
    },
  ];

  return (
    <div className=" container">
      <div className=" border border-b-1 border-t-0 border-l-0 border-r-0 py-[20px] border-[#c0bebe]">
        <h1 className=" font-[600] text-[25px] text-[#0404be]">
          Starlink Prise in Bangladesh
        </h1>
        <h2 className=" text-[13px] mt-[10px]">
          Starlink Price starts from BDT 23,850 to BDT 185,000 in Bangladesh
          depending on hardware and package. Buy latest Starlink Hardware Kit
          officially from Star Tech online shop. Browse below and order yours
          now!
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
            <p className=" font-[600] mb-[10px] text-[17px]">Avilability</p>
            <ul className=" grid gap-1">
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
        <div className=" grid grid-cols-4 gap-10">
          {carts.map((item, i) => (
            <div key={i} className=" w-[250px]">
              <div className="cursor-pointer h-[220px] flex justify-center">
                <Link href={`Starlink/${item.slug}`}>
                  <Image
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
              <div className=" flex items-center justify-center text-[18px] gap-10 font-[600]">
                <p className=" text-[red]">
                  {item.isavailable ? item.price : "Upcoming"}
                </p>
                <del className=" text-[14px] text-[#5a5959]">
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
      </div>
    </div>
  );
};

export default page;
