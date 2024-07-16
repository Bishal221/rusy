import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Franchise = () => {

    const indianStatesAndCities = [
        { state: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore'] },
        { state: 'Arunachal Pradesh', cities: ['Itanagar', 'Naharlagun', 'Tawang', 'Pasighat'] },
        { state: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat'] },
        { state: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur'] },
        { state: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba'] },
        { state: 'Goa', cities: ['Panaji', 'Vasco da Gama', 'Margao', 'Mapusa'] },
        { state: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'] },
        { state: 'Haryana', cities: ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala'] },
        { state: 'Himachal Pradesh', cities: ['Shimla', 'Mandi', 'Dharamshala', 'Solan'] },
        { state: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'] },
        { state: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore'] },
        { state: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur'] },
        { state: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior'] },
        { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'] },
        { state: 'Manipur', cities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'] },
        { state: 'Meghalaya', cities: ['Shillong', 'Tura', 'Nongpoh', 'Jowai'] },
        { state: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai'] },
        { state: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang'] },
        { state: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur'] },
        { state: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'] },
        { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'] },
        { state: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'] },
        { state: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'] },
        { state: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'] },
        { state: 'Tripura', cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Ambassa'] },
        { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi'] },
        { state: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani'] },
        { state: 'West Bengal', cities: ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur'] }
    ];

    // State to hold the selected state and city
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    // Function to handle state change
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        // Reset selected city when state changes
        setSelectedCity('');
    };

    // Function to handle city change
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };


    return (
        <>
            <section className="bg-black">
                <Header />
                <section className="pt-28 pb-8 px-6">
                    <ul className="text-lg flex-wrap flex justify-center items-center list-disc gap-x-10 gap-y-3 max-w-[1500px] mx-auto font-normal">
                        <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section1">Franchise Kit</a></li>
                        <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section2">Our Modules</a></li>
                        <li className="px-2 text-white golden-hover pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-[#f9b615] hover:border-b-2 transition-all duration-300"><a href="#section3">Enquire Now</a></li>
                    </ul>
                </section>
                <section id="section1" className="px-6 py-16">
                    <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                        <div className="w-full md:w-1/2 relative z-10 md:pt-10">
                            <h2 className="text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] golden text-center md:text-left font-bold">
                                FRANCHISE
                            </h2>
                            <p className="text-white text-lg">Our customers are discerning in every aspect – and deservedly. <br /><br />

                                We believe in providing the world-class salon experience to the people across India, hence we are partnering with our premium franchisee.</p>
                            <h2 className="text-[2.75rem] pt-10 sm:pl-10 lg:text-[2.5rem] 2xl:text-[4rem] text-white text-left font-black">
                                FRANCHISE <span className='font-light'>KIT</span>
                            </h2>
                            <a href='/Res/spa-franchaise.pdf' target='_blank' className='sm:pl-10 pt-3 flex gap-x-2'>
                                <div><i className="fa-solid text-3xl text-white fa-file-pdf"></i></div>
                                <div className='text-white'>
                                    <p>Euro Beauty Spa Kit</p>
                                    <p>for <span className='golden font-medium'>Download</span></p>
                                </div>
                            </a>
                            <img class="-rotate-90 object-contain absolute w-[450px] bottom-[15%] py-10 opacity-30 animate-right_left" src="./Res/logo2.png" alt="" />
                        </div>
                        <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                            <img className="" src="https://cdn.pixabay.com/photo/2018/09/19/11/02/woman-3688233_1280.jpg" alt="" />
                        </div>
                    </div>
                </section>

                <section id="section2" className="px-6 text-white py-16">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                Our Investment Plans
                            </h2>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'> SILVER </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Area (SQFT)- <br />
                                            <span className='font-semibold'>  0-250</span></li>
                                        <li>No. of SPA Rooms:<br />
                                            <span className='font-semibold'>1-2</span></li>
                                        <li>Franchise Cost - <br />
                                            <span className='font-semibold'>₹7,00,000/-
                                                (₹3.5L/SPA Room) </span></li>
                                        <li>Royalty -<br />
                                            <span className='font-semibold'>-₹70,000/-
                                                Month or 15% of
                                                Revenue whichever is
                                                higher </span></li>
                                        <li>Total Investment-<br />
                                            <span className='font-semibold'>₹12.75Lakhs
                                                +18%GST </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>02</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>GOLD</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Area (SQFT)- <br />
                                            <span className='font-semibold'>251-500</span></li>
                                        <li>No. of SPA Rooms:<br />
                                            <span className='font-semibold'> 3-4 </span></li>
                                        <li>Franchise Cost - <br />
                                            <span className='font-semibold'>₹12,00,000/-
                                                (₹3.0L/SPA Room)</span></li>
                                        <li>Royalty -<br />
                                            <span className='font-semibold'>₹1,20,000/-
                                                Month or 15% of
                                                Revenue whichever is
                                                higher</span></li>
                                        <li>Total Investment-<br />
                                            <span className='font-semibold'>₹25.00Lakhs
                                                +18%GST </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>DIAMOND </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Area (SQFT)-<br />
                                            <span className='font-semibold'>  501-1000</span></li>
                                        <li>No. of SPA Rooms: <br />
                                            <span className='font-semibold'>4-6</span></li>
                                        <li>Franchise Cost - <br />
                                            <span className='font-semibold'>₹16,50,000/-
                                                (₹2.75L/SPA Room)</span></li>
                                        <li>Royalty -<br />
                                            <span className='font-semibold'>Month or 15% of
                                                Revenue whichever is
                                                higher</span></li>
                                        <li>Total Investment- <br />
                                            <span className='font-semibold'>₹37.50Lakhs
                                                +18%GST </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>04</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>ROYALE 5-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Area (SQFT)-<br />
                                            <span className='font-semibold'>1001-2000 </span></li>
                                        <li>No. of SPA Rooms: <br />
                                            <span className='font-semibold'>7-12</span></li>
                                        <li>Franchise Cost - <br />
                                            <span className='font-semibold'>₹27,00,000/-
                                                (₹2.25L/SPA Room)</span></li>
                                        <li>Royalty - <br />
                                            <span className='font-semibold'>₹2,70,000/-
                                                Month or 15% of
                                                Revenue whichever is
                                                higher </span></li>
                                        <li>Total Investment- <br />
                                            <span className='font-semibold'>₹67.50Lakhs
                                                +18%GST </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>05</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LUXURY 7-STAR</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Area (SQFT)-<br />
                                            <span className='font-semibold'>2001-3000</span></li>
                                        <li>No. of SPA Rooms: <br />
                                            <span className='font-semibold'>13-20</span></li>
                                        <li>Franchise Cost -<br />
                                            <span className='font-semibold'>₹40,00,000/- (₹2L/SPA Room)</span></li>
                                        <li>Royalty -<br />
                                            <span className='font-semibold'>₹4,00,000/- Month or 15% of  Revenue whichever is higher </span></li>
                                        <li>Total Investment- <br />
                                            <span className='font-semibold'>₹90.00Lakhs +18%GST s</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section3" className="px-6 text-white py-16">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                SPA Business Projection
                            </h2>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>Silver</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Exp. Clients Per Day <br />
                                            <span className='font-semibold'> 7</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>₹ 1,300</span></li>
                                        <li>1 Day Revenue <br />
                                            <span className='font-semibold'>₹ 9,100</span></li>
                                        <li> 1 Month Revenue From
                                            Services (A)  <br />
                                            <span className='font-semibold'>₹ 2,73,000</span></li>
                                        <li>Product Retails Sale P/M
                                            (B) (Studs)  <br />
                                            <span className='font-semibold'>₹ 5,000</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>Total Revenue<br />
                                            <span className='font-semibold'>₹ 2,78,000 </span></li>
                                        <li>6 Month Revenue <br />
                                            <span className='font-semibold'>₹ 16,68,000</span></li>
                                        <li>1 Year Revenue <br />
                                            <span className='font-semibold'>₹ 33,36,000 </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>02</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>Gold</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Exp. Clients Per Day <br />
                                            <span className='font-semibold'> 12</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>₹ 1,800</span></li>
                                        <li>1 Day Revenue <br />
                                            <span className='font-semibold'>₹ 21,600 </span></li>
                                        <li> 1 Month Revenue From
                                            Services (A)  <br />
                                            <span className='font-semibold'>₹ 6,48,000 </span></li>
                                        <li>Product Retails Sale P/M
                                            (B) (Studs)  <br />
                                            <span className='font-semibold'>₹ 10,000</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>Total Revenue<br />
                                            <span className='font-semibold'>₹ 6,58,000</span></li>
                                        <li>6 Month Revenue <br />
                                            <span className='font-semibold'>₹ 39,48,000 </span></li>
                                        <li>1 Year Revenue <br />
                                            <span className='font-semibold'>₹ 78,96,000 </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>Diamond</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Exp. Clients Per Day <br />
                                            <span className='font-semibold'> 19</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>₹ 2000</span></li>
                                        <li>1 Day Revenue <br />
                                            <span className='font-semibold'>₹ 38,000 </span></li>
                                        <li> 1 Month Revenue From
                                            Services (A)  <br />
                                            <span className='font-semibold'>₹ 11,40,000</span></li>
                                        <li>Product Retails Sale P/M
                                            (B) (Studs)  <br />
                                            <span className='font-semibold'>₹ 15,000</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>Total Revenue<br />
                                            <span className='font-semibold'>₹ 11,55,000</span></li>
                                        <li>6 Month Revenue <br />
                                            <span className='font-semibold'>₹ 69,30,000 </span></li>
                                        <li>1 Year Revenue <br />
                                            <span className='font-semibold'>₹ 1,38,60,000 </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>ROYALE 5-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Exp. Clients Per Day <br />
                                            <span className='font-semibold'> 35</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>₹ 2,200</span></li>
                                        <li>1 Day Revenue<br />
                                            <span className='font-semibold'>₹ 38,000 </span></li>
                                        <li> 1 Month Revenue From
                                            Services (A)  <br />
                                            <span className='font-semibold'>₹ 23,10,000 </span></li>
                                        <li>Product Retails Sale P/M
                                            (B) (Studs)  <br />
                                            <span className='font-semibold'>₹ 30,000 </span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>Total Revenue<br />
                                            <span className='font-semibold'>₹ 23,40,000 </span></li>
                                        <li>6 Month Revenue <br />
                                            <span className='font-semibold'>₹ 1,40,40,000 </span></li>
                                        <li>1 Year Revenue <br />
                                            <span className='font-semibold'>₹ 2,80,80,000</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LUXURY 7-STAR</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Exp. Clients Per Day <br />
                                            <span className='font-semibold'> 60</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>₹ 4000</span></li>
                                        <li>1 Day Revenue<br />
                                            <span className='font-semibold'>₹ 2,40,000 </span></li>
                                        <li> 1 Month Revenue From
                                            Services (A)  <br />
                                            <span className='font-semibold'>₹ 72,00,000s</span></li>
                                        <li>Product Retails Sale P/M
                                            (B) (Studs)  <br />
                                            <span className='font-semibold'>₹ 35,000 s</span></li>
                                        <li>Revenue Per Client <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>Total Revenue<br />
                                            <span className='font-semibold'>₹ 72,35,000</span></li>
                                        <li>6 Month Revenue <br />
                                            <span className='font-semibold'>₹ 4,34,10,000</span></li>
                                        <li>1 Year Revenue <br />
                                            <span className='font-semibold'>₹ 8,68,20,000</span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section4" className="px-6 text-white py-16">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                SPA Expected Operational Cost
                            </h2>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>SILVER </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Total Investmennt  <br />
                                            <span className='font-semibold'>₹ 12.75 Lakhs </span></li>
                                        <li>TOTAL REVENUE<br />
                                            <span className='font-semibold'>₹ 2,78,000</span></li>
                                        <li>No of Beds <br />
                                            <span className='font-semibold'>2 Spa Beds</span></li>
                                        <li> No. of. Staffs  <br />
                                            <span className='font-semibold'>4 Staffs</span></li>
                                        <li>Salary  <br />
                                            <span className='font-semibold'>₹ 68,500 </span></li>
                                        <li>Product Consumption (10%
                                            Revenue ) Approx. <br />
                                            <span className='font-semibold'>₹ 20,850
                                                (7.5% of Revenue )</span></li>
                                        <li>House Keeping (Materials)
                                            (2%of Revenue) Approx.<br />
                                            <span className='font-semibold'>₹ 4,170
                                                (1.5% of Revenue ) </span></li>
                                        <li>Rent (if any) (8% of Revenue)
                                            Approx.  <br />
                                            <span className='font-semibold'>₹ 15,290
                                                (5.5% of Revenue ) </span></li>
                                        <li>Misc. Expenses(Electricity bill
                                            , Refreshments, Water supply
                                            & wear and tear Exp.)(2% of
                                            Revenue) Approx. <br />
                                            <span className='font-semibold'>₹ 4,170
                                                (1.5% of Revenue )</span></li>
                                        <li>Opportunity Cost (10%p.a. of
                                            Investment) Approx. <br />
                                            <span className='font-semibold'>₹ 10,625</span></li>
                                        <li>Royalty Fees(15% of Service
                                            Revenue) Approx.  <br />
                                            <span className='font-semibold'>₹ 40,950</span></li>
                                        <li> Product Sale P/m (Studs) on
                                            5%   <br />
                                            <span className='font-semibold'>₹ 250 </span></li>
                                        <li>Total Expense Approx.  <br />
                                            <span className='font-semibold'>₹ 1,64,805  </span></li>
                                        <li>Expected Profit Approx. <br />
                                            <span className='font-semibold'>₹ 1,13,195</span></li>
                                        <li>Profit % Approx. <br />
                                            <span className='font-semibold'>40.72%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>02</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>GOLD </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Total Investmennt  <br />
                                            <span className='font-semibold'>₹ 25.00 Lakhs </span></li>
                                        <li>TOTAL REVENUE<br />
                                            <span className='font-semibold'>₹ 6,58,000</span></li>
                                        <li>No of Beds <br />
                                            <span className='font-semibold'>4 Spa Beds</span></li>
                                        <li> No. of. Staffs  <br />
                                            <span className='font-semibold'>7 Staffs</span></li>
                                        <li>Salary  <br />
                                            <span className='font-semibold'>₹ 1,34,000 </span></li>
                                        <li>Product Consumption (10%
                                            Revenue ) Approx. <br />
                                            <span className='font-semibold'>₹ 46,060
                                                (7% of Revenue )</span></li>
                                        <li>House Keeping (Materials)
                                            (2%of Revenue) Approx.<br />
                                            <span className='font-semibold'>₹ 11,515
                                                (5.5% of Revenue ) </span></li>
                                        <li>Rent (if any) (8% of Revenue)
                                            Approx.  <br />
                                            <span className='font-semibold'>₹ 36,190
                                                (5.5% of Revenue ) </span></li>
                                        <li>Misc. Expenses(Electricity bill
                                            , Refreshments, Water supply
                                            & wear and tear Exp.)(2% of
                                            Revenue) Approx. <br />
                                            <span className='font-semibold'>₹ 11,515
                                                (5.5% of Revenue )</span></li>
                                        <li>Opportunity Cost (10%p.a. of
                                            Investment) Approx. <br />
                                            <span className='font-semibold'>₹ 20,833</span></li>
                                        <li>Royalty Fees(15% of Service
                                            Revenue) Approx.  <br />
                                            <span className='font-semibold'>₹ 97,200 </span></li>
                                        <li> Product Sale P/m (Studs) on
                                            5%   <br />
                                            <span className='font-semibold'>₹ 500 </span></li>
                                        <li>Total Expense Approx.  <br />
                                            <span className='font-semibold'>₹ 3,57,813  </span></li>
                                        <li>Expected Profit Approx. <br />
                                            <span className='font-semibold'>₹ 3,00,187</span></li>
                                        <li>Profit % Approx. <br />
                                            <span className='font-semibold'>45.62%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>DIAMOND </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Total Investmennt  <br />
                                            <span className='font-semibold'> ₹ 37.50 Lakhs</span></li>
                                        <li>TOTAL REVENUE<br />
                                            <span className='font-semibold'>₹ 11,55,000</span></li>
                                        <li>No of Beds <br />
                                            <span className='font-semibold'>6 Spa Beds</span></li>
                                        <li> No. of. Staffs  <br />
                                            <span className='font-semibold'>10 Staffs</span></li>
                                        <li>Salary  <br />
                                            <span className='font-semibold'>₹ 1,87,000 </span></li>
                                        <li>Product Consumption (10%
                                            Revenue ) Approx. <br />
                                            <span className='font-semibold'>₹ 69,300
                                                (6% of Revenue )</span></li>
                                        <li>House Keeping (Materials)
                                            (2%of Revenue) Approx.<br />
                                            <span className='font-semibold'>₹ 17,325
                                                (1.5% of Revenue ) </span></li>
                                        <li>Rent (if any) (8% of Revenue)
                                            Approx.  <br />
                                            <span className='font-semibold'>₹ 57,750
                                                (5% of Revenue ) </span></li>
                                        <li>Misc. Expenses(Electricity bill
                                            , Refreshments, Water supply
                                            & wear and tear Exp.)(2% of
                                            Revenue) Approx. <br />
                                            <span className='font-semibold'>₹ 17,325
                                                (1.5% of Revenue )</span></li>
                                        <li>Opportunity Cost (10%p.a. of
                                            Investment) Approx. <br />
                                            <span className='font-semibold'>₹ 31,250</span></li>
                                        <li>Royalty Fees(15% of Service
                                            Revenue) Approx.  <br />
                                            <span className='font-semibold'>₹ 1,71,000 </span></li>
                                        <li> Product Sale P/m (Studs) on
                                            5%   <br />
                                            <span className='font-semibold'>₹ 750 </span></li>
                                        <li>Total Expense Approx.  <br />
                                            <span className='font-semibold'>₹ 5,51,700  </span></li>
                                        <li>Expected Profit Approx. <br />
                                            <span className='font-semibold'>₹ 6,03,300</span></li>
                                        <li>Profit % Approx. <br />
                                            <span className='font-semibold'>52.23%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>04</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>ROYALE 5-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Total Investmennt  <br />
                                            <span className='font-semibold'> ₹ 67.50 Lakhs</span></li>
                                        <li>TOTAL REVENUE<br />
                                            <span className='font-semibold'>₹ 23,40,000</span></li>
                                        <li>No of Beds <br />
                                            <span className='font-semibold'>10 Spa Beds</span></li>
                                        <li> No. of. Staffs  <br />
                                            <span className='font-semibold'>16 Staffs </span></li>
                                        <li>Salary  <br />
                                            <span className='font-semibold'>₹ 2,57,500 </span></li>
                                        <li>Product Consumption (10%
                                            Revenue ) Approx. <br />
                                            <span className='font-semibold'>₹ 93,600
                                                (4% of Revenue )</span></li>
                                        <li>House Keeping (Materials)
                                            (2%of Revenue) Approx.<br />
                                            <span className='font-semibold'>₹ 23,400
                                                (1% of Revenue ) </span></li>
                                        <li>Rent (if any) (8% of Revenue)
                                            Approx.  <br />
                                            <span className='font-semibold'>₹ 93,600
                                                (4% of Revenue ) </span></li>
                                        <li>Misc. Expenses(Electricity bill
                                            , Refreshments, Water supply
                                            & wear and tear Exp.)(2% of
                                            Revenue) Approx. <br />
                                            <span className='font-semibold'>₹ 23,400
                                                (1% of Revenue )</span></li>
                                        <li>Opportunity Cost (10%p.a. of
                                            Investment) Approx. <br />
                                            <span className='font-semibold'>₹ 56,250</span></li>
                                        <li>Royalty Fees(15% of Service
                                            Revenue) Approx.  <br />
                                            <span className='font-semibold'>₹ 3,46,500 </span></li>
                                        <li> Product Sale P/m (Studs) on
                                            5%   <br />
                                            <span className='font-semibold'>₹ 1,500 </span></li>
                                        <li>Total Expense Approx.  <br />
                                            <span className='font-semibold'>₹ 8,95,750  </span></li>
                                        <li>Expected Profit Approx. <br />
                                            <span className='font-semibold'>₹ 14,44,250</span></li>
                                        <li>Profit % Approx. <br />
                                            <span className='font-semibold'>61.72%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>05</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LUXURY 7-STAR</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Total Investmennt  <br />
                                            <span className='font-semibold'> ₹ 90.00 Lakhs</span></li>
                                        <li>TOTAL REVENUE<br />
                                            <span className='font-semibold'>₹ 72,35,000</span></li>
                                        <li>No of Beds <br />
                                            <span className='font-semibold'>10 Spa Beds</span></li>
                                        <li> No. of. Staffs  <br />
                                            <span className='font-semibold'>18 Staffs</span></li>
                                        <li>Salary  <br />
                                            <span className='font-semibold'>₹ 2,57,500 </span></li>
                                        <li> Product Consumption (10%
                                            Revenue ) Approx.  <br />
                                            <span className='font-semibold'>₹ 1,80,875 (2.5% Revenue )</span></li>
                                        <li>House Keeping (Materials) (2%of Revenue) Approx  <br />
                                            <span className='font-semibold'>₹ 1,80,875 (2.5% Revenue )</span></li>
                                        <li>Rent (if any) (8% of Revenue)
                                            Approx. <br />
                                            <span className='font-semibold'>₹ 1,44,700 (2% of Revenue )</span></li>
                                        <li>Misc. Expenses(Electricity bill
                                            , Refreshments, Water supply
                                            & wear and tear Exp.)(2% of
                                            Revenue) Approx. <br />
                                            <span className='font-semibold'>₹ 32,558 (0.45% of Revenue )</span></li>
                                        <li>Opportunity Cost (10%p.a. of
                                            Investment) Approx. <br />
                                            <span className='font-semibold'>₹ 75,000</span></li>
                                        <li>Opportunity Cost (10%p.a. of
                                            Investment) Approx. <br />
                                            <span className='font-semibold'>₹ 56,250</span></li>
                                        <li>Product Sale P/m (Studs) on
                                            5%<br />
                                            <span className='font-semibold'>₹ 1,750</span></li>
                                        <li>Total Expense Approx. <br />
                                            <span className='font-semibold'>₹ 18,36,440</span></li>
                                        <li>Expected Profit Approx. <br />
                                            <span className='font-semibold'>₹ 53,98,560</span></li>
                                        <li>Profit % Approx.  <br />
                                            <span className='font-semibold'>74.62%</span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section6" className="px-6 text-white py-16">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                Profit Projection for a Month
                            </h2>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>SILVER</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Minimum Monthly Expected Revenue  <br />
                                            <span className='font-semibold'> ₹2,78,000/-</span></li>
                                        <li>Monthy Operating cost<br />
                                            <span className='font-semibold'>₹ 1,64,805/-</span></li>
                                        <li>Minimun Expected Profit <br />
                                            <span className='font-semibold'>₹ 1,13,195/-</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>GOLD</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Minimum Monthly Expected Revenue  <br />
                                            <span className='font-semibold'> ₹6,58,000/-</span></li>
                                        <li>Monthy Operating cost<br />
                                            <span className='font-semibold'>₹ 3,57,813/- </span></li>
                                        <li>Minimun Expected Profit <br />
                                            <span className='font-semibold'>₹ 3,00,187/-</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>DIAMOND</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Minimum Monthly Expected Revenue  <br />
                                            <span className='font-semibold'>₹11,55,000/-</span></li>
                                        <li>Monthy Operating cost<br />
                                            <span className='font-semibold'>₹ 5,51,700/-</span></li>
                                        <li>Minimun Expected Profit <br />
                                            <span className='font-semibold'>₹ 6,03,300/- </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>ROYALE 5-STAR</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Minimum Monthly Expected Revenue  <br />
                                            <span className='font-semibold'>₹23,40,000/-</span></li>
                                        <li>Monthy Operating cost<br />
                                            <span className='font-semibold'>₹ 8,95,750/- </span></li>
                                        <li>Minimun Expected Profit <br />
                                            <span className='font-semibold'>₹ 14,44,250/- </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LUXURY 7-STAR</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Minimum Monthly Expected Revenue  <br />
                                            <span className='font-semibold'>₹72,35,000/-</span></li>
                                        <li>Monthy Operating cost<br />
                                            <span className='font-semibold'>₹ 18,36,440/-</span></li>
                                        <li>Minimun Expected Profit <br />
                                            <span className='font-semibold'>₹ 53,98,560/-</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section7" className="px-6 text-white py-16">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                SPA Expected Operational Cost
                            </h2>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>SILVER </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Architect Site Sq. Ft. (2D & 3D
                                            Design) & Visiting   <br />
                                            <span className='font-semibold'>₹ 50,000 </span></li>
                                        <li>Hoarding<br />
                                            <span className='font-semibold'>  -  </span></li>
                                        <li>Initial product Purchase Saving <br />
                                            <span className='font-semibold'>₹ 10,000 </span></li>
                                        <li>App ios & Android fee   <br />
                                            <span className='font-semibold'>₹ 1,00,000 </span></li>
                                        <li>Software Installation Charge  <br />
                                            <span className='font-semibold'>₹ 3,000  </span></li>
                                        <li>Social Media Integration <br />
                                            <span className='font-semibold'>₹ 10,000</span></li>
                                        <li>Server Room Setup <br />
                                            <span className='font-semibold'>₹ 50,000  </span></li>
                                        <li>Digital Marketing Setup   <br />
                                            <span className='font-semibold'>₹ 1,45,000  </span></li>
                                        <li>Employee Hiring <br />
                                            <span className='font-semibold'>₹ 93,000 </span></li>
                                        <li>Training Fee  <br />
                                            <span className='font-semibold'>₹ 1,55,000</span></li>
                                        <li>Premium Cell Phone No.   <br />
                                            <span className='font-semibold'>₹ 25,000 </span></li>
                                        <li>Location Searching Fee
                                            (1 Month Rent)   <br />
                                            <span className='font-semibold'>₹ 16,680 </span></li>
                                        <li>Total <br />
                                            <span className='font-semibold'>₹ 6,57,680  </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>02</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>GOLD </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Architect Site Sq. Ft. (2D & 3D
                                            Design) & Visiting   <br />
                                            <span className='font-semibold'>₹ 1,00,000  </span></li>
                                        <li>Hoarding<br />
                                            <span className='font-semibold'>  -  </span></li>
                                        <li>Initial product Purchase Saving <br />
                                            <span className='font-semibold'>₹ 20,000 </span></li>
                                        <li>App ios & Android fee   <br />
                                            <span className='font-semibold'>₹ 2,00,000  </span></li>
                                        <li>Software Installation Charge  <br />
                                            <span className='font-semibold'>₹ 5,000  </span></li>
                                        <li>Social Media Integration <br />
                                            <span className='font-semibold'>₹ 10,000</span></li>
                                        <li>Server Room Setup <br />
                                            <span className='font-semibold'>₹ 50,000  </span></li>
                                        <li>Digital Marketing Setup   <br />
                                            <span className='font-semibold'>₹ 1,35,000  </span></li>
                                        <li>Employee Hiring <br />
                                            <span className='font-semibold'>₹ 1,34,000</span></li>
                                        <li>Training Fee  <br />
                                            <span className='font-semibold'>₹ 1,55,000</span></li>
                                        <li>Premium Cell Phone No.   <br />
                                            <span className='font-semibold'>₹ 25,000 </span></li>
                                        <li>Location Searching Fee
                                            (1 Month Rent)   <br />
                                            <span className='font-semibold'>₹ 36,190  </span></li>
                                        <li>Total Expense Approx.  <br />
                                            <span className='font-semibold'>₹ 8,70,190  </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>DIAMOND </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Architect Site Sq. Ft. (2D & 3D
                                            Design) & Visiting   <br />
                                            <span className='font-semibold'>₹ 2,00,000 </span></li>
                                        <li>Hoarding<br />
                                            <span className='font-semibold'>  ₹ 20,000  </span></li>
                                        <li>Initial product Purchase Saving <br />
                                            <span className='font-semibold'>₹ 30,000 </span></li>
                                        <li>App ios & Android fee   <br />
                                            <span className='font-semibold'>₹ 2,50,000 </span></li>
                                        <li>Software Installation Charge  <br />
                                            <span className='font-semibold'>₹ 5,000  </span></li>
                                        <li>Social Media Integration <br />
                                            <span className='font-semibold'>₹ 10,000</span></li>
                                        <li>Server Room Setup <br />
                                            <span className='font-semibold'>₹ 50,000  </span></li>
                                        <li>Digital Marketing Setup   <br />
                                            <span className='font-semibold'>₹ 1,35,000  </span></li>
                                        <li>Employee Hiring <br />
                                            <span className='font-semibold'>₹ 1,87,000 </span></li>
                                        <li>Training Fee  <br />
                                            <span className='font-semibold'>₹ 1,55,000</span></li>
                                        <li>Premium Cell Phone No.   <br />
                                            <span className='font-semibold'>₹ 25,000 </span></li>
                                        <li>Location Searching Fee
                                            (1 Month Rent)   <br />
                                            <span className='font-semibold'>₹ 57,750 </span></li>
                                        <li>Total <br />
                                            <span className='font-semibold'>₹ 11,24,750  </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>04</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>ROYALE 5-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Architect Site Sq. Ft. (2D & 3D
                                            Design) & Visiting   <br />
                                            <span className='font-semibold'>₹ 4,00,000 </span></li>
                                        <li>Hoarding<br />
                                            <span className='font-semibold'>  ₹ 30,000  </span></li>
                                        <li>Initial product Purchase Saving <br />
                                            <span className='font-semibold'>₹ 50,000 </span></li>
                                        <li>App ios & Android fee   <br />
                                            <span className='font-semibold'>₹ 3,50,000 </span></li>
                                        <li>Software Installation Charge  <br />
                                            <span className='font-semibold'>₹ 5,000  </span></li>
                                        <li>Social Media Integration <br />
                                            <span className='font-semibold'>₹ 10,000</span></li>
                                        <li>Server Room Setup <br />
                                            <span className='font-semibold'>₹ 50,000  </span></li>
                                        <li>Digital Marketing Setup   <br />
                                            <span className='font-semibold'>₹ 1,35,000  </span></li>
                                        <li>Employee Hiring <br />
                                            <span className='font-semibold'>₹ 2,57,500 </span></li>
                                        <li>Training Fee  <br />
                                            <span className='font-semibold'>₹ 1,55,000</span></li>
                                        <li>Premium Cell Phone No.   <br />
                                            <span className='font-semibold'>₹ 25,000 </span></li>
                                        <li>Location Searching Fee
                                            (1 Month Rent)   <br />
                                            <span className='font-semibold'>₹ 93,600 </span></li>
                                        <li>Total <br />
                                            <span className='font-semibold'>₹ 15,61,100  </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>05</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LUXURY 7-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>Architect Site Sq. Ft. (2D & 3D
                                            Design) & Visiting   <br />
                                            <span className='font-semibold'>₹ 6,00,000 </span></li>
                                        <li>Hoarding<br />
                                            <span className='font-semibold'>  ₹ 40,000  </span></li>
                                        <li>Initial product Purchase Saving <br />
                                            <span className='font-semibold'>₹ 75,000 </span></li>
                                        <li>App ios & Android fee   <br />
                                            <span className='font-semibold'>₹ 3,50,000 </span></li>
                                        <li>Software Installation Charge  <br />
                                            <span className='font-semibold'>₹ 5,000  </span></li>
                                        <li>Social Media Integration <br />
                                            <span className='font-semibold'>₹ 15,000</span></li>
                                        <li>Server Room Setup <br />
                                            <span className='font-semibold'>₹ 50,000  </span></li>
                                        <li>Digital Marketing Setup   <br />
                                            <span className='font-semibold'>₹ 1,35,000  </span></li>
                                        <li>Employee Hiring <br />
                                            <span className='font-semibold'>₹ 2,89,000 </span></li>
                                        <li>Training Fee  <br />
                                            <span className='font-semibold'>₹ 1,55,000</span></li>
                                        <li>Premium Cell Phone No.   <br />
                                            <span className='font-semibold'>₹ 25,000 </span></li>
                                        <li>Location Searching Fee
                                            (1 Month Rent)   <br />
                                            <span className='font-semibold'>₹ 1,20,700 </span></li>
                                        <li>Total <br />
                                            <span className='font-semibold'>₹ 18,59,700  </span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section8" className="px-6 text-white py-16">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                Returns Against Royalty / Month
                            </h2>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>SILVER </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>CRM and Billing Software   <br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>App on Android & IOS<br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>Biometric Intigration <br />
                                            <span className='font-semibold'>₹ 1,000 </span></li>
                                        <li>Whatsapp ezConnect   <br />
                                            <span className='font-semibold'>₹ 2,500 </span></li>
                                        <li>CCTV Monitoring, Office Rent, Office
                                            Setup Exp.   <br />
                                            <span className='font-semibold'>₹ 20,000   </span></li>
                                        <li>Products Purchase Saving, Menu
                                            (Product Use on service &
                                            product*6%+₹2000/-) <br />
                                            <span className='font-semibold'>₹ 9,560 </span></li>
                                        <li>Dedicated Digital Marketing Team for
                                            Branding and Customer Support <br />
                                            <span className='font-semibold'>₹ 57,000  </span></li>
                                        <li>Visiting Charge of Business Analyst Expert  <br />
                                            <span className='font-semibold'>₹ 4,000  </span></li>
                                        <li>Trained Employee Support   <br />
                                            <span className='font-semibold'>₹ 20,000  </span></li>
                                        <li>Accounting Services <br />
                                            <span className='font-semibold'>₹ 2,000 </span></li>
                                        <li>HR Services  <br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>Total  <br />
                                            <span className='font-semibold'>₹ 1,24,060
                                                +GST 18% </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>02</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>GOLD </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>CRM and Billing Software   <br />
                                            <span className='font-semibold'>₹ 8,000 </span></li>
                                        <li>App on Android & IOS<br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>Biometric Intigration <br />
                                            <span className='font-semibold'>₹ 1,000 </span></li>
                                        <li>Whatsapp ezConnect   <br />
                                            <span className='font-semibold'>₹ 2,500 </span></li>
                                        <li>CCTV Monitoring, Office Rent, Office
                                            Setup Exp.   <br />
                                            <span className='font-semibold'>₹ 20,000   </span></li>
                                        <li>Products Purchase Saving, Menu
                                            (Product Use on service &
                                            product*6%+₹2000/-) <br />
                                            <span className='font-semibold'>₹ 17,048 </span></li>
                                        <li>Dedicated Digital Marketing Team for
                                            Branding and Customer Support <br />
                                            <span className='font-semibold'>₹ 67,000  </span></li>
                                        <li>Visiting Charge of Business Analyst Expert  <br />
                                            <span className='font-semibold'>₹ 4,000  </span></li>
                                        <li>Trained Employee Support   <br />
                                            <span className='font-semibold'>₹ 32,000  </span></li>
                                        <li>Accounting Services <br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>HR Services  <br />
                                            <span className='font-semibold'>₹ 4,500 </span></li>
                                        <li>Total  <br />
                                            <span className='font-semibold'>₹ 1,62,048
                                                +GST 18% </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>DIAMOND </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>CRM and Billing Software   <br />
                                            <span className='font-semibold'>₹ 8,000 </span></li>
                                        <li>App on Android & IOS<br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>Biometric Intigration <br />
                                            <span className='font-semibold'>₹ 1,000 </span></li>
                                        <li>Whatsapp ezConnect   <br />
                                            <span className='font-semibold'>₹ 2,500 </span></li>
                                        <li>CCTV Monitoring, Office Rent, Office
                                            Setup Exp.   <br />
                                            <span className='font-semibold'>₹ 20,000   </span></li>
                                        <li>Products Purchase Saving, Menu
                                            (Product Use on service &
                                            product*6%+₹2000/-) <br />
                                            <span className='font-semibold'>₹ 26,300 </span></li>
                                        <li>Dedicated Digital Marketing Team for
                                            Branding and Customer Support <br />
                                            <span className='font-semibold'>₹ 77,000  </span></li>
                                        <li>Visiting Charge of Business Analyst Expert  <br />
                                            <span className='font-semibold'>₹ 5,000  </span></li>
                                        <li>Trained Employee Support   <br />
                                            <span className='font-semibold'>₹ 40,000  </span></li>
                                        <li>Accounting Services <br />
                                            <span className='font-semibold'>₹ 4,000 </span></li>
                                        <li>HR Services  <br />
                                            <span className='font-semibold'>₹ 6,000 </span></li>
                                        <li>Total  <br />
                                            <span className='font-semibold'>₹ 1,92,800
                                                +GST 18% </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>04</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>ROYALE 5-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>CRM and Billing Software   <br />
                                            <span className='font-semibold'>₹ 8,000 </span></li>
                                        <li>App on Android & IOS<br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>Biometric Intigration <br />
                                            <span className='font-semibold'>₹ 1,500 </span></li>
                                        <li>Whatsapp ezConnect   <br />
                                            <span className='font-semibold'>₹ 2,500 </span></li>
                                        <li>CCTV Monitoring, Office Rent, Office
                                            Setup Exp.   <br />
                                            <span className='font-semibold'>₹ 20,000   </span></li>
                                        <li>Products Purchase Saving, Menu
                                            (Product Use on service &
                                            product*6%+₹2000/-) <br />
                                            <span className='font-semibold'>₹ 42,320 </span></li>
                                        <li>Dedicated Digital Marketing Team for
                                            Branding and Customer Support <br />
                                            <span className='font-semibold'>₹ 97,000  </span></li>
                                        <li>Visiting Charge of Business Analyst Expert  <br />
                                            <span className='font-semibold'>₹ 5,800  </span></li>
                                        <li>Trained Employee Support   <br />
                                            <span className='font-semibold'>₹ 80,000  </span></li>
                                        <li>Accounting Services <br />
                                            <span className='font-semibold'>₹ 6,000 </span></li>
                                        <li>HR Services  <br />
                                            <span className='font-semibold'>₹ 10,000 </span></li>
                                        <li>Total  <br />
                                            <span className='font-semibold'>₹ 2,76,120
                                                +GST 18% </span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>05</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LUXURY 7-STAR </h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>CRM and Billing Software   <br />
                                            <span className='font-semibold'>₹ 8,000 </span></li>
                                        <li>App on Android & IOS<br />
                                            <span className='font-semibold'>₹ 3,000 </span></li>
                                        <li>Biometric Intigration <br />
                                            <span className='font-semibold'>₹ 1,500 </span></li>
                                        <li>Whatsapp ezConnect   <br />
                                            <span className='font-semibold'>₹ 2,500 </span></li>
                                        <li>CCTV Monitoring, Office Rent, Office
                                            Setup Exp.   <br />
                                            <span className='font-semibold'>₹ 20,000   </span></li>
                                        <li>Products Purchase Saving, Menu
                                            (Product Use on service &
                                            product*6%+₹2000/-) <br />
                                            <span className='font-semibold'>₹ 56,000 </span></li>
                                        <li>Dedicated Digital Marketing Team for
                                            Branding and Customer Support <br />
                                            <span className='font-semibold'>₹ 1,07,000   </span></li>
                                        <li>Visiting Charge of Business Analyst Expert  <br />
                                            <span className='font-semibold'>₹ 7,000  </span></li>
                                        <li>Trained Employee Support   <br />
                                            <span className='font-semibold'>₹ 1,00,000  </span></li>
                                        <li>Accounting Services <br />
                                            <span className='font-semibold'>₹ 7,000 </span></li>
                                        <li>HR Services  <br />
                                            <span className='font-semibold'>₹ 12,000 </span></li>
                                        <li>Total  <br />
                                            <span className='font-semibold'>₹ 2,76,120
                                                +GST 18% </span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Franchise