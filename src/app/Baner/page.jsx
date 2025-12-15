"use client";

import Baner2 from "../Baner2/page";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
  };

  const banersliders = [
    { img: "/baner1.webp" },
    { img: "/baner2.webp" },
    { img: "/baner3.webp" },
    { img: "/baner4.webp" },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4  mt-[40px]">

        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {banersliders.map((item, i) => (
              <div key={i}>
                <div className="relative w-full h-[450px]">
                  <Image
                    src={item.img}
                    fill
                    className="object-cover rounded-lg"
                    alt="Banner"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Baner2 />
      </div>
    </div>
  );
};

export default page;
