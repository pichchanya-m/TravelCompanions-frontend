import React, { useContext } from 'react';

import './Spe.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const TopStaffs = () => {

const navigate = useNavigate()
const {staff} = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 mt-5'>
            <h1 className='text-3xl font-semibold text-yellow-500 custom-text-yellow'>Top Buddies to Book</h1>
            <p className='sm:w-1/3 text-center text-base whitespace-nowrap font-extralight '>Ready to book one of our trusted companions ?</p>
            {/* Ensure this div is defined as a grid container */}
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {staff.slice(0, 10).map((item, index) => (
                    <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                    className='border border-red-200 rounded-2xl overflow-hidden 
                    cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-red-50 w-full h-48 object-cover' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full '></p><p className='font-extralight'>Available</p>
                            </div>
                            <p className='font-medium text-gray-900 text-lg '>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.country}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate(`/staff`); scrollTo(0,0)}}
             className='bg-green-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
        </div>
    );
}

export default TopStaffs;
