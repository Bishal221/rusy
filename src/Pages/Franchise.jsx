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
                            <a href='#' target='_blank' className='sm:pl-10 pt-3 flex gap-x-2'>
                                <div><i className="fa-solid text-3xl text-white fa-file-pdf"></i></div>
                                <div className='text-white'>
                                    <p>Rusy A Laurent Kit</p>
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
                                FRANCHISE (Silver)
                            </h2>
                            <p>There are 3 modules in the Baylen Salon <br />
                                Franchise to choose from.</p>
                        </div>
                        <div className='flex items-center justify-center md:flex-row flex-wrap flex-col gap-y-8 relative pt-6'>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full'>
                                <p className='text-right text-lg pb-3 pr-3'>01</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LITE MODULE</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>FRANCHISE FEES <br />
                                            <span className='font-semibold'> Rs. 15 LACS</span></li>
                                        <li>AREA UP TO <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>TOTAL INVESTMENT <br />
                                            <span className='font-semibold'>Rs. 60 to 80 LACS</span></li>
                                        <li>Royalty <br />
                                            <span className='font-semibold'>10%</span></li>
                                        <li>ROI <br />
                                            <span className='font-semibold'>60% (approx in 1 year)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>02</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LITE MODULE</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>FRANCHISE FEES <br />
                                            <span className='font-semibold'> Rs. 15 LACS</span></li>
                                        <li>AREA UP TO <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>TOTAL INVESTMENT <br />
                                            <span className='font-semibold'>Rs. 60 to 80 LACS</span></li>
                                        <li>Royalty <br />
                                            <span className='font-semibold'>10%</span></li>
                                        <li>ROI <br />
                                            <span className='font-semibold'>60% (approx in 1 year)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LITE MODULE</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>FRANCHISE FEES <br />
                                            <span className='font-semibold'> Rs. 15 LACS</span></li>
                                        <li>AREA UP TO <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>TOTAL INVESTMENT <br />
                                            <span className='font-semibold'>Rs. 60 to 80 LACS</span></li>
                                        <li>Royalty <br />
                                            <span className='font-semibold'>10%</span></li>
                                        <li>ROI <br />
                                            <span className='font-semibold'>60% (approx in 1 year)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LITE MODULE</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>FRANCHISE FEES <br />
                                            <span className='font-semibold'> Rs. 15 LACS</span></li>
                                        <li>AREA UP TO <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>TOTAL INVESTMENT <br />
                                            <span className='font-semibold'>Rs. 60 to 80 LACS</span></li>
                                        <li>Royalty <br />
                                            <span className='font-semibold'>10%</span></li>
                                        <li>ROI <br />
                                            <span className='font-semibold'>60% (approx in 1 year)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:max-w-[400px] md:max-w-[300px] w-full relative'>
                                <p className='text-right text-lg pb-3 pr-3'>03</p>
                                <div className='border border-[rgba(255,255,255,0.5)] px-10 py-6 flex flex-col gap-y-5'>
                                    <h1 className='golden text-2xl font-semibold'>LITE MODULE</h1>
                                    <ul className='flex flex-col gap-y-3 text-lg list-disc pl-5'>
                                        <li>FRANCHISE FEES <br />
                                            <span className='font-semibold'> Rs. 15 LACS</span></li>
                                        <li>AREA UP TO <br />
                                            <span className='font-semibold'>750 to 1000 Sq. Ft.</span></li>
                                        <li>TOTAL INVESTMENT <br />
                                            <span className='font-semibold'>Rs. 60 to 80 LACS</span></li>
                                        <li>Royalty <br />
                                            <span className='font-semibold'>10%</span></li>
                                        <li>ROI <br />
                                            <span className='font-semibold'>60% (approx in 1 year)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 overflow-hidden">
                    <img className='object-cover w-full max-h-[500px] h-auto object-center' src="https://cdn.pixabay.com/photo/2018/09/25/09/02/wellness-3701750_1280.jpg" alt="" />
                </section>

                <Footer />
            </section>
        </>
    )
}

export default Franchise