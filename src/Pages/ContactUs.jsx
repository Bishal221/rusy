import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const ContactUs = () => {

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

                <section id="section2" className="px-6 text-white pt-32">
                    <div className='container mx-auto'>
                        <div className='relative'>
                            <h2 className="text-[2.25rem] lg:text-[3.5rem] 2xl:text-[4.5rem] golden text-center md:text-left font-bold">
                                Contact Us
                            </h2>
                        </div>
                    </div>
                </section>

                <section id="section3" className="px-6 text-white py-16">
                    <div className='flex items-center flex-col md:flex-row gap-y-5'>
                        <div className="pr-1 hover:before:border-[#f9b615] before:transition-all before:duration-300 w-full md:w-1/2 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                            <img className="" src="https://cdn.pixabay.com/photo/2016/08/11/02/23/massage-therapy-1584711_1280.jpg" alt="" />
                        </div>
                        <div className='md:w-1/2 w-full md:ml-10'>
                            <div className='flex flex-col justify-center items-center  w-full'>
                                <div className='w-full md:max-w-[600px]'>
                                    <h1 className='text-[2.25rem] uppercase lg:text-[3.5rem] 2xl:text-[3.5rem] golden text-center md:text-left font-bold'>Enquire <span className='font-light'>now</span></h1>
                                    <form action="#" className='flex items-center flex-col justify-center w-full'>
                                        <input type="text" className='bg-transparent block w-full py-2  border px-2 my-2 text-lg' placeholder='Your Name' />
                                        <select className='bg-transparent block w-full py-2 border px-2 my-2 text-lg' value={selectedState} onChange={handleStateChange}>
                                            <option className='bg-transparent text-black px-4' value="" disabled>Select State</option>
                                            {indianStatesAndCities.map((stateObj, index) => (
                                                <option className='bg-transparent text-black px-4' key={index} value={stateObj.state}>
                                                    {stateObj.state}
                                                </option>
                                            ))}
                                        </select>
                                        <select className='bg-transparent block w-full py-2 border px-2 my-2 text-lg' value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
                                            <option disabled value="" className='bg-transparent text-black px-4'>Select City</option>
                                            {indianStatesAndCities
                                                .find((stateObj) => stateObj.state === selectedState)
                                                ?.cities.map((city, index) => (
                                                    <option className='bg-transparent text-black px-4' key={index} value={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                        </select>
                                        <select className='bg-transparent block w-full py-2 border px-2 my-2 text-lg'>
                                            <option disabled value="" selected className='bg-transparent text-black px-4'>Investment Capacity</option>
                                            <option value="" className='bg-transparent text-black px-4'>Lite - 40Lac</option>
                                            <option value="" className='bg-transparent text-black px-4'>Regular - 1Cr</option>
                                            <option value="" className='bg-transparent text-black px-4'>Luxary - 1.25Cr</option>
                                        </select>
                                        <select className='bg-transparent block w-full py-2 border px-2 my-2 text-lg'>
                                            <option disabled value="" selected className='bg-transparent text-black px-4'>Franchise Model</option>
                                            <option value="" className='bg-transparent text-black px-4'>Gold</option>
                                            <option value="" className='bg-transparent text-black px-4'>Daimond</option>
                                            <option value="" className='bg-transparent text-black px-4'>Luxary</option>
                                            <option value="" className='bg-transparent text-black px-4'>Royale</option>
                                        </select>
                                        <select className='bg-transparent block w-full py-2 border px-2 my-2 text-lg'>
                                            <option disabled value="" selected className='bg-transparent text-black px-4'>Budget</option>
                                            <option value="" className='bg-transparent text-black px-4'>Under 3 Lacs</option>
                                            <option value="" className='bg-transparent text-black px-4'>Under 5 Lacs</option>
                                            <option value="" className='bg-transparent text-black px-4'>Between 10 - 15 Lacs</option>
                                        </select>
                                        <input placeholder='Email Address' className='bg-transparent block w-full py-2 border px-2 my-2 text-lg' type="email" />
                                        <input placeholder='Contact Number' className='bg-transparent block w-full py-2 border px-2 my-2 text-lg' type="number" />
                                        <textarea placeholder='Message' className='bg-transparent block w-full py-2 h-[200px] resize-none border px-2 my-2 text-lg'></textarea>
                                        <button className='uppercase px-11 ml-auto mt-4 font-medium py-3 rounded-full bg-[#f9b615]'>submit</button>
                                    </form>
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

export default ContactUs