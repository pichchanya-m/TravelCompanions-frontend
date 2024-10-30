import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='text-center font-extralight text-2xl pt-10 text-gray-800'>
      <p className='mb-10 text-3xl font-semibold'> <span className='text-primary'> CONTACT </span>US</p>

      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 text-sm md:text-base'>
        <div className='flex-1 flex justify-center mb-4'>
          <img className='w-full h-auto rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105' src={assets.contact_image} alt="Contact Us" />
        </div>

        <div className='flex-1 text-left mt-12'>
          <p className='font-semibold text-lg mb-2'>Travel Companions</p>
          <p className='mt-2 text-gray-600'>123 Adventure Lane <br />Suite 456, New York, NY 10001, USA</p>
          <p className='mt-2 text-gray-600'>Phone: <span className='font-medium'>(555) 123-4567</span> <br />Email: <span className='font-medium'>aimmy007@gmail.com</span></p>
          <p className='mt-4 font-semibold'>Careers at Travel Companions</p>
          <p className='mt-2 text-gray-600'>Learn more about our job opportunities.</p>
          <button
            className='mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-white hover:text-primary hover:border hover:border-primary transition duration-300 shadow-md hover:shadow-lg'
            onClick={() => window.open('https://youtu.be/nn_0zPAfyo8?si=NbzdUXFNeC9dDczq', '_blank')}
          >
            Explore Us
          </button>

        </div>
      </div>
    </div>
  );
}

export default Contact;
