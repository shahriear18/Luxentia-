import Image from "next/image";
import { Toaster } from "react-hot-toast";
export default async function Page({ params }) {
  const { id } = await params;
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
  const matchedPost = carts.find((item) => item.slug === id);
  if (!matchedPost) {
    return <p>Product not found</p>; // বা notFound() use করতে পারো
  }

  return (
    <div className=" container">
      <div className=" flex gap-40">
        <div className=" h-[300px] w-[300px] relative mt-[50px]">
          <Image fill src={`/${matchedPost.img}`} alt="#"></Image>
        </div>
        <div className=" mt-[20px]">
          <p className=" font-[600] text-[30px] text-[blue] mt-[20px] mb-[15px]">
            {matchedPost.name}
          </p>
          <div className=" flex  gap-20  mb-[30px]">
            <p className=" flex gap-3 text-[#686868] font-[600]">
              Price :{" "}
              {matchedPost.isavailable ? (
                <span className=" text-[black]"> {matchedPost.price}</span>
              ) : (
                <span className=" text-[#ff6600]"> Anounced Soon</span>
              )}
              <span>
                <del>{matchedPost.isavailable ? matchedPost.discount : ""}</del>
              </span>
            </p>
            <p className=" flex gap-2 text-[#686868] font-[600]">
              Regular Price :{" "}
              {matchedPost.isavailable ? (
                <span className=" text-[black]"> {matchedPost.discount}</span>
              ) : (
                <span className=" text-[#ff6600]"> Anounced Soon</span>
              )}
            </p>
            <p className=" flex gap-3 text-[#686868] font-[600]">
              Status :{" "}
              {matchedPost.isavailable ? (
                <span className=" text-[black]">In Stock</span>
              ) : (
                <span className=" text-[#ff6600]"> Avilable Soon</span>
              )}
            </p>
          </div>
          <div>
            <h2 className=" text-[20px] font-[600] mb-[15px] ml-[5px]">
              All Key Featchers
            </h2>
            <ul className=" grid gap-2 text-[13px] leading-[17px] list-disc pl-5 marker:text-[] text-[#3d3c3c]  mb-[15px]">
              <li className="">{matchedPost.des1}</li>
              <li>{matchedPost.des2}</li>
              <li>{matchedPost.des3}</li>
              <li>{matchedPost.des4}</li>
            </ul>
          </div>
          {matchedPost.isavailable ? (
            <div className="mt-[30px]">
              <h2 className=" font-[600] text-[20px]">Payment Option</h2>
              <div className=" flex gap-10 mt-[20px]">
                <div className=" h-[70px] w-[200px] border flex justify-center items-center gap-4">
                  <div className=" bg-[] h-[25px] w-[25px] flex justify-center items-center rounded-2xl border-1 border-[#3d3df5]">
                    <div className=" h-[15px] w-[15px] bg-[#3d3df5] rounded-2xl"></div>
                  </div>
                  <div>
                    <p className=" font-[600] text-[18px] flex items-center gap-2">
                      {matchedPost.price}{" "}
                      <del className=" text-[#3d3c3c] text-[15px]">
                        {matchedPost.discount}
                      </del>
                    </p>
                    <p className=" text-[11px] font-[500]">
                      Cash Discount price
                    </p>
                    <p className=" text-[11px] font-[500]">
                      Online / Cash Payent
                    </p>
                  </div>
                </div>
                <div className=" h-[70px] w-[200px] border flex justify-center items-center gap-4">
                  <div className=" bg-[] h-[25px] w-[25px] flex justify-center items-center rounded-2xl border-1 border-[#3d3df5]">
                    <div className=" h-[15px] w-[15px] bg-[#3d3df5] rounded-2xl"></div>
                  </div>
                  <div>
                    <p className=" font-[600] text-[18px] flex items-center gap-2">
                      {matchedPost.price}{" "}
                      <del className=" text-[#3d3c3c] text-[15px]">
                        {matchedPost.discount}
                      </del>
                    </p>
                    <p className=" text-[11px] font-[500]">
                      Cash Discount price
                    </p>
                    <p className=" text-[11px] font-[500]">
                      Online / Cash Payent
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex gap-10 mt-[30px]">
                <div className=" flex items-center gap-[] h-[50px] w-[150px] bg-[#] justify-center">
                  <button className=" cur h-[20px] w-[20px] font-[600] text-[25px] pb-[5px] bg-[#] flex justify-center items-center">
                    +
                  </button>
                  <div className="w-[100px] flex justify-center">
                    <input className=" outline-none w-[40px] " />
                  </div>
                  <button className=" h-[20px] w-[20px] font-[600] text-[35px] pb-[5px] bg-[#] flex justify-center items-center">
                    -
                  </button>
                </div>
                <button className=" px-[80px] py-[10px] rounded-[5px] text-[14px] font-[600] text-[white] bg-[#3d3df5]">
                  Buy now
                </button>
              </div>
            </div>
          ) : (
            <button className=" px-[80px] py-[10px] rounded-[5px] text-[14px] font-[600] text-[#000000] bg-[#d1caca]">
              Avilable soon
            </button>
          )}
        </div>
      </div>
      <div className=" h-[600px]">
        <div className=" mt-[80px] flex gap-4">
          <button className=" px-[20px] py-[10x] bg-[#ff2600] py-[10px] text-[white] font-[600] rounded-[5px]">
            specification
          </button>
          <button className=" px-[20px] py-[10x] bg-[#ff2600] py-[10px] text-[white] font-[600] rounded-[5px]">
            Description
          </button>
          <button className=" px-[20px] py-[10x] bg-[#ff2600] py-[10px] text-[white] font-[600] rounded-[5px]">
            Questions
          </button>
          <button className=" px-[20px] py-[10x] bg-[#ff2600] py-[10px] text-[white] font-[600] rounded-[5px]">
            Reviews
          </button>
        </div>
        <div className=" mt-[30px] mb-[20px]">
          <h2 className=" text-[20px] font-[500] mb-[20px]">Specifications</h2>
          <div>
            <ul className=" grid gap-7">
              <li className=" flex gap-[203px]">
                <p className=" font-[600] text-[#5c5a5a]">Antenna </p>{" "}
                <p>Electronic Phased Array</p>
              </li>
              <li className=" flex gap-[190px]">
                <p className=" font-[600] text-[#5c5a5a]">Frequency </p>{" "}
                <p>Dual Band 3 x 3 MU-MIMO</p>
              </li>
              <li className=" flex gap-[200px]">
                <p className=" font-[600] text-[#5c5a5a]">Wereless </p>{" "}
                <p>WIFI 5</p>
              </li>
              <li className=" flex gap-33">
                <p className=" font-[600] text-[#5c5a5a]">Network Standard </p>{" "}
                <p>802.11a/b/g/n/ac</p>
              </li>
              <li className=" flex gap-46">
                <p className=" font-[600] text-[#5c5a5a]">Encryption </p>{" "}
                <p>WPA2</p>
              </li>
              <li className=" flex gap-56">
                <p className=" font-[600] text-[#5c5a5a]">Ports </p>{" "}
                <p>1x Latching Ethernet LAN port with Starlink</p>
              </li>
              <li className=" flex gap-53">
                <p className=" font-[600] text-[#5c5a5a]">Others </p>{" "}
                <p>
                  Field of View: 110 ° Orientation: Software Assisted Manual
                  Orienting Environmental Rating: IP67 Type 4 with DC Power
                  Cable and Starlink Plug/Cable installed Operating Temperature:
                  -30°C to 50°C (-22°F to 122°F) Wind Speed: Operational: 96
                  kph+ (60 mph+) Snow Melt Capability: Up to 25mm / hour (1 in /
                  hour) Power Consumption: Average: 25-40W Input Rating: 12-48V
                  60W (12v short Starlink cable coming soon in Shop) USB PD
                  Requirement: 100W, 20V/5A Minimum (with Starlink USB-C to
                  Barrel Jack Cable Accessory) Coverage: Up to 112 m² (1,200
                  ft²) Power Indicator: LED | rear face plate, lower left corner
                  Mesh Compatibility: Compatible with all Starlink mesh systems
                  *Not compatible with 3rd party mesh systems Devices: Connect
                  up to 128 devices
                </p>
              </li>
              <li className=" flex gap-[165px]">
                <p className=" font-[600] text-[#5c5a5a]">Power Mode </p>{" "}
                <p> 100-240V ~ 1.6A 50 - 60 Hz</p>
              </li>
              <li className=" flex gap-45">
                <p className=" font-[600] text-[#5c5a5a]">Dimention </p>{" "}
                <p>
                  298.5 x 259 x 38.5 mm (11.75 x 10.2 x 1.45 in) (Starlink) 91 x
                  44 x 51 mm (3.6 in x 1.7 in x 2.0 in) (Power Supply) 430 x 334
                  x 79 mm (16.92 x 13.14 x 3.11 in) (Package)
                </p>
              </li>
              <li className=" flex gap-51">
                <p className=" font-[600] text-[#5c5a5a]">Weight </p>{" "}
                <p>
                  1.10 kg (2.43 lb) (Starlink) 1.16 kg (2.56 lb) with Kickstand
                  (Starlink) 1.53 kg (3.37 lb) with Kickstand & 15 m Cable
                  (Starlink) 0.2 kg (0.44 lbs) (Power Supply) 6.73 kg (14.83
                  lbs) (Package)
                </p>
              </li>
              <li className=" flex gap-48">
                <p className=" font-[600] text-[#5c5a5a]">Waranty </p>{" "}
                <p>
                  1 year official warranty from Starlink. For any warranty
                  claims, please contact Starlink Customer Support directly via
                  the Starlink app. (Star Tech will not be responsible for
                  handling warranty claims.). Subscription Policy: As per
                  Starlink's policy, customers are required to activate their
                  internet subscription by themselves. If you encounter any
                  issues with the subscription, please reach out to Starlink
                  Support via the Starlink app.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className=" font-[600] text-[25px]">Discription</h2>
          <div>
            <h2 className="text-[18px] mt-[10px] mb-[10px] font-[600] text-[blue]">
              {matchedPost.name}
            </h2>
            <p className=" font-[500] text-[#585858] text-[14px]">
              The{" "}
              <span className=" text-[blue] font-[500]">
                {matchedPost.name}
              </span>{" "}
              is an innovative satellite internet solution. Designed to deliver
              dependable communication in a variety of settings. This Starlink
              Mini Kit contains an electronic phased array antenna with a wide
              field of view of 110 degrees, ensuring optimal signal reception.
              The orientation is helped by software-assisted manual orientation,
              which makes setup simple. The Starlink Mini Kit has an IP67 Type 4
              environmental classification and is designed to endure tough
              conditions such as operational wind speeds of over 96 kph (60 mph)
              and snow melt capabilities of up to 25mm (1 inch) per hour. The
              Starlink Internet has power consumption ranges from 25 to 40
              watts, and with an input rating of 12-48V and a maximum of 60W,
              this Mini Kit ensures energy efficiency. For individuals who need
              more power, the Starlink USB-C to Barrel Jack Cable attachment
              offers a 100W USB PD need at 20V/5A. The Starlink Mini Kit is
              Wi-Fi technology that supports 802.11a/b/g/n/ac and uses WiFi 5
              for improved performance. The dual-band radio has a 3 x 3 MU-MIMO
              setup, which allows for multiple connections and higher data
              transmission. The Starlink Mini Kit provides one latching Ethernet
              LAN connector with a Starlink socket for a dependable connected
              connection. Coverage is up to 112 m² (1,200 ft²), making it suited
              for a variety of situations. WPA2 encryption protects user data.
              The power indicator is conveniently situated in the lower left
              corner of the LED rear faceplate. Also, the Starlink Mini Kit
              works with all Starlink mesh systems but does not support
              third-party mesh systems. Users may connect up to 128 devices,
              making it an excellent solution for families or small companies
              looking for reliable internet connectivity. The orientation is
              helped by software-assisted manual orientation, which makes setup
              simple. The Starlink Mini Kit has an IP67 Type 4 environmental
              classification and is designed to endure tough conditions such as
              operational wind speeds of over 96 kph (60 mph) and snow melt
              capabilities of up to 25mm (1 inch) per hour. The Starlink
              Internet has power consumption ranges from 25 to 40 watts, and
              with an input rating of 12-48V and a maximum of 60W, this Mini Kit
              ensures energy efficiency. For individuals who need more power,
              the Starlink USB-C to Barrel Jack Cable attachment offers a 100W
              USB PD need at 20V/5A. The Starlink Mini Kit is Wi-Fi technology
              that supports 802.11a/b/g/n/ac and uses WiFi 5 for improved
              performance. The dual-band radio has a 3 x 3 MU-MIMO setup, which
              allows for multiple connections and higher data transmission. The
              Starlink Mini Kit provides one latching Ethernet LAN connector
              with a Starlink socket for a dependable connected connection.
              Coverage is up to 112 m² (1,200 ft²), making it suited for a
              variety of situations. WPA2 encryption protects user data. The
              power indicator is conveniently situated in the lower left corner
              of the LED rear faceplate. Also, the Starlink Mini Kit works with
              all Starlink mesh systems but does not support third-party mesh
              systems. Users may connect up to 128 devices, making it an
              excellent solution for families or small companies looking for
              reliable internet connectivity. The orientation is helped by
              software-assisted manual orientation, which makes setup simple.
              The Starlink Mini Kit has an IP67 Type 4 environmental
              classification and is designed to endure tough conditions such as
              operational wind speeds of over 96 kph (60 mph) and snow melt
              capabilities of up to 25mm (1 inch) per hour. The Starlink
              Internet has power consumption ranges from 25 to 40 watts, and
              with an input rating of 12-48V and a maximum of 60W, this Mini Kit
              ensures energy efficiency. For individuals who need more power,
              the Starlink USB-C to Barrel Jack Cable attachment offers a 100W
              USB PD need at 20V/5A. The Starlink Mini Kit is Wi-Fi technology
              that supports 802.11a/b/g/n/ac and uses WiFi 5 for improved
              performance. The dual-band radio has a 3 x 3 MU-MIMO setup, which
              allows for multiple connections and higher data transmission. The
              Starlink Mini Kit provides one latching Ethernet LAN connector
              with a Starlink socket for a dependable connected connection.
              Coverage is up to 112 m² (1,200 ft²), making it suited for a
              variety of situations. WPA2 encryption protects user data. The
              power indicator is conveniently situated in the lower left corner
              of the LED rear faceplate. Also, the Starlink Mini Kit works with
              all Starlink mesh systems but does not support third-party mesh
              systems. Users may connect up to 128 devices, making it an
              excellent solution for families or small companies looking for
              reliable internet connectivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
