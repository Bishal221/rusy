import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        mobileNo: '',
        serviceCategory: '',
        service: '',
        dateOfAppointment: '',
        timeOfAppointment: '',
        durationOfService: '',
        specialist: '',
        additionalInstructions: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const serviceOptions = {
        Massage: [
            'Swedish Massage',
            'Thai Massage',
            'Deep Tissue Massage',
            'Hot Stone Massage',
            'Aromatherapy Massage',
            'Sports Massage',
            'Shiatsu Massage',
            'Reflexology'
        ],
        Facial: [
            'Hydrating Facial',
            'Anti-aging Facial',
            'Deep Cleansing Facial',
            'Acne Treatment Facial',
            'Brightening Facial',
            'Sensitive Skin Facial',
            'Oxygen Infusion Facial',
            'Microdermabrasion Facial',
            'Chemical Peel Facial',
            'Customized Facials'
        ],
        'Body Treatment': [
            'Body Wraps',
            'Body Scrubs',
            'Body Masks',
            'Aromatherapy',
            'Body Polishes',
            'Slimming Treatments',
            'Detox Treatments'
        ],
        'Manicures and Pedicure': [
            'Classic Manicure/Pedicure',
            'Gel Manicure/Pedicure',
            'French Manicure/Pedicure',
            'Paraffin Wax Manicure/Pedicure',
            'Spa Manicure/Pedicure',
            'Shellac Manicure/Pedicure'
        ],
        Hydrotherapy: [
            'Whirlpool or Jacuzzi',
            'Hot Tubs',
            'Cold Plunge',
            'Hydrotherapy Showers',
            'Hydrotherapy Pools',
            'Steam Rooms and Saunas'
        ],
        Acupuncture: [
            'Traditional Chinese Acupuncture',
            'Auricular Acupuncture',
            'Electroacupuncture',
            'Scalp Acupuncture',
            'Korean Hand Acupuncture'
        ]
    };

    return (
        <>
            <section className="bg-black">
                <Header />
                <section className="pt-28 pb-8 px-6 text-white">
                    <div className="p-6 rounded-lg container mx-auto shadow-md">
                        <h2 className="text-3xl golden font-bold mb-3">Appointment Form</h2>
                        <p className='text-white mb-8 text-lg'>Our skilled professionals are dedicated to enhancing your beauty and boosting your confidence. Book your appointment now and indulge in a world of relaxation and elegance.</p>
                        <form className='text-white'>
                            <div className="grid grid-cols-2 gap-3">
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="name" className="text-lg font-medium">Name:</label>
                                    <input type="text" id="name" placeholder='Full Name' name="name" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange} />
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="age" className="text-lg font-medium">Age:</label>
                                    <input type="number" id="age" placeholder='Age' name="age" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange} />
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="mobileNo" className="text-lg font-medium">Mobile No:</label>
                                    <input type="number" id="mobileNo" placeholder='Phone No' name="mobileNo" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange} />
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="serviceCategory" className="text-lg font-medium">Service Category:</label>
                                    <select id="serviceCategory" name="serviceCategory" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange}>
                                        <option disabled selected value="">Select Service Category</option>
                                        {Object.keys(serviceOptions).map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="service" className="text-lg font-medium">Service:</label>
                                    <select id="service" name="service" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange}>
                                        <option selected disabled value="">Select Service</option>
                                        {formData.serviceCategory && serviceOptions[formData.serviceCategory].map(service => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="dateOfAppointment" className="text-lg font-medium">Date of Appointment:</label>
                                    <input type="date" id="dateOfAppointment" name="dateOfAppointment" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange} />
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="timeOfAppointment" className="text-lg font-medium">Time of Appointment:</label>
                                    <input type="time" id="timeOfAppointment" name="timeOfAppointment" className="w-full p-3 bg-[#2e2e2e] mt-1 text-white" onChange={handleInputChange} />
                                </div>
                                <div className='w-full sm:col-span-1 col-span-2'>
                                    <label htmlFor="durationOfService" className="text-lg font-medium">Duration of Service:</label>
                                    <select id="durationOfService" name="durationOfService" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange}>
                                        <option disabled selected value="">Select Duration</option>
                                        <option value="15 min">15 min</option>
                                        <option value="30 min">30 min</option>
                                        <option value="45 min">45 min</option>
                                        <option value="1 hour">1 hour</option>
                                        <option value="2 hours">2 hours</option>
                                        <option value="5 hours">5 hours</option>
                                    </select>
                                </div>
                                <div className='w-full col-span-2'>
                                    <label htmlFor="specialist" className="text-lg font-medium">Select Specialist:</label>
                                    <select id="specialist" name="specialist" className="w-full p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange}>
                                        <option disabled selected value="">Select Specialist</option>
                                        <option value="a">A</option>
                                        <option value="b">B</option>
                                        <option value="c">C</option>
                                        <option value="d">D</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="additionalInstructions" className="text-lg font-medium">Additional Instructions:</label>
                                    <textarea id="additionalInstructions" placeholder='If any additional instructions' name="additionalInstructions" className="w-full h-[150px] resize-none p-3 bg-[#2e2e2e] mt-1" onChange={handleInputChange}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="bg_golden text-white font-bold py-3 px-10 rounded mt-6">Submit</button>
                        </form>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    );
};

export default BookAppointment;
