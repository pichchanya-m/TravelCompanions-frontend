import React from 'react';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        
        <div className=' md:mx-10  p-6 md:p-10 mt-20'>   {/* bg-gray-50 rounded-lg shadow-lg */}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 text-sm'>
          
                {/* Left Section */}
                <div className='flex flex-col'>
                    <img className='mb-5 w-32 md:w-40' src={assets.logo} alt="Logo" />
                    <p className='text-gray-600 leading-6 text-justify'>
                        Explore a trusted travel companion service dedicated to enhancing your journeys. 
                        Our experienced companions ensure safe, seamless, and enjoyable experiences. 
                        With over 5 years of expertise, each companion is carefully selected to provide 
                        reliable support, local insights, and personalized assistance for worry-free adventures.
                    </p>
                </div>

                {/* Center Section */}
                <div>
                    <p className='text-lg font-semibold mb-4 text-gray-800 text-center'>COMPANY</p>
                    <ul className='flex flex-col gap-3 text-gray-600 text-center'>
                        {['Home', 'About Us', 'Contact Us', 'Privacy Policy'].map((item, index) => (
                            <li key={index} className='hover:text-blue-600 cursor-pointer transition-all duration-200'>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <p className='text-lg font-semibold mb-4 text-gray-800 text-center'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-3 text-gray-600 text-center'>
                        <li className='flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-all duration-200'>
                            <FaPhoneAlt /> +66 000 000 0000
                        </li>
                        <li className='flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-all duration-200'>
                            <FaEnvelope /> aimmy007@gmail.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <hr className='border-gray-300' />
            <p className='py-5 text-xs text-center text-gray-500'>
                &copy; 2024 Travel Companions - All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
