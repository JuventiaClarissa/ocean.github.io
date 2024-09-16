import React from "react";
import { Card } from "@material-tailwind/react";
import kontaminasi from "../assets/kontaminasi.png";
import alami from "../assets/alami.png";
import segar from "../assets/segar.png";

export function Section2() {
  return (
    <Card id="section2" className="bg-transparent">
      <div className="text-white text-center leading-[3rem]">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-semibold hr-line  lg:my-20 md:mt-20 md:mb-6 lg:py-0 md:py-0 pt-16 ">Manfaat Air Mineral Reverse Osmosis</h2>
      </div>
      <div className="lg:m-0 mt-10">
        <div className="rounded-l-none flex bg-[#001DD8] lg:p-5 md:p-5 md:mr-20 rounded-[60px] justify-end mb-10  lg:me-[20rem] py-2">
          <div className="text-white w-[35rem] lg:mr-20 md:mr-10 lg:p-0 md:p-0 pl-4">
            <b className="lg:text-xl md:text-xl text-lg">Menghilangkan Kontaminan:</b><br />
            <span className="lg:text-base md:text-base text-sm">Teknologi RO kami mampu menghilangkan hingga 99% kontaminan seperti logam berat, bahan kimia, dan bakteri.</span>
          </div>
          <img src={kontaminasi} alt="kontaminasi" className="lg:w-20 md:w-20 w-16 h-max self-center" />
        </div>
        <div className="rounded-r-none flex bg-[#D2C33F] lg:p-5 md:p-5 md:ml-20 rounded-[60px] justify-start mb-10  lg:ms-[20rem]  py-2">
          <img src={alami} alt="alami" className="lg:w-24 md:w-24 w-20 lg:mx-3 md:mx-3 h-max self-center" />
          <div className="text-white w-[35rem] lg:mr-10 md:mr-10 pr-4">
            <b className="lg:text-xl md:text-xl  text-lg">Mineral Alami yang Seimbang:</b><br />
            <span className="lg:text-base md:text-base text-sm">Kami menjaga keseimbangan mineral alami yang dibutuhkan tubuh, memastikan Anda mendapatkan manfaat maksimal dari setiap tegukan.</span>
          </div>
        </div>
        <div className="rounded-l-none flex bg-[#001DD8] lg:p-5 md:p-5 md:mr-20 rounded-[60px] justify-end  lg:me-[20rem]  py-2">
          <div className="text-white w-[35rem] lg:mr-12 md:mr-10 lg:p-0 md:p-0 pl-4">
            <b className="lg:text-xl md:text-xl text-lg">Rasa Lebih Segar dan Murni:</b><br />
            <span className="lg:text-base md:text-base text-sm">Proses penyaringan kami memastikan air yang dihasilkan memiliki rasa yang lebih segar dan murni.</span>
          </div>
          <img src={segar} alt="segar" className="lg:w-20 md:w-20 w-16 mx-4 h-max self-center" />
        </div>
      </div>
    </Card>
  );
}
