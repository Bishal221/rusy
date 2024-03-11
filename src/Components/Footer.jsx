import React, { useState } from 'react'

const Footer = () => {
    
  const [year, setYear] = useState(new Date().getFullYear());
  const PhoneButton = ({ phoneNumber, text }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleButtonClick = () => {
      setIsClicked(!isClicked);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className="flex gap-x-4">
        <button
          className="flex gap-x-2 relative group transition-all duration-300"
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-white">
            <i className="fa-solid fa-phone"></i>
          </span>
          <p className="golden font-semibold text-[1.15rem]">{text}</p>
          {(isHovered || isClicked) && (
            <a
              href={`tel:${phoneNumber}`}
              className="absolute block transition-all duration-300 top-[105%] shadow-lg w-fit px-4 py-1 bg-[rgba(255,255,255)] rounded-md font-semibold  left-1/2 -translate-x-1/2"
            >
              {phoneNumber}
            </a>
          )}
        </button>
      </div>
    );
  };
  return (
    <section className="flex justify-center items-center pt-28 pb-10 gap-y-10 px-4">
          <div className=" w-full justify-center items-center flex-col flex">
            <p className="text-sm golden font-semibold tracking-wider">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <div className="mt-6 py-2 px-5 rounded-full flex items-center justify-center bg_golden text-white max-w-[400px] w-full mb-8">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                className="bg-transparent text-xl w-full px-3 outline-none border-none placeholder:text-white"
                type="email"
                placeholder="Enter your email id..."
              />
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
            <div className="flex items-center flex-col gap-y-8 sm:text-base text-sm text-center">
              <div className="flex items-center sm:gap-x-5 gap-x-3">
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="#"
                >
                  careers
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="#"
                >
                  contact us
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="#"
                >
                  privacy policy
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="#"
                >
                  terms & conditions
                </a>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="flex gap-x-4">
                  <PhoneButton phoneNumber="8877001122" text="Rusy A Laurent Spa" />
                  
                </div>
              </div>
              <div className="flex  items-center gap-x-5">
                <a
                  className="bg-white flex justify-center items-center text-3xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="#"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-3xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="#"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-3xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="#"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-3xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="#"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-3xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="#"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
              <div className="flex  items-center gap-x-5">
                <p className="text-white hover:golden transition-all duration-300 font-medium uppercase">
                  Copyright © {year}.{" "}
                  <span className="uppercase">
                  E.B.H.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Footer