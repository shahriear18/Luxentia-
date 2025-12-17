import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  let Catagories = [
    {
      img: "starlink1.png",
      name: "Starlink",
    },
    {
      img: "geyser2.png",
      name: "water-Heater",
    },
    {
      img: "drone3.png",
      name: "Drone",
    },
    {
      img: "gimbal4.png",
      name: "Gimbal",
    },
    {
      img: "tablet5.png",
      name: "Table PC",
    },
    {
      img: "tv6.png",
      name: "TV",
    },
    {
      img: "mobile7.png",
      name: "Mobile Phone",
    },
    {
      img: "mobile8.png",
      name: "Mobile Accessories",
    },
    {
      img: "Portable9.png",
      name: "Portable SSd",
    },
    {
      img: "portable10.png",
      name: "WIFI Camera",
    },
    {
      img: "trimmer11.png",
      name: "Trimmer",
    },
    {
      img: "smart12.png",
      name: "Smart Watch",
    },
    {
      img: "action13.png",
      name: "Action Camera",
    },
    {
      img: "earbuds14.png",
      name: "Earbuds",
    },
    {
      img: "bt15.png",
      name: "Bluetooth Speakers",
    },
    {
      img: "gaming16.png",
      name: "Gaming Console",
    },
  ];
  return (
    <div className=" mt-[20px]">
      <div>
        <h1 className=" text-center text-[25px] font-[600]">
          Featured Category
        </h1>
        <p className="text-[15px] font-[500] text-[#000000c5] text-center">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className=" grid grid-cols-8 mt-[50px] gap-[25px]">
        {Catagories.map((item, i) => (
          <div
            key={i}
            className="grid justify-center items-center px-[10px] w-[160px] h-[100px] hover:text-[#ff5100] hover:font-[500]"
          >
            <div className=" flex justify-center cursor-pointer">
              <Image
                className=" flex justify-center"
                src={`/${item.img}`}
                width={50}
                height={50}
                alt="#"
              />
            </div>
            <h2 className=" w-[160px] text-center  cursor-pointer">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
