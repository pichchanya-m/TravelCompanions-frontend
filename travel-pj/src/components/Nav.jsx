import React, { useState } from 'react';
import { assets } from '../assets/assets'; //assetsimg -> assets.js
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    //log in log out
    const [token, setToken] = useState(true)

    return (

        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-8 font-bold justify-center flex-grow'>
                <NavLink to="/" className='hover:text-primary text-lg'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to="/staff" className='hover:text-primary text-lg'>
                    <li className='py-1'>All Staffs</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to="/about" className='hover:text-primary text-lg'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to="/contact" className='hover:text-primary text-lg'>
                    <li className='py-1'>Contact Us</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

            </ul>

            <div className='flex items-center gap-4'>
                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer
                        group relative'>
                            {/* Profile pic */}
                            <img className='w-9 rounded-full'
                                src={assets.profile_pic} alt="" />
                            {/* dropdown */}
                            <img className='w-2.5'
                                src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base
                            text-gray-600 z-20 hidden font-medium group-hover:block'>
                                <div className='min-w-48 bg-gray-50 rounded flex flex-col 
                                gap-4 p-4 '>

                                    <p onClick={() => navigate('/my-profile')}
                                        className='hover:text-blue-600 cursor-pointer 
                                 hover:font-semibold transition-all ease-in-out'>My Profile</p>

                                    <p onClick={() => navigate('/my-appointment')}
                                        className='hover:text-green-700 cursor-pointer 
                                 hover:font-semibold transition-all ease-in-out'>My Appointment</p>

                                    <p onClick={() => setToken(false)}
                                        className='hover:text-red-600 cursor-pointer 
                                 hover:font-semibold transition-all ease-in-out'>Log Out</p>
                                </div>
                            </div>
                        </div> //div token
                        : <button onClick={() => navigate('/login')}
                            className='bg-primary text-white px-8 py-3 
                            rounded-full font-semibold hidden md:block 
                            hover:bg-white hover:text-primary transition duration-300
                            ease-in-out hover:border hover:border-gray-300 '
                        >Sign Up</button>
                }

                <img onClick={() => setShowMenu(true)}
                    className='w-6 md:hidden'
                    src={assets.menu_icon} alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'}
                     md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden
                     bg-white transition-all`}>

                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)}
                            src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink 
                        onClick={()=>setShowMenu(false)}
                        to='/'> <p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                        <NavLink 
                        onClick={()=>setShowMenu(false)}
                        to='/staff'> <p className='px-4 py-2 rounded inline-block'>All Staffs</p></NavLink>
                        <NavLink 
                        onClick={()=>setShowMenu(false)}
                        to='/about'> <p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                        <NavLink 
                        onClick={()=>setShowMenu(false)}
                        to='/contact'> <p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                    </ul>
                </div>





            </div>
        </div>
    );
};

export default Nav;
