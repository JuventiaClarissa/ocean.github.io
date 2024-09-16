import React from "react";
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";
import logoImg from "../assets/Logo.png";
import { Link, useLocation } from 'react-router-dom';

export function NavbarHeader() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  // Manage navbar background and window resize event
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false); // Close nav on resize if screen is large
      }
    };

    window.addEventListener("resize", handleResize);

    const navbarElement = document.getElementById("navbar");
    if (openNav) {
      navbarElement.classList.add("bg-white"); // Add background when open
      navbarElement.classList.remove("bg-transparent"); // Remove transparent when open
    } else {
      navbarElement.classList.add("bg-transparent"); // Add transparent when closed
      navbarElement.classList.remove("bg-white"); // Remove white when closed
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [openNav]);

  const handleScrollTo = (id) => {
    if (location.pathname === "/") {
      window.history.pushState(null, null, id);
      const element = document.querySelector(id);
      console.log("element handleScrollTo",element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/${id}`;
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[#016EC9] font-semibold"
      >
        <Link to="/" className="flex items-center">
          HOME
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[#016EC9] font-semibold"
      >
        <a href="#ourProduct" className="flex items-center" onClick={() => handleScrollTo('#ourProduct')}>
          OUR PRODUCT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[#016EC9] font-semibold"
      >
        <a href="#about" className="flex items-center" onClick={() => handleScrollTo('#about')}>
          ABOUT US
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[#016EC9] font-semibold"
      >
        <Link to="/contact-us" className="flex items-center">
          CONTACT US
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar 
        className={`sticky top-0 z-30 h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-3 fixed transition-all duration-700 ease-in-out transform ${openNav ? 'bg-white' : 'bg-transparent'}`} 
        id="navbar"
      >
        <div className="flex items-center justify-between text-blue-gray-900 lg:px-24">
          <div className="flex">
            <img src={logoImg} alt="Ocean" className="lg:w-32 md:w-32 w-20 h-15" />
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="pe-10 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse 
          className={`lg:hidden md:hidden transition-all duration-700 ease-in-out transform ${openNav ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'}`} 
          open={openNav}
        >
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}
