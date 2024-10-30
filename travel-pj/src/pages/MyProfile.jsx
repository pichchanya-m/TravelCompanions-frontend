import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Draft Name",
    image: assets.profile_pic,
    email: 'aimmy@gmail.com',
    phone: '+1 502 000 0000',
    address: {
      line1: "401 Cardinal Blvd, Louisville",
      line2: "KY 40208, United States"
    },
    gender: 'Female',
    dob: '2004-00-00'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='mt-20 max-w-8xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-row gap-12 items-start'>
      <div className='flex-shrink-0'>
        <img className='w-36 h-36 rounded-full border-4 border-primary shadow-md' src={userData.image} alt="Profile" />
      </div>
      <div className='flex-grow'>
        <div className='flex items-center gap-4'>
          {
            isEdit
              ? <input className='text-4xl font-semibold text-neutral-800 bg-gray-50 rounded-md p-2 w-full'
                  type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
              : <p className='font-semibold text-4xl text-primary'>{userData.name}</p>
          }
        </div>
        <hr className='my-6 border-gray-300' />

        <section>
          <p className='text-neutral-500  font-semibold mb-4'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4 text-neutral-700'>
            <p className='font-medium text-lg'>Email :</p>
            <p className='text-primary text-lg'>{userData.email}</p>

            <p className='font-medium text-lg'>Phone :</p>
            {
              isEdit
                ? <input className='bg-gray-100 rounded-md p-2 w-full' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                : <p className='text-gray-500 text-lg'>{userData.phone}</p>
            }

            <p className='font-medium text-lg'>Address :</p>
            {
              isEdit
                ? <div className='flex flex-col'>
                    <input className='bg-gray-50 mb-1 p-2 rounded-md' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                    <input className='bg-gray-50 p-2 rounded-md' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                  </div>
                : <p className='text-gray-500 text-lg'>{userData.address.line1}<br />{userData.address.line2}</p>
            }
          </div>
        </section>

        <hr className='my-6 border-gray-300' />

        <section>
          <p className='text-neutral-500 font-semibold mb-4'>BASIC INFORMATION</p>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4 text-neutral-700'>
            <p className='font-medium'>Gender :</p>
            {
              isEdit
                ? <select className='bg-gray-100 p-2 rounded-md' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="LGBTQ+">LGBTQ+</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                : <p className='text-gray-500'>{userData.gender}</p>
            }

            <p className='font-medium'>Birthday :</p>
            {
              isEdit
                ? <input className='bg-gray-100 p-2 rounded-md' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} /> 
                : <p className='text-gray-500'>{userData.dob}</p>
            }
          </div>
        </section>

        <div className='mt-8 flex justify-end'>
          {
            isEdit
              ? <button className='font-semibold text-white bg-primary px-6 py-2 rounded-full hover:bg-primary-dark transition-all' onClick={() => setIsEdit(false)}>
                  Save Information
                </button>
              : <button className='font-semibold text-primary border-primary border px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>
                  Edit Profile
                </button>
          }
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
