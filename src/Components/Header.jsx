import React, { useEffect, useRef, useState } from "react";

const Header = () => {
    const [menuActive, setMenuactive] = useState(false);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const scrollCallback = () => {
          const scrolledFromTop = window.scrollY;
          setShown(() => scrolledFromTop > 1000);
        };
    
        window.addEventListener("scroll", scrollCallback);
    
        scrollCallback();
    
        // clean-up function
        return () => {
          window.removeEventListener("scroll", scrollCallback);
        };
      }, []);
    
      const ScrollToTopButton = () => {
        const handleScrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        };
    
        return (
          <button
            onClick={handleScrollToTop}
            aria-label="scroll to top"
            className={`${shown ? "scale-100" : "scale-0"
              } w-12 h-12 bg_golden text-white z-50 transition-all duration-500 flex fixed right-10 bottom-10 bg-primary rounded-full shadow-lg shadow-gray-900 justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        );
      };

      const handleMenutoggle = () => {
        setMenuactive(!menuActive);
      };

  return (
    <>
    <ScrollToTopButton />
    <nav className="absolute w-full z-40 py-4 px-5">
          <div className="relative flex flex-wrap items-center justify-between">
            <a
              href="#"
              className="max-w-32 md:max-w-64 text-[rgba(0,0,0,0.9)] inline-block py-[.3125rem] mr-4 text-lg "
            >
              <img src="/Res/logo2.png" alt="" />
            </a>
            <div className="flex gap-x-2 items-center justify-between">
              <div>
                <a
                  href="#"
                  className="bg_golden font-semibold uppercase text-white text-xs block tracking-[0.9px] px-3 md:px-4 pt-2 pb-2 rounded-2xl"
                >
                  Book Appointment
                </a>
              </div>
              <button
                onClick={handleMenutoggle}
                className="bg_golden text-white px-3 py-1"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
        <aside
          className={`fixed bg-black h-screen max-w-72 w-full top-0 ${menuActive ? "right-0" : "-right-96"
            } z-50 transition-right duration-300`}
        >
          <div className=" w-full h-full relative flex flex-col justify-center">
            <button
              onClick={handleMenutoggle}
              className="bg_golden text-white px-4 py-2 absolute top-0 -left-[45px]"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className=" flex justify-center flex-col px-6 gap-y-3 font-playfair">
              <a
                className="block px-3 py-2 text-2xl bg_golden  hover:text-white rounded-lg font-semibold"
                href="/"
              >
                Home
              </a>
              <a
                className="block px-3 py-2 text-2xl bg_golden  hover:text-white rounded-lg font-semibold"
                href="/about-us"
              >
                About Us
              </a>
              <a
                className="block px-3 py-2 text-2xl bg_golden  hover:text-white rounded-lg font-semibold"
                href="/services"
              >
                Services
              </a>
              <a
                className="block px-3 py-2 text-2xl bg_golden  hover:text-white rounded-lg font-semibold"
                href="/contact-us"
              >
                Contact Us
              </a>
              <a
                className="block px-3 py-2 text-2xl bg_golden  hover:text-white rounded-lg font-semibold"
                href="#"
              >
                Spa
              </a>
              <a
                className="block px-3 py-2 text-2xl bg_golden  hover:text-white rounded-lg font-semibold"
                href="/franchise"
              >
                Franchise
              </a>
            </div>
          </div>
        </aside>
    </>
  )
}

export default Header