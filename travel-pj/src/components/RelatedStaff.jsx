import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedStaff = ({country,comId}) => {

 const {staff} = useContext(AppContext)
 const navigate = useNavigate()
 const [relStf,setRelStf] = useState([])

 useEffect(() => {
    if (staff.length > 0 && country) {
      // Filter staff based on the country
      const staffData = staff.filter((stf) => stf.country === country &&
    stf._id !== comId)
     setRelStf(staffData)  // Set the filtered staff to state
    }
  }, [staff, country, comId]);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 mt-10'>
    <h1 className='text-xl font-semibold text-gray-500 custom-text-yellow'>Related Staffs from the same country</h1>
   
   
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
         {/* Use relStf.slice display only 5 staffs */}
        {relStf.slice(0, 5).map((item, index) => (
           //scroll up
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
  )
}

export default RelatedStaff