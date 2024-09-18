"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-8 my-16 bg-gray-100">
        <div className="w-full lg:w-1/2 xl:w-[60%]">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="ctm_slider"
          >
            <SwiperSlide>
              <Image
                height={1000}
                width={1000}
                src={"/assets/images/1.png"}
                className="object-cover w-full h-[600px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={1000}
                width={1000}
                src={"/assets/images/2.png"}
                className="object-cover w-full h-[600px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={500}
                width={500}
                src={"/assets/images/3.png"}
                className="object-cover w-full h-[600px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={500}
                width={500}
                src={"/assets/images/4.png"}
                className="object-cover w-full h-[600px]"
                alt="img"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[calc(50%_-_32px)] xl:w-[calc(40%_-_32px)] py-8 px-2 md:px-8">
          <h3 className="text-[#485541] text-xl  sm:text-3xl md:text-4xl px-2 font-semibold capitalize text-center mx-auto ">
            "Luxury Living Redefined at Damac Sun City"
          </h3>
          <p className="mt-4">
            Damac Sun City at Dubailand offers luxurious 4 and 5-bedroom
            townhouses, blending modern design with nature-inspired aesthetics,
            creating a serene, private oasis that fosters connection with nature
            and modern conveniences.
          </p>
          <ul>
            <li>
              <b> Property Type: </b> Townhouse
            </li>
            <li>
              <b> Down Payment:</b> 20%
            </li>
            <li>
              <b> Unit type:</b> 4 & 5 Bedroom
            </li>
            <li>
              <b> Payment Plan:</b> 75/25 - Launch P.P
            </li>
            <li>
              <b> Size:</b> 2,319 to 3,324 Sq Ft.
            </li>
            <li>
              <b> Handover: </b> Mar - 2028
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider;
