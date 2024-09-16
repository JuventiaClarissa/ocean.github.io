import React from "react";
import { Card } from "@material-tailwind/react";
import botol from "../assets/botol600.png";
import galon from "../assets/galon.png";

export function Section3() {
  return (
    <Card className="my-14 bg-transparent" id="ourProduct">
      <div className="text-white text-4xl text-center font-semibold">Produk Kami</div>
      <div className="flex flex-col lg:flex-row mx-10 mt-10 justify-around gap-6 items-center">
        <div className="lg:w-1/2 w-full rounded-[30px] p-10 bg-white flex-col items-center justify-around max-w-max">
          <img src={botol} alt="Ocean 600ml" className="w-80 mb-4" />
          <div className="text-center">
            <b>O2cean Botol 600 ml</b>
          </div>
        </div>
        <div className="lg:w-1/2 w-full rounded-[30px] p-10 bg-white flex-col items-center justify-around max-w-max">
          <img src={galon} alt="Ocean galon 19L" className="w-80 mb-7" />
          <div className="text-center mt-4">
            <b>O2cean Galon 19L</b>
          </div>
        </div>
      </div>
    </Card>
  );
}
