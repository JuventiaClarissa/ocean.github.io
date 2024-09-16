// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavbarHeader } from './components/NavbarHeader';
import {Section1} from "./components/section1"; // Adjust the path as needed
import {Section2} from "./components/Section2"; // Adjust the path as needed
import {Section3} from "./components/Section3"; // Adjust the path as needed
import ContactUs from "./components/ContactUs"; // Adjust the path as needed
import logoImg from "./assets/Logo.png"; // Adjust the path as needed

function App() {
  return (
    <div className="overflow-auto bg-[#1C4046] bg-opacity-80">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={
          <>
            <Section1 />
            <Section2 />
            <Section3 />
          </>
        } />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <footer className="bg-[#342490]">
        <div className="flex flex-col lg:flex-row text-white px-6 lg:px-24 py-10 gap-10">
          <div className="lg:w-2/4">
            <b className="text-3xl block mb-4">Tentang Ocean</b>
            <img src={logoImg} alt="Ocean" className="w-32 mb-4" />
            <p>
              O2cean berkomitmen untuk menyediakan air mineral berkualitas tinggi
              dengan menggunakan teknologi Reverse Osmosis. Kami percaya bahwa air
              bersih dan sehat adalah hak setiap orang.
            </p>
          </div>
          <div className="lg:w-1/4">
            <b className="block mb-4">Hubungi Kami</b>
            <div>
              <p>JL. Pluit Karang Manis No. 74, Jakarta</p>
              <p>(021) 123-4567</p> <br />
              <p>Email: info@o2cean.com</p>
            </div>
          </div>
          <div className="lg:w-1/4">
            <b className="block mb-4">Navigasi</b>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">Our Product</a>
              </li>
              <li>
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-white opacity-50" />
        <div className="text-white text-center py-4">
          <span>© 2024 Ocean. Semua Hak Dilindungi.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
