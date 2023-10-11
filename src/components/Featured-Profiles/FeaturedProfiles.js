import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { profiles } from "./FeaturedProfileData";

const FeaturedProfile = () => {
  return (
    <>
        <div className="h-[829px] flex flex-col items-center justify-center bg-[#fafaff] featured-section">
            <div className="text-[40px] text-secondary text-[#23263b] font-semibold mb-8">
                Featured profiles
            </div>
            <div className="text-[18px] w-[30%] text-center mb-12">
                Aenean at ligula massa. Donec ipsum elit, placenta sed duierrut dapibus semper turpin Fusce nec premium nuns.
            </div>
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className="m-8">
        {profiles.map((profile, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center flex-col w-[297px] h-[442.95px] text-secondary group">
              <div className="flex justify-center items-center flex-col gap-2 hover:bg-white group-hover:rounded-b-[40px] group-hover:shadow-lg transition">
                <div className="h-[334.93px] w-[297px]">
                  <Image
                    className="rounded-[40px] group-hover:rounded-b-none transition"
                    width={100}
                    height={100}
                    src={profile.profilePictureUrl}
                    alt="prifle"
                  />
                </div>
                <div className="flex items-start justify-start text-start flex-col gap-2 p-4">
                    <div className="text-[#FA4A6F] text-[20px] font-semibold">
                        Profile Id: {profile.profileId}
                    </div>
                    <div className="text-[16px]"> 
                        {profile.address}
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
    </>
    
  );
};

export default FeaturedProfile;