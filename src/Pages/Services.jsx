import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Services = () => {
    return <>
        <section className="bg-black">
            <Header />
            <section className="pt-28 pb-8 px-6">
                <ul className="text-lg flex-wrap flex justify-center items-center list-disc gap-x-8 gap-y-3 max-w-[1500px] mx-auto font-normal">
                    <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section1">Massages Therapy</a></li>
                    <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section2">Facials & Skincare treatments</a></li>
                    <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section3">Body Treatments</a></li>
                    <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section4">Manicures</a></li>
                </ul>
            </section>
            <section id="section1" className="px-6 py-16">
                <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                    <div className="w-full md:w-1/2 relative z-10 md:pt-10">
                        <h2 className="stock-heading text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full lg:w-fit absolute -z-10 -top-[1.75rem] lg:-top-[1.75rem]">
                            Rusy A Laurent
                        </h2>
                        <h2 className="text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] text-white text-center md:text-left font-bold">
                            SERVICES
                        </h2>
                        <p className="text-white text-lg">Our customers are discerning in every aspect – and deservedly. <br /><br />

                        Indulge in pure relaxation with our spa services designed to rejuvenate your mind, body, and spirit. Unwind with our luxurious massages, tailored to your specific needs by our expert therapists. Renew your skin's radiance with our facials, utilizing premium skincare products for a glowing complexion.<br /><br />

                        Escape into tranquility with our soothing body treatments, including scrubs and wraps to exfoliate and nourish your skin. Experience ultimate bliss in our serene environment, where every detail is crafted to enhance your wellness journey. Treat yourself to a sanctuary of serenity and discover the transformative power of our spa services.</p>
                        <img className="xl:max-w-[500px] animate-pulse max-w-[300px] opacity-10 absolute hidden lg:block top-1/2 left-1/2 z-50" src="./Res/watermark-icon.png" alt="" />
                    </div>
                    <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                        <img className="" src="https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_1280.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="px-6 py-16">
                <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                    <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:right-4 before:border-white before:z-20">
                        <img className="" src="https://cdn.pixabay.com/photo/2015/02/26/18/31/foot-bath-650874_1280.jpg" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">01</p></div>
                        <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] golden leading-[1.1] text-center md:text-left font-bold uppercase">
                        MASSAGES THERAPY
                        </h2>
                        <p className="text-white text-lg">Our skilled therapists specialize in a variety of techniques, including Swedish, deep tissue, hot stone, and aromatherapy massages, tailored to your individual needs. Feel tension melt away as expert hands work to release muscle knots and promote deep relaxation.<br /><br />

                        Experience the healing power of touch as you immerse yourself in a tranquil environment designed to soothe the senses. Whether you seek relief from stress, pain, or simply desire a moment of pure indulgence, our massage therapy will leave you feeling refreshed, revitalized, and restored.</p>
                        <h2 className="stock-heading-white text-white text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full hidden lg:block lg:w-fit absolute -z-10 top-[74%] xl:top-1/2">
                            Rusy A Laurent
                        </h2>
                    </div>
                </div>
            </section>

            <section id="section2" className="px-6 py-16">
                <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                    <div className="w-full md:w-1/2 relative">
                        <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">02</p></div>
                        <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] golden leading-[1.1] text-center uppercase md:text-left font-bold">
                        FACIALS AND SKIN TREATMENTS
                        </h2>
                        <p className="text-white text-lg">Step into a realm of pampering where every treatment is tailored to unveil your skin's natural beauty. Our expert estheticians employ cutting-edge techniques and premium products to address your unique skincare needs, whether it's hydration, rejuvenation, or acne control.<br /><br />

                        Luxuriate in a tranquil environment as we cleanse, exfoliate, and nourish your skin, leaving you with a radiant and youthful complexion. From revitalizing facials to targeted skin treatments, embark on a journey of transformation and embrace the glow of confidence that comes from caring for your skin with utmost dedication.</p>
                            <h2 class="stock-heading-white  text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full lg:w-fit absolute lg:block hidden top-[78%] xl:top-1/2">Thai Luxary Spa</h2>
                        <img className="xl:max-w-[225px] max-w-[100px] opacity-60 animate-pulse absolute w-full hidden lg:block top-1/2 left-[35%] z-50" src="./Res/Baylen-b.png" alt="" />
                    </div>
                    <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                        <img className="" src="https://cdn.pixabay.com/photo/2017/06/25/20/06/massage-2441819_1280.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section id="section3" className="px-6 py-16">
                <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                    <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:right-4 before:border-white before:z-20">
                        <img className="object-cover w-full" src="https://cdn.pixabay.com/photo/2016/08/11/02/23/massage-therapy-1584711_1280.jpg" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">03</p></div>
                        <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] golden leading-[1.1] uppercase text-center md:text-left font-bold">
                        BODY TREATMENTS
                        </h2>
                        <p className="text-white text-lg">Surrender to bliss as our skilled therapists pamper you with indulgent scrubs and wraps, meticulously crafted to exfoliate, detoxify, and replenish your skin. Luxuriate in the healing properties of our premium products, carefully selected to nourish and hydrate, leaving your skin irresistibly soft and radiant.<br /><br />

                        Whether you seek deep relaxation, detoxification, or revitalization, our tailored treatments cater to your individual needs, restoring harmony to your body and soul. Escape the hustle and bustle of everyday life and immerse yourself in a sanctuary of serenity at Rusy A Laurent.</p>
                        <h2 className="stock-heading-white text-white text-[2.75rem] 2xl:text-[4rem] md:text-left text-center w-full lg:w-fit absolute -z-10 lg:block hidden top-[70%] 2xl:top-1/2">
                            Spa & Massage
                        </h2>
                        <a href="#" className="text-white lg:flex items-center justify-between max-w-[230px] pl-6 bg-[rgba(249,182,21,0.3)] border rounded-md text-xl border-[#f9b615] md:text-left text-center w-full absolute -z-10 hidden top-[80%] 2xl:top-[60%]">
                            <p>Book Now</p>
                            <span><i className="fa-solid fa-arrow-right-long py-4 px-6 bg-[#f9b4156b] text-base"></i></span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="section4" className="px-6 py-16">
                <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                    <div className="w-full md:w-1/2 relative">
                        <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">04</p></div>
                        <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] golden leading-[1.1] text-center uppercase md:text-left font-bold">
                        MANICURES AND PEDICURES
                        </h2>
                        <p className="text-white text-lg">Our skilled technicians meticulously tend to your hands and feet, shaping nails to perfection and nourishing the skin with luxurious treatments. Relax in our serene ambiance as we indulge you in a blissful soak, followed by gentle exfoliation and hydrating massage to revitalize tired hands and feet.<br /><br />

                        Choose from a spectrum of trendy colors or classic hues from our premium nail polish collection for a polished finish that reflects your style. Step into a world of luxury and emerge with impeccably groomed nails and a renewed sense of well-being.</p>
                            <h2 class="stock-heading-white  text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full lg:w-fit absolute lg:top-1/2">Rusy A Laurent</h2>
                    </div>
                    <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                        <img className="" src="https://cdn.pixabay.com/photo/2017/10/27/16/45/cosmeatria-2894865_1280.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className="px-6 py-16">
                <div className="container flex mx-auto">
                    <div>
                        <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">05</p></div>
                        <h2 className="text-[2.5rem] mb-5 lg:text-[3.5rem] golden leading-[1.1] text-center md:text-left font-black">
                        HYDROTHERAPHY
                        </h2>
                        <div className="relative z-10">
                            <img className="absolute top-[10%] w-[500px] left-0 -z-[1] min-h-[800px]" src="./Res/square1.png" alt="" />
                            <div className="pl-20 sm:pl-28 text-white z-10">
                                <h1 className="font-playfair text-white text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] font-semibold leading-[1.2]">Discover Our Array <br />
                                Of Spa Sessions<br />
                                Our Customer’s Desires.</h1>
                                <div className="flex sm:items-center gap-x-10 mt-10 sm:mt-20 flex-col sm:flex-row gap-y-5">
                                    <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                        <h1 className="font-bold text-lg golden uppercase">MASSAGE THERAPY</h1>
                                        <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                            <li>Swedish Massage</li>
                                            <li>Deep Tissue Massage</li>
                                            <li>Hot Stone Massage</li>
                                            <li>Aromatherapy Massage</li>
                                            <li>Thai Massage</li>
                                            <li>Prenatal Massage</li>
                                        </ul>
                                    </div>
                                    <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                        <h1 className="font-bold text-lg golden uppercase">FACIAL TREATMENTS</h1>
                                        <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                            <li>Classic Facial</li>
                                            <li>Deep Cleansing Facial</li>
                                            <li>Anti-Aging Facial</li>
                                            <li>Hydrating Facial</li>
                                            <li>Acne Treatment Facial</li>
                                            <li>Chemical Peel</li>
                                            <li>Oxygen Facial</li>
                                            <li>Gold Facial</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-10 mt-5 md:mt-20">
                                    <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                        <h1 className="font-bold text-lg golden uppercase">BODY TREATMENTS</h1>
                                        <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                            <li>Body Scrub</li>
                                            <li>Body Wrap</li>
                                            <li>Detoxifying Wrap</li>
                                            <li>Cellulite Treatment</li>
                                            <li>Exfoliating Back Treatment</li>
                                            <li>Mud Wrap</li>
                                            <li>Hydrating Body Cocoon</li>
                                            <li>Aromatherapy Body Wrap</li>
                                            <li>Herbal Compress Massage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[500px] lg:block hidden h-auto w-full relative">
                        <img className="rotate-90 object-contain absolute w-[600px] bottom-1/2 py-10 opacity-30 animate-right_left" src="./Res/logo2.png" alt="" />
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    </>;
};

export default Services;
