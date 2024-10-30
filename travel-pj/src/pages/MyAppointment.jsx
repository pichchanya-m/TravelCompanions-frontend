import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { staff } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-16 font-semibold text-zinc-700 border-b'>My Appointments</p>
      <div>
        {staff.slice(0, 3).map((item, index) => (
          <div
            className='grid rid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'
            key={index}
          >
            <div>
              <img className='w-32 bg-green-50 rounded-lg' src={item.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-700'>
              <p className='text-lg text-neutral-800 font-semibold'>{item.name}</p>
              <p className='text-md text-zinc-700'>{item.country}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address :</p>
              <p className='text-sm text-zinc-500'>{item.address.line1}</p>
              <p className='text-sm text-zinc-500'>{item.address.line2}</p>
              <p className='text-sm mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>Date & Time :</span> 25 July 2024 | 8:30 PM
              </p>
            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-primary text-center sm:min-w-48 py-2 border border-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              <button className='text-sm text-red-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 border-red-600
              rounded-2xl hover:text-white transition-all duration-300'>
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointment;