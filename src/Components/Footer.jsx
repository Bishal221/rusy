import React, { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.299328874858!2d85.33162659999999!3d23.3773863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15957798bbf%3A0xbbba9911fc09b859!2sRUSY%20%C3%A0%20Laurent%3ARUSSIAN-THAI%20Best%20spa%20in%20RANCHI!5e0!3m2!1sen!2sin!4v1713291675437!5m2!1sen!2sin"
  );

  const categories = [
    {
      name: "Ranchi",
      subCategories: ["Nucleus Mall Ranchi", "Hotel Yuvraj Palace Doranda"],
    },
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Reset subCategory when category changes
    setSubCategory("");
  };

  // Event handler for subCategory selection
  const handleSubCategoryChange = (e) => {
    const selectedSubCategory = e.target.value;
    setSubCategory(selectedSubCategory);

    // Replace this logic with your actual map links for each subcategory
    // Example:
    const mapLinks = {
      "Nucleus Mall Ranchi":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.299328874858!2d85.33162659999999!3d23.3773863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15957798bbf%3A0xbbba9911fc09b859!2sRUSY%20%C3%A0%20Laurent%3ARUSSIAN-THAI%20Best%20spa%20in%20RANCHI!5e0!3m2!1sen!2sin!4v1713291675437!5m2!1sen!2sin",
      "Hotel Yuvraj Palace Doranda":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1718219956992!2d85.323527!3d23.345788799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1ae5e9451f1%3A0x438b6ed868351d9!2sHotel%20yuvraj%20palace!5e0!3m2!1sen!2sin!4v1713291757740!5m2!1sen!2sin",
    };
    setMapSrc(mapLinks[selectedSubCategory]);
  };

  // const PhoneButton = ({ phoneNumber, text }) => {
  //   const [isHovered, setIsHovered] = useState(false);
  //   const [isClicked, setIsClicked] = useState(false);

  //   const handleButtonClick = () => {
  //     setIsClicked(!isClicked);
  //   };

  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };

  //   return (

  //   );
  // };

  return (
    <>
      <section className="flex justify-center items-center pt-20 pb-10 gap-y-10 px-4">
        <div className="w-full mt-10 flex md:flex-row flex-col justify-center max-w-[1500px] gap-x-5 gap-y-5">
          <div className=" w-full md:w-1/2 order-2 md:order-1">
            <p className="text-sm golden text-center font-semibold tracking-wider">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <div className="mt-6 mx-auto py-2 px-5 rounded-full flex items-center justify-center bg_golden text-white max-w-[400px] w-full mb-8">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                className="bg-transparent w-full px-3 outline-none border-none placeholder:text-white"
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
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="/contact-us"
                >
                  Contact Us
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="/about-us"
                >
                  About Us
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="/services"
                >
                  Services
                </a>
                <a
                  className="text-white hover:golden transition-all duration-300 font-medium uppercase"
                  href="/franchise"
                >
                  Franchise
                </a>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="flex gap-x-4">
                  <div className="flex gap-x-4">
                    <button className="flex gap-x-2 relative group transition-all duration-300">
                      <span className="text-white">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <a href="tel:8877177776" className="golden font-bold text-[1.1rem]">
                      8877177776
                      </a>
                    </button>
                  </div>
                  <div className="flex gap-x-4">
                    <button className="flex gap-x-2 relative group transition-all duration-300">
                      <span className="text-white">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <a href="tel:8877003302" className="golden font-bold text-[1.1rem]">
                      8877003302
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-x-5">
                <a
                  className="bg-white flex justify-center items-center text-xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="https://facebook.com/"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="https://youtube.com/@baylendelouis?si=ftaMeV2qlxT4l7V5"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="https://www.instagram.com/rusyspa?igsh=MXR3NG9lcWJudGVsZg=="
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="http://linkedIn.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  className="bg-white flex justify-center items-center text-xl golden hover:text-white hover:bg_golden transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                  href="https://x.com/RusySpa?t=qyzNfGZc_NT6vZGaBmxvYA&s=09"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
              <div className="flex  items-center gap-x-5">
                <p className="text-white hover:golden transition-all duration-300 font-medium uppercase">
                  Copyright © {year}.{" "}
                  <span className="uppercase">Western lifestyle ventures</span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center w-full md:w-1/2 order-1 md:order-2 xl:max-w-[700px] xl:w-full gap-x-6 xl:flex-row flex-col gap-y-5">
            <div className="w-full lg:w-[40%]">
              <h2 className="golden text-2xl font-bold uppercase">
                our location
              </h2>
              <div className="mt-6 flex flex-col gap-y-5">
                <div className="">
                  <label
                    htmlFor="districts"
                    className="block mb-2 text-sm font-medium golden"
                  >
                    Select Location
                  </label>
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    id="districts"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#171717] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled value="">
                      Select Location
                    </option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                {category && (
                  <div className="">
                    <label className="block mb-2 text-sm font-medium golden">
                      Select Branch
                    </label>
                    <select
                      value={subCategory}
                      onChange={handleSubCategoryChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#171717] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled value="">
                        Select Outlet
                      </option>
                      {categories
                        .find((cat) => cat.name === category)
                        .subCategories.map((subCat, index) => (
                          <option key={index} value={subCat}>
                            {subCat}
                          </option>
                        ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
            <div className="border w-full h-full lg:w-[60%]">
              <iframe
                className="w-full h-full border-none outline-none"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Footer;
