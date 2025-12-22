import Image from "next/image";
import { Toaster } from "react-hot-toast";
export default async function Page({ params }) {
  const { id } = await params;
  let cart = [
    {
      name: "Starlink Mini Kit",
      price: "21,200",
      discount: "26,500",
      img: "Featchered-product1.webp",
      slug: "Starlink-Mini-Kit",
      isavailable : true,
    },
    {
      name: "Starlink Standard Kit",
      price: "39,600",
      discount: "49,500",
      img: "Featchered-product2.webp",
      isavailable : true,
      slug: "Starlink-Standard-Kit",
    },
    {
      name: "SanDisk Professional G-DRIVE PROJECT 6TB Thunderbolt 3 External Hard Drive",
      price: "56,000",
      discount: "60,000",
      img: "Featchered-product3.webp",
      isavailable : true,
      slug: "SanDisk-Professional-G-DRIVE-PROJECT-6TB-Thunderbolt-3-External-Hard-Drive",
    },
    {
      name: "Gree 1.5 Ton Lomo Split Inverter AC",
      price: "62,000",
      discount: "70,000",
      img: "Featchered-product4.webp",
      isavailable : true,
      slug: "Gree-1.5-Ton-Lomo-Split-Inverter-AC",
    },
    {
      name: "MSI Barebone BZ09 Core i5-14400 H610M DDR4 Mini Tower PC With MAG A500N-H Power Supply",
      price: "44,999",
      discount: "46,000",
      img: "Featchered-product5.webp",
      slug: "MSI-Barebone-BZ09-Core-i5-14400-H610M-DDR4-Mini-Tower-PC-With-MAG-A500N-H-Power-Supply",
      isavailable : true,
    },
    {
      name: "AMD Ryzen 5 3400G Processor Gaming Desktop PC",
      price: "30,500",
      discount: "32,200",
      img: "Featchered-product6.webp",
      slug: "AMD-Ryzen-5-3400G-Processor-Gaming-Desktop-PC",
      isavailable : true,
    },
    {
      name: "SINGER SRSM-SM024 Electric Sewing Machine",
      price: "16,490",
      discount: "17,490",
      img: "Featchered-product7.jpg",
      slug: "SINGER-SRSM-SM024-Electric-Sewing-Machine",
      isavailable : true,
    },
    {
      name: "AOC CS25G 24.5 FHD 310Hz Fast IPS CS mode Gaming Monitor",
      price: "32,990",
      discount: "36,000",
      img: "Featchered-product8.webp",
      slug: "AOC-CS25G-24.5-FHD-310Hz-Fast-IPS-CS-mode-Gaming-Monitor",
      isavailable : true,
    },
    {
      name: "AOC AGON PRO AG276FK 27 520Hz FHD Fast IPS Gaming Monitor",
      price: "80,000",
      discount: "85,000",
      img: "Featchered-product9.webp",
      slug: "AOC-AGON-PRO-AG276FK-27-520Hz-FHD-Fast-IPS-Gaming-Monitor",
      isavailable : true,
    },
    {
      name: "AOC AGON PRO AG276QKD 26.5 480Hz QHD OLED Gaming Monitor",
      price: "139,900",
      discount: "155,000",
      img: "Featchered-product10.webp",
      slug: "AOC-AGON-PRO-AG276QKD-26.5-480Hz-QHD-OLED-Gaming-Monitor",
      isavailable : true,
    },
    {
      name: "XINJI PX1 100 ANSI Lumens LCD Portable Projector With Android OS",
      price: "17,000",
      discount: "20,000",
      img: "Featchered-product11.webp",
      slug: "XINJI-PX1-100-ANSI-Lumens-LCD-Portable-Projector-With-Android-OS",
      isavailable : true,
    },
    {
      name: " Lenovo IdeaPad Flex 5 14ABR8 Ryzen 5 5625U 14 WUXZA Touch Laptop",
      price: "85,000",
      discount: "",
      img: "Featchered-product12.webp",
      slug: "Lenovo-IdeaPad-Flex-5-14ABR8-Ryzen-5-5625U-14-WUXZA-Touch-Laptop",
      isavailable : true,
    },
    {
      name: "MSI Prestige 13 AI+ Ukiyoe Edition A2VMG Core Ultra 9 288V 13.3 2.8K OLED Laptop  ",
      price: "325,000",
      discount: "",
      img: "Featchered-product13.webp",
      slug: "MSI-Prestige-13-AI+-Ukiyoe-Edition-A2VMG-Core-Ultra-9-288V-13.3-2.8K-OLED-Laptop",
      isavailable : true,
    },
    {
      name: "Asus NUC 13 Pro Core i3 13th Gen Portable Mini Pc  ",
      price: "42,000",
      discount: "46,500",
      img: "Featchered-product14.webp",
      slug: "Asus-NUC-13-Pro-Core-i3-13th-Gen-Portable-Mini-Pc",
      isavailable : true,
    },
    {
      name: "Dell PowerEdge T160 Tower Server  ",
      price: "260,000",
      discount: "",
      img: "Featchered-product15.webp",
      slug: "Dell-PowerEdge-T160-Tower-Server",
      isavailable : true,
    },
    {
      name: "Samsung 65DU7700 65 Inch Crystal 4K UHD Smart TV  ",
      price: "94,000",
      discount: "139,900",
      img: "Featchered-product16.webp",
      slug: "Samsung-65DU7700-65-Inch-Crystal-4K-UHD-Smart-TV",
      isavailable : true,
    },
    {
      name: "DJI Air 3S Fly More Combo With DJI RC 2 Remote Controller ",
      price: "155,000",
      discount: "170,000",
      img: "Featchered-product17.webp",
      slug: "DJI-Air-3S-Fly-More-Combo-With-DJI-RC-2-Remote-Controller",
      isavailable : true,
    },
    {
      name: " Black Shark S3  ",
      price: "5,790",
      discount: "5,999",
      img: "Featchered-product18.webp",
      slug: "Black-Shark-S3",
      isavailable : true,
    },
    {
      name: "XINJI Stone Mini True Wireless Earbuds   ",
      price: "950",
      discount: "1,299",
      img: "Featchered-product19.webp",
      slug: "XINJI-Stone-Mini-True-Wireless-Earbuds",
      isavailable : true,
    },
    {
      name: "Sony PlayStation 5 Slim Gaming Console",
      price: "69,900",
      discount: "",
      img: "Featchered-product20.webp",
      slug: "Sony-PlayStation-5-Slim-Gaming-Console",
      isavailable : true,
    },
  ];
  const matchedPost = cart.find((item) => item.slug === id);
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
                <li> Model : <span className=" text-[blue]">{matchedPost.name}</span></li>
              <li>Antenna: Electronic Phased Array</li>
              <li>Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5</li>
              <li>Coverage: Up to 112m² (1,200 ft² ), Connect up to 128 Devices</li>
              <li className="">Ethernet Ports: 1x Latching Ethernet LAN port with Starlink Plug</li>
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
