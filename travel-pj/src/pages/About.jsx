import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-3xl pt-10 text-gray-800 font-semibold'>
        <p>ABOUT <span className='text-primary font-bold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
  <div className='flex-1 flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
    
    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>About</h2>
    <p className='mb-4 leading-relaxed'>
      Welcome to Travel Companions! We are dedicated to creating unforgettable travel
      experiences by connecting you with trusted travel companions. Our mission
      is to ensure that every journey is not only enjoyable but also safe and enriching.
      With a carefully curated network of companions who share your interests and travel style,
      we aim to provide a seamless and personalized experience tailored to your needs.
    </p>
    <p className='mb-4 leading-relaxed'>
      Whether you’re exploring a new city or embarking on an adventure off the beaten path,
      our companions are here to enhance your journey and make it memorable. 
      With their local insights and personal touch, you’ll discover hidden gems and create lasting memories together.
    </p>
    <h2 className='text-2xl font-semibold text-gray-800 mt-6'>Our Vision</h2>
    <p className='mt-2 leading-relaxed'>
      We envision a world where every traveler feels supported and connected, regardless of their destination. 
      Our goal is to empower individuals to explore with confidence, knowing that they have a reliable companion by their side.
    </p>
  </div>
  <div className='flex-1 mt-8'> 
    <img className='rounded-xl w-full md:max-w-[500px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg' 
         src={assets.about_image} 
         alt="About Travel Companions" />
  </div>
</div>



      <div className='text-xl my-4'>
        <p className='text-gray-800 font-semibold'>WHY <span className='text-primary'>CHOOSE US</span> ?</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-3 mt-5'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col 
        gap-5 text-[15px] hover:bg-primary hover:text-white
        transition-all duration-300 text-gray-600 cursor-pointer rounded-lg'>
          <b>Efficiency</b>
          <p>Our streamlined matching process connects you with trusted companions quickly, 
            so you can focus on enjoying your adventures without wasting time.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col 
        gap-5 text-[15px] hover:bg-primary hover:text-white
        transition-all duration-300 text-gray-600 cursor-pointer rounded-lg'
        >
          <b>Convenience</b>
          <p>Experience hassle-free travel with easy access to a network of reliable companions, 
            ensuring support is always at your fingertips.</p>
        </div>


        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col 
        gap-5 text-[15px] hover:bg-primary hover:text-white
        transition-all duration-300 text-gray-600 cursor-pointer rounded-lg'
        >
          <b>Personalization</b>
          <p>We tailor your travel experience by matching you with companions who share your interests, 
            making your journey uniquely enjoyable.</p>
        </div>

      </div>



    </div>
  );
};

export default About;
