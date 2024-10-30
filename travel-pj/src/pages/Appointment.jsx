import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedStaff from '../components/RelatedStaff'

const Appointment = () => {
  const { comId } = useParams()
  const { staff, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const [stfInfo, setStfInfo] = useState(null)
  const [stfSlots, setStfSlots] = useState([])
  const [slotindex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchStfInfo = async () => {
    const stfInfo = staff.find(stf => stf._id === comId)
    setStfInfo(stfInfo)

  }

  const getAvailableSlots = async () => {
    setStfSlots([])
    //get current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      //get date index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //set end time of the date with i
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)
      //set hours current time+1hour
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {

        let formattedTime = currentDate.toLocaleTimeString([],
          { hour: '2-digit', minute: '2-digit' })
        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
        //Increase current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      } //while 

      setStfSlots(prev => ([...prev, timeSlots]))
    }

  }

  useEffect(() => {
    fetchStfInfo()
  }, [staff, comId])

  //particular staff
  useEffect(() => {
    getAvailableSlots()
  }, [stfInfo])


  useEffect(() => {
    console.log(stfSlots);
  }, [stfSlots])




  return stfInfo && (
    <div>

      {/* Staff Details manage pictoleft infotoright */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg'
            src={stfInfo.image} alt="" />
        </div>
        <div className='flex-1 border boder-gray-400 rounded-lg 
        p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* Staff: Infooooooooo */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {stfInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          {/* Staff: degree/country/experience years */}
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{stfInfo.degree} - {stfInfo.country}</p>
            <button className='py-0.5 px-2 border border-primary text-xs text-black
            rounded-full bg-green-200'>
              {stfInfo.experience}</button>
          </div>
          {/* Staff: About */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium
             text-gray-900 mt-3 mb-2 '>
              About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{stfInfo.about}</p>

          </div>
          <p className='mt-4 text-gray-500 font-medium '>
            Appointment fee : <span className='text-gray-600'>
              {currencySymbol}{stfInfo.fees}</span>
          </p>
        </div>

      </div> {/* Staff */}

      {/* Booking Slot*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
        <p className='font-semibold mb-3 mt-5'>Booking Slot</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            stfSlots.length > 0 && stfSlots.map((item, index) => (
              <div
                key={index}
                className={`text-center py-3 px-6 min-w-[50px] rounded-full cursor-pointer overflow-hidden
          ${slotindex === index
                    ? 'bg-primary text-white scale-100'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setSlotIndex(index)}
              >
                <p className='text-xs font-semibold'
                >{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>

                <p className='text-lg font-bold mt-1'>
                  {item[0] && item[0].datetime.getDate()}</p>

                <p className='text-xs font-medium mt-1'>
                  {item[0] && monthsOfYear[item[0].datetime.getMonth()]}
                </p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full 
           overflow-x-scroll mt-4'>
          {stfSlots.length && stfSlots[slotindex].map((item, index) => (
            <p
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer mt-4
             ${item.time === slotTime 
               ? 'bg-primary text-white'
               : 'bg-white text-gray-600 border boder-gray-300  hover:bg-gray-200'}`}
               key={index} onClick={() => setSlotTime(item.time)} // Update slotTime on click
            >
              {item.time.toLowerCase()}
            </p>

          ))}
        </div>
        <button className='bg-second text-white text-sm font-extralight 
        px-14 py-3 rounded-full my-6 hover:text-second hover:bg-white hover:border hover:border-second' 
        >Book Appointment</button>



      </div> {/* Booking Slot*/}

     {/* Related Staff Lists*/}
     <RelatedStaff comId={comId} country={stfInfo.country} />
    </div>
  )

}

export default Appointment
