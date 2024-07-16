import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const [my_swiper, set_my_swiper] = useState({});
  const [currentSlide, setCurrentslide] = useState(1); // Correctly initialize as a number
  const [totalslide, settotalSlide] = useState(null);
  const [toggleExplore, setToggleexplore] = useState(false);



  useEffect(() => {
    if (my_swiper && my_swiper.slides) {
      // Check if my_swiper and my_swiper.slides exist
      settotalSlide(my_swiper.slides.length);
    }
  }, [my_swiper]);

  const nextSlide = () => {
    my_swiper.slideNext();
    setCurrentslide((my_swiper.activeIndex + 1).toString()); // Use toString method correctly
  };
  const preSlide = () => {
    my_swiper.slidePrev();
    setCurrentslide((my_swiper.activeIndex + 1).toString()); // Use toString method correctly
  };

  const handleToggleExplore = () => {
    setToggleexplore(!toggleExplore);
  };

 

  return (
    <>
      
      <section className="relative overflow-hidden bg-black">
        <Header />

        <header className="lg:w-screen w-full h-[500px] md:h-[700px] lg:h-screen relative flex justify-center items-center z-10 px-4 overflow-hidden">
          <video
            muted
            src="/Res/Main-Banner.mp4"
            className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
            autoPlay={true}
            loop="loop"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)] -z-[9]"></div>
          <div className="">
            <h1 className="lg:text-[18rem] md:text-[11rem] text-9xl golden font-playfair font-bold italic sh">
              SPA
            </h1> 
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] md:text-base text-sm flex flex-col gap-y-1 md:gap-y-2 max-w-[1000px] w-full">
              <p className="text-white tracking-widest uppercase text-center">
                THE ONE AND ONLY DESTINATION FOR
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-center lg:text-4xl font-bold text-white tracking-widest">
                <span className="golden">MASSAGE THERAPY </span> AND{" "}
                <span className="golden">FACIAL TREAMENTS</span>
              </h3>
              <h2 className="font-light text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest text-white">
                WITH Euro Beauty Spa!
              </h2>
            </div>
          </div>
        </header>

        <section className="py-28 flex justify-center items-center px-4 flex-col">
          <div className="relative flex flex-col justify-center items-center py-10 gap-y-1 md:gap-2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-white"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-white"></div>
            <p className="text-white tracking-widest uppercase text-center">
              THE ONE AND ONLY DESTINATION FOR
            </p>
            <h3 className="text-lg md:text-xl text-center text-white lg:text-3xl font-semibold tracking-widest">
               <span className="golden">MASSAGE</span> & <span className="golden">FACIAL</span> 
            </h3>
            <h2 className="font-light text-center text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest text-white">
              BY Euro Beauty Spa
            </h2>
          </div>
          <div className="mt-10 max-w-[1100px] flex justify-center items-center md:flex-row flex-col">
            <div className="max-w-[900px]">
              <img src="/Res/intro-sec.png" alt="" />
            </div>
            <div className="w-full h-[50%] ml-[10px] md:w-auto min-h-[440px]">
              <h2 className="stock-heading relative left-0 md:-left-16 lg:text-[4rem] text-[3rem]">
                Introduction
              </h2>
              <p className="text-white lg:text-base text-sm max-w-[800px] mb-5">
                Rusy & Laurent epitomizes luxury and relaxation, offering an extensive array of indulgent spa services designed to rejuvenate both body and mind. Nestled in a serene haven, it provides an escape from the hustle and bustle of everyday life. Clients are welcomed into a world of opulence, where every detail is meticulously curated to ensure an unparalleled experience.
              </p>
              {toggleExplore && (
                <p className="text-white lg:text-base text-sm max-w-[600px] mb-5">
                  Whether seeking a moment of solitude or a luxurious pampering session with loved ones, guests are enveloped in a cocoon of luxury from the moment they step through the door. At Rusy & Laurent, relaxation reaches new heights, leaving guests feeling refreshed, renewed, and utterly indulged.

                </p>
              )}
              <button
                onClick={handleToggleExplore}
                className="bg_golden text-lg px-6 py-4 text-white w-fit flex justify-center items-center gap-x-3"
                href="#"
              >
                Explore Now{" "}
                <span className={`text-sm ${toggleExplore ? "rotate-90" : ""}`}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center py-16 gap-y-10 px-4">
          <h2 className="text-5xl lg:text-7xl font-semibold golden lg:leading-[1.3]">
            Gallery
          </h2>
          <div className="max-w-[1200px] max-h-[700px] h-full w-full overflow-hidden">
            <Swiper
              className="mySwiper max-h-[650px] h-full"
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay]}
              onInit={(ev) => {
                set_my_swiper(ev);
              }}
            >
              <SwiperSlide className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/Res/BCBFDEC0-8F6B-433F-BBD3-A05E200210F1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/Res/1708259140142.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/Res/1708259199357.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/Res/1708259312324.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/Res/1708259367867.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center items-center gap-x-6 py-5 text-white">
              <button className="golde text-2xl" onClick={preSlide}>
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>
              <p className="golden font-medium">
                {currentSlide} / {totalslide}
              </p>
              <button className="golde text-2xl" onClick={nextSlide}>
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center py-10 gap-y-10 px-4">
          <div className="container relative z-10">
            <div className="w-full lg:w-fit md:pl-5 pl-0">
              <h2 className="stock-heading sm:text-[4rem] text-[2.75rem] lg:text-left text-center w-full lg:w-fit absolute -z-10 sm:-top-[3rem] -top-[2rem] sm:-left-[.5rem]">
                Euro Beauty Spa
              </h2>
              <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-left text-center text-white font-bold">
                RUSSIAN-THAI-LUXURY SPA
              </h2>
              <p className="text-center max-w-[450px] mx-auto text-white">
                Rusy & Laurent, a prestigious luxury spa renowned for its opulent ambiance and unparalleled service, captivates guests with indulgent treatments and serene atmospheres. From rejuvenating massages to lavish skincare rituals, every experience is meticulously crafted to pamper and revitalize, ensuring an unforgettable retreat into tranquility and wellness.
              </p>
            </div>
            <div className="flex justify-center items-center mt-20 relative flex-wrap"> 
              <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 animate-bounce_slow_reserse">
                <div className="w-full h-[400px] lg:h-[500px]">
                  <video
                    muted
                    src="/Res/MASSAGE_THERAPY.mp4"
                    className="w-full h-full object-cover object-center"
                    autoPlay={true}
                    loop="loop"
                  />
                </div>
                <div className="px-6">
                  <div className="border border-[#f9b615] border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5">
                    <h3 className="text-white text-2xl font-medium from-black">
                      MASSAGE THERAPY
                    </h3>
                    <p className="text-white">
                      Expert therapists employ various techniques to relieve tension, improve circulation, and promote relaxation, tailored to individual preferences for a truly rejuvenating experience.
                    </p>
                    <a
                      className="text-white bg_golden px-4 py-2 hover:bg-white hover:golde transition-all duration-300 w-fit font-semibold text-lg"
                      href="#"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 relative lg:-top-16 animate-bounce_slow">
                <div className="w-full h-[400px] lg:h-[500px]">
                  <video
                    muted
                    src="/Res/FACIAL_TREAMENTS.mp4"
                    className="w-full h-full object-cover object-center"
                    autoPlay={true}
                    loop="loop"
                  />
                </div>
                <div className="px-6">
                  <div className="border border-[#f9b615] border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5">
                    <h3 className="text-white text-2xl font-medium">
                      FACIAL TREAMENTS
                    </h3>
                    <p className="text-white">
                      Specialized skincare regimens cleanse, exfoliate, and nourish the skin, targeting specific concerns to enhance complexion and restore a youthful glow.
                    </p>
                    <a
                      className="text-white bg_golden px-4 py-2 hover:bg-white hover:golde transition-all duration-300 w-fit font-semibold text-lg"
                      href="#"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3  animate-bounce_slow_reserse">
                <div className="w-full h-[400px] lg:h-[500px]">
                  <video
                    muted
                    src="/Res/HYDROTHERAPY.mp4"
                    className="w-full h-full object-cover object-center"
                    autoPlay={true}
                    loop="loop"
                  />
                </div>
                <div className="px-6">
                  <div className="border border-[#f9b615] border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5">
                    <h3 className="text-white text-2xl font-medium">
                      HYDROTHERAPY
                    </h3>
                    <p className="text-white">
                      Hydrotherapy: Utilizing water's healing properties, hydrotherapy sessions encompass hot tubs, saunas, and steam rooms, fostering relaxation, detoxification.
                    </p>
                    <a
                      className="text-white bg_golden px-4 py-2 hover:bg-white hover:golde transition-all duration-300 w-fit font-semibold text-lg"
                      href="#"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:w-screen w-full h-[500px] md:h-[700px] lg:h-screen relative flex justify-center items-center z-10 px-4">
          <video
            muted
            src="/Res/Main-Banner.mp4"
            className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
            autoPlay={true}
            loop="loop"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] -z-[9]"></div>
          <div className="absolute -bottom-[4rem] md:left-[4rem]">
            <p className="max-w-[600px] text-[2rem] md:text-[3rem] lg:text-[5rem] text-white font-black text-center lg:leading-[5rem] md:leading-[3rem] leading-[2rem] w-full ">
              Discover Serenity, <br />
              Renew <br /> Your Spirit
            </p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[7rem] golden text-center font-bold lg:leading-[1] md:leading-[1.2] font-playfair leading-[1.5]">
              Euro Beauty Spa
            </h2>
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Home;
