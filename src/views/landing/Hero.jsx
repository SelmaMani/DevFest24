import React from 'react'
import Navbar from './NavBar'

import pic from "../../assets/hero_m.svg";

function Hero() {
  return (
    <div className='flex flex-col relative justify-between items-center  min-h-screen p-3 m-2 border bg-gradient-to-b from-white  to-[#a6d7ff5d] border-gray-400 rounded-[30px]'>
      <Navbar/>
     <div className=' flex flex-col md:flex-row md:w-[95%] justify-center items-center gap-10'>
        <div className='flex md:w-[40%] flex-col justify-center items-center gap-10'>
            <p className=' text-[#4527A0] leading-[3rem] text-center p-4 font-fredoka text-[36px]'>
            Empower Your Organization’s Financial Health with Real-Time Insights
            </p>
            <p className=' font-montserrat  text-center text-[#484848] font-semibold text-[24px]'>
            Track. Optimize. Plan. Drive Your Business to Success.
            </p>
        </div>

        <img src={pic} alt="" className='md:w-[40%]'/>
     </div>
     <button className=' bg-[#4527A0] mb-10 rounded-[15px] text-white text-[24px] font-sans leading-8  px-5 md:px-10 py-2'>
     Join the Corporate Financial Health Revolution
     </button>
    </div>
  )
}

export default Hero
