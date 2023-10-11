import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { loremMessage, profiles } from "./TestimonialData";

const Testimonial = () => {
  return (
    <>
        <div className="h-[90vh] flex flex-col items-center justify-center bg-[#fbfafe]">
            <div className="text-4xl text-secondary text-[#23263b] font-semibold">
                What our members say
            </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={150}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {profiles.map((profile, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center flex-col gap-4 #23263b">
              <div className="text-[#fb4a6e] flex gap-1">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="font-medium text-secondary text-xl">
                {loremMessage}
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="h-10 w-10">
                  <Image
                    className="rounded-full"
                    width={100}
                    height={100}
                    src={profile.profilePictureUrl}
                    alt="prifle"
                  />
                </div>
                {profile.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
    
  );
};

export default Testimonial;
