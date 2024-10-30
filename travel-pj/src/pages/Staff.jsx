import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom' 
import { AppContext } from '../context/AppContext'

const Staff = () => {
    const { country } = useParams()
    const [filterStf, setFilterStf] = useState([])
    const navigate = useNavigate()
    const { staff } = useContext(AppContext)
    const [showfilter,setShowFilter] = useState(false)

    const applyFilter = () => {
        if (country) {
            setFilterStf(staff.filter(stf => stf.country === country))
        } else {
            setFilterStf(staff)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [staff, country])

    return (
        <div>
            <p className='text-gray-600 '>Browse through the Staffs 🧤</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

                <button className={`py-1 px-3 border rounded text-sm transition-all
                sm:hidden ${showfilter ? 'bg-primary text-white' : ''}`}
                onClick={()=>setShowFilter(prev => !prev)}>
                    Filters
                </button>

                <div className={`flex-wrap flex-col gap-4 text-sm text-gray-600
                    ${showfilter ? 'flex' : 'hidden sm:flex'}`}>

                <p onClick={() => country === '' ? navigate('/staff') : navigate('/staff/')}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-second
               hover:font-semibold hover:scale-105 hover:shadow-lg
               ${country === "" ? "bg-green-100 text-black" : ""}`}> {/*Select Green bg */}
                All Staffs
                </p>


                    <p onClick={()=> country === 'United States' ? navigate('/staff') : navigate('/staff/United States')}
                    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  border border-primary 
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-700
               hover:font-semibold hover:scale-105 hover:shadow-lg
               ${country === "United States" ? "bg-green-100 text-black" : ""}`}>USA</p>

                    <p onClick={()=> country === 'France' ? navigate('/staff') : navigate('/staff/France')}
                    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary 
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-700
               hover:font-semibold hover:scale-105 hover:shadow-lg
               ${country === "France" ? "bg-green-100 text-black" : ""}`}>France</p>

                    <p onClick={()=> country === 'United Kingdom' ? navigate('/staff') : navigate('/staff/United Kingdom')}
                    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary 
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-700
               hover:font-semibold hover:scale-105 hover:shadow-lg
               ${country === "United Kingdom" ? "bg-green-100 text-black" : ""}`}>UK</p>

                    <p onClick={()=> country === 'Japan' ? navigate('/staff') : navigate('/staff/Japan')}
                    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border  border-primary 
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-700
               hover:font-semibold hover:scale-105 hover:shadow-lg
               ${country === "Japan" ? "bg-green-100 text-black" : ""}`}>Japan</p>

                    <p onClick={()=> country === 'Netherlands' ? navigate('/staff') : navigate('/staff/Netherlands')}
                    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary 
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-700
               hover:font-semibold hover:scale-105 hover:shadow-lg
               ${country === "Netherlands" ? "bg-green-100 text-black" : ""}`}>Netherlands</p>

                    <p onClick={()=> country === 'Russia' ? navigate('/staff') : navigate('/staff/Russia')}
                    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary 
               rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-700
               hover:font-semibold hover:scale-105 hover:shadow-lg
               
               ${country === "Russia" ? "bg-green-100 text-black" : ""}`}>Russia</p>
                </div>

                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'> 
                    {filterStf.map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            className='border border-red-200 rounded-2xl overflow-hidden 
                            cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
                            key={index}
                        >
                            <img
                                className='bg-red-50 w-full h-48 object-cover' 
                                src={item.image} 
                                alt={item.name} 
                            />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                    <p className='font-extralight'>Available</p>
                                </div>
                                <p className='font-medium text-gray-900 text-lg'>{item.name}</p>
                                <p className='text-sm text-gray-600'>{item.country}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Staff
