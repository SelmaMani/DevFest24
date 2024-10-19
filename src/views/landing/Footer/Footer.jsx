import React from 'react'
import logo from "../../../assets/logo.svg";


export default function Footer() {
    return (
        <>
            <div className='w-screen pt-8 pb-8 mt-2 bg-orange-main bg-[#F5F5F5]'>
                <div className='flex justify-evenly'>
                    <div className='grid grid-rows-1 pl-16 mt-6 mb-6'>
                        <div className='flex justify-start mb-4'>
                            <img src={logo} alt="Logo" className='w-[150px] h-auto' /> 
                        </div>
                        <div className='grid grid-rows-2 gap-2'>
                            <div className='flex text-lg font-bold text-[#484848] flex-start font-montserrat' >Our Contact Details</div>
                            <div className='flex text-xs font-semibold text-[#484848]  flex-start font-montserrat'>Let us Contact</div>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 mt-4 mb-4'>
                        <div className='grid grid-rows-2 gap-2'>
                            <div className='flex text-lg text-[#484848] font-semibold flex-start font-montserrat' >Telephone</div>
                            <div className='flex text-xs font-light text-[#484848]  flex-start font-montserrat'>(213) 555-0122</div>
                        </div>
                        <div className='grid grid-rows-2 gap-2'>
                            <div className='flex text-lg text-[#484848]  flex-start font-semibold font-montserrat' >Whats app</div>
                            <div className='flex text-xs font-light text-[#484848]  flex-start font-montserrat'>+213 555 0114 321</div>
                        </div>

                    </div>
                    <div className='grid grid-rows-2 mt-4 mb-4'>
                        <div className='grid grid-rows-2 gap-2'>
                            <div className='flex text-lg text-[#484848] flex-start font-semibold  font-montserrat' >Office</div>
                            <div className='flex text-xs font-light text-[#484848]  flex-start font-montserrat'>6000, Algiers, Algeria</div>
                        </div>
                        <div className='grid grid-rows-2 gap-2'>
                            <div className='flex text-lg text-[#484848]  flex-start font-semibold font-montserrat' >Email</div>
                            <div className='flex text-xs font-light text-[#484848] flex-start font-montserrat'>optifin@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 text-center font-montserrat  bg-[#F5F5F5]'>
                © 2024 Optifin. All rights reserved.
            </div>
        </>
    )
}