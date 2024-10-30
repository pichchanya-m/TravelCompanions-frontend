import React from 'react'
import { CountryData } from '../assets/assets'
import { Link } from 'react-router-dom'
import './Spe.css';

const Spe = () => {
  return (
    
    <div className='flex flex-col items-center gap-4 py-16 
    text-gray-80' id='CountryData'>
   <h1 className='text-3xl font-semibold text-primary custom-text-shadow'>Explore Countries We Operate In!</h1>

   <p className='sm:w-2/3 text-center text-base leading-tight'>
    Make your next adventure seamless and unforgettable with our travel companion services.
</p>


    <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>

    {CountryData.map((item,index)=>(
        <Link onClick={()=>scrollTo(0,0)}

        className='flex flex-col items-center text-xs cursor-pointer
         flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 '  

        //path to staff + country name 
        key={index} to={`/staff/${item.country}`}>
            <img className="country-icon w-16 sm:w-24 mb-2 my-1 mx-3"  src={item.image} alt={item.country}  />
            <p>{item.country}</p>

        </Link>
    ))}
    </div>
    </div>
  )
}

export default Spe


