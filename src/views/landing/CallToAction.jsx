import React from 'react'
import { IconArrowNarrowRight, } from '@tabler/icons-react';

IconArrowNarrowRight

function CallToAction() {
  return (
      <div className="w-[85%] m-6 flex flex-col  py-[20px] md:py-[100px] justify-center items-center border border-gray-400 rounded-[30px] gap-[40px]">
            <h1 className="text-black text-[24px] md:text-[36px] text-center md:text-right leading-[2rem] ">
                Ready to take Optifin for a spin?
            </h1>
          <div className="flex flex-col p-4 md:flex-row">
            {/* schedule a demo */}
                <div className="flex flex-col items-start justify-center gap-4 p-4 border border-gray-400 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
                  <p className="text-[#131313] font-montserrat text-[20px] "> Schedule a demo</p>
                  <p className="text-[#606060] text-[16px] font-montserrat">We are gladly helping companies to get started.</p>
                  <button className="p-2 text-white bg-black rounded-xl ">Schedule a Demo</button>
            </div>
            {/* try it yourself */}
              <div className="flex flex-col items-start justify-center gap-4 p-4 border border-gray-400 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
                  <p className="text-[#131313] font-montserrat text-[20px] "> Try it out yourself</p>
                  <p className="text-[#606060] text-[16px] font-montserrat">We have made it as easy as possible to try Optifin.</p>
                    <button className="p-2 flex justify-center items-center text-white bg-black rounded-xl ">
                        Start now
                     <IconArrowNarrowRight></IconArrowNarrowRight>
                  </button>
              </div>
          </div>
      
    </div>
  )
}

export default CallToAction
