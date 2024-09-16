import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import logoImg from "../assets/Logo.png";
import background1 from "../assets/bg-1.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function Section1() {
  const advantageSlider = (
    <Swiper
      spaceBetween={60}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false, // Optional: Allows autoplay to continue after interaction
      }}
      speed={1000}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className="block lg:hidden"
    >
      <SwiperSlide>
        <div className="text-center items-center h-[370px] py-10">
          <div className="p-1 font-bold text-white text-2xl mb-4">
            Kualitas Air Terbaik
          </div>
          <div className="text-white w-full mx-auto px-6 pt-2">
            Ocean menggunakan teknologi Reverse Osmosis (RO) terkini untuk menghadirkan air mineral berkualitas tinggi yang murni dan segar.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-center items-center h-[370px] py-10">
          <div className="p-1 font-bold text-white text-2xl mb-4">
            Kesegaran yang Terjaga
          </div>
          <div className="text-white w-full mx-auto px-6 pt-2">
            Air mineral Ocean tidak hanya bersih, tetapi juga memiliki rasa yang segar dan murni.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-center items-center h-[370px] py-10">
          <div className="p-1 font-bold text-white text-2xl mb-4">
            Aman untuk Keluarga Anda
          </div>
          <div className="text-white w-full mx-auto px-6 pt-2">
            Kami peduli dengan kesehatan Anda dan keluarga. Oleh karena itu, air Ocean diproses dengan standar kebersihan tertinggi.
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );

  const advantage = (
    <div className="mt-2 mb-4 flex justify-around flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-center">
      <div>
        <div className="flex items-center justify-center p-1 font-bold text-white text-2xl lg:mb-4">
          Kualitas Air Terbaik
        </div>
        <div className="text-white lg:w-[20rem]">
          Ocean menggunakan teknologi Reverse Osmosis (RO) terkini untuk menghadirkan air mineral berkualitas tinggi yang murni dan segar.
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center p-1 font-bold text-white text-2xl lg:mb-6">
          Kesegaran yang Terjaga
        </div>
        <div className="text-white lg:w-[20rem]">
          Air mineral Ocean tidak hanya bersih, tetapi juga memiliki rasa yang segar dan murni.
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center p-1 font-bold text-white text-2xl lg:mb-4">
          Aman untuk Keluarga Anda
        </div>
        <div className="text-white lg:w-[20rem]">
          Kami peduli dengan kesehatan Anda dan keluarga. Oleh karena itu, air Ocean diproses dengan standar kebersihan tertinggi.
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Card className="relative top-0 bg-cover bg-center backdrop-blur-lg lg:h-[50rem] md:h-[40rem] h-[30rem]" style={{ backgroundImage: `url(${background1})` }}>
        <div className="flex justify-around lg:h-[35rem] md:h-[30rem] h-[25rem] items-center">
          <img src={logoImg} alt="Ocean" className="lg:w-60 w-32 ml-10" />
          <img src={logoImg} alt="Ocean" className="lg:w-60 w-32" />
        </div>
      </Card>
      <Card className="lg:mx-16 md:mx-16 lg:p-12 bg-[#001DD8] bg-opacity-40 rounded-lg lg:p-12 md:p-12 p-10 z-20 relative backdrop-blur-sm lg:-mt-[17rem] md:-mt-[12rem] -mt-[8rem]">
        <CardBody className="lg:mx-24 rounded-lg">
          <Typography as="div" variant="h1" color="white" className="p-1 lg:text-4xl md:text-4xl text-white font-bold text-center text-2xl">
            Kenapa Memilih Ocean ?
          </Typography>
          <div className="flex justify-center my-4">
            <img src={logoImg} alt="Ocean" className="w-60" />
          </div>
          <div className="hidden lg:block md:block">{advantage}</div>
          <div className="block lg:hidden md:hidden">{advantageSlider}</div>
        </CardBody>
      </Card>
    </div>
  );
}
