import React from "react";
import background from "../assets/bg-3.jpg"
import logo from "../assets/Logo.png"

export default function ContactUs (){
    return(
        <div>
            <div className="relative">
                <img src={background} alt="contact us background" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <b className="text-white lg:text-6xl text-2xl">CONTACT US</b>
                </div>
            </div>
            <div className="bg-white flex flex-col lg:flex-row md:flex-row lg:py-40 md:py-20 py-10">
                <div className="lg:w-1/2 md:w-1/2 justify-center flex pb-8">
                    <img src={logo} alt="Ocean" className="lg:w-80 md:w-60 w-40"/>
                </div>
                <div className="lg:w-1/2 md:w-1/2 text-start self-center text-stone-600 pe-10"> 
                    <div className="border-b-2 border-stone-600 font-bold text-2xl mb-2 pb-2"><h1>PT. Ocean</h1></div>
                    <span>JL. Pluit Karang Manis No. 74, Jakarta</span> <br />
                    <span>No Telpon</span>
                    <br /><br />
                    <span>Email: Ocean@gmail.com</span>
                </div>
            </div>
        </div>

    );
}