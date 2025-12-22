import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  let cart = [
    {
      name: "Starlink Mini Kit",
      price: "21,200",
      discount: "26,500",
      img: "Featchered-product1.webp",
      slug: "Starlink-Mini-Kit",
    },
    {
      name: "Starlink Standard Kit",
      price: "39,600",
      discount: "49,500",
      img: "Featchered-product2.webp",
      slug: "Starlink-Standard-Kit",
    },
    {
      name: "SanDisk Professional G-DRIVE PROJECT 6TB Thunderbolt 3 External Hard Drive",
      price: "56,000",
      discount: "60,000",
      img: "Featchered-product3.webp",
      slug: "SanDisk-Professional-G-DRIVE-PROJECT-6TB-Thunderbolt-3-External-Hard-Drive",
    },
    {
      name: "Gree 1.5 Ton Lomo Split Inverter AC",
      price: "62,000",
      discount: "70,000",
      img: "Featchered-product4.webp",
      slug: "Gree-1.5-Ton-Lomo-Split-Inverter-AC",
    },
    {
      name: "MSI Barebone BZ09 Core i5-14400 H610M DDR4 Mini Tower PC With MAG A500N-H Power Supply",
      price: "44,999",
      discount: "46,000",
      img: "Featchered-product5.webp",
      slug: "MSI-Barebone-BZ09-Core-i5-14400-H610M-DDR4-Mini-Tower-PC-With-MAG-A500N-H-Power-Supply",
    },
    {
      name: "AMD Ryzen 5 3400G Processor Gaming Desktop PC",
      price: "30,500",
      discount: "32,200",
      img: "Featchered-product6.webp",
      slug: "AMD-Ryzen-5-3400G-Processor-Gaming-Desktop-PC",
    },
    {
      name: "SINGER SRSM-SM024 Electric Sewing Machine",
      price: "16,490",
      discount: "17,490",
      img: "Featchered-product7.jpg",
      slug: "SINGER-SRSM-SM024-Electric-Sewing-Machine",
    },
    {
      name: "AOC CS25G 24.5 FHD 310Hz Fast IPS CS mode Gaming Monitor",
      price: "32,990",
      discount: "36,000",
      img: "Featchered-product8.webp",
      slug: "AOC-CS25G-24.5-FHD-310Hz-Fast-IPS-CS-mode-Gaming-Monitor",
    },
    {
      name: "AOC AGON PRO AG276FK 27 520Hz FHD Fast IPS Gaming Monitor",
      price: "80,000",
      discount: "85,000",
      img: "Featchered-product9.webp",
      slug: "AOC-AGON-PRO-AG276FK-27-520Hz-FHD-Fast-IPS-Gaming-Monitor",
    },
    {
      name: "AOC AGON PRO AG276QKD 26.5 480Hz QHD OLED Gaming Monitor",
      price: "139,900",
      discount: "155,000",
      img: "Featchered-product10.webp",
      slug: "AOC-AGON-PRO-AG276QKD-26.5-480Hz-QHD-OLED-Gaming-Monitor",
    },
    {
      name: "XINJI PX1 100 ANSI Lumens LCD Portable Projector With Android OS",
      price: "17,000",
      discount: "20,000",
      img: "Featchered-product11.webp",
      slug: "XINJI-PX1-100-ANSI-Lumens-LCD-Portable-Projector-With-Android-OS",
    },
    {
      name: " Lenovo IdeaPad Flex 5 14ABR8 Ryzen 5 5625U 14 WUXZA Touch Laptop",
      price: "85,000",
      discount: "",
      img: "Featchered-product12.webp",
      slug: "Lenovo-IdeaPad-Flex-5-14ABR8-Ryzen-5-5625U-14-WUXZA-Touch-Laptop",
    },
    {
      name: "MSI Prestige 13 AI+ Ukiyoe Edition A2VMG Core Ultra 9 288V 13.3 2.8K OLED Laptop  ",
      price: "325,000",
      discount: "",
      img: "Featchered-product13.webp",
      slug: "MSI-Prestige-13-AI+-Ukiyoe-Edition-A2VMG-Core-Ultra-9-288V-13.3-2.8K-OLED-Laptop",
    },
    {
      name: "Asus NUC 13 Pro Core i3 13th Gen Portable Mini Pc  ",
      price: "42,000",
      discount: "46,500",
      img: "Featchered-product14.webp",
      slug: "Asus-NUC-13-Pro-Core-i3-13th-Gen-Portable-Mini-Pc",
    },
    {
      name: "Dell PowerEdge T160 Tower Server  ",
      price: "260,000",
      discount: "",
      img: "Featchered-product15.webp",
      slug: "Dell-PowerEdge-T160-Tower-Server",
    },
    {
      name: "Samsung 65DU7700 65 Inch Crystal 4K UHD Smart TV  ",
      price: "94,000",
      discount: "139,900",
      img: "Featchered-product16.webp",
      slug: "Samsung-65DU7700-65-Inch-Crystal-4K-UHD-Smart-TV",
    },
    {
      name: "DJI Air 3S Fly More Combo With DJI RC 2 Remote Controller ",
      price: "155,000",
      discount: "170,000",
      img: "Featchered-product17.webp",
      slug: "DJI-Air-3S-Fly-More-Combo-With-DJI-RC-2-Remote-Controller",
    },
    {
      name: " Black Shark S3  ",
      price: "5,790",
      discount: "5,999",
      img: "Featchered-product18.webp",
      slug: "Black-Shark-S3",
    },
    {
      name: "XINJI Stone Mini True Wireless Earbuds   ",
      price: "950",
      discount: "1,299",
      img: "Featchered-product19.webp",
      slug: "XINJI-Stone-Mini-True-Wireless-Earbuds",
    },
    {
      name: "Sony PlayStation 5 Slim Gaming Console",
      price: "69,900",
      discount: "",
      img: "Featchered-product20.webp",
      slug: "Sony-PlayStation-5-Slim-Gaming-Console",
    },
  ];

  return (
    <div>
      <div className=" h-[700px]">
        <h2 className="text-[25px] font-[600] text-center mt-[150px]">
          Featured Products
        </h2>
        <h3 className=" text-[16px] font-[600] text-center text-[#646363] mt-[8px]">
          Check & Get Your Desired Product!
        </h3>
        <div className=" grid grid-cols-5 gap-10">
          {cart.map((item, i) => (
            <div key={i} className=" h-[320px] w-[250px] bg-[#]">
              <div className=" flex justify-center">
                <Link href={`/Featcheredproduct/${item.slug}`}>
                  <Image
                    src={`/${item.img}`}
                    width={200}
                    height={300}
                    alt=""
                  ></Image>
                </Link>
              </div>
              <Link href={`/Featcheredproduct/${item.slug}`}>
              <p className=" hover:underline hover:text-[#ff4800] cursor-pointer bg-[] h-[70px] font-[400] text-center text-[14px]">
                {item.name}
              </p>              
              </Link>

              <p className=" mt-[20px] justify-center items-center flex gap-8 text-[#ff1100] font-[500] text-[18px] ml-[20px]">
                {item.price}
                <del className=" text-[14px] text-[#5a5858]">
                  {item.discount}
                </del>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
