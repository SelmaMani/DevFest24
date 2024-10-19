import React from 'react';
import { team } from './data';
import about from 'assets/images/about.png'

function About() {
    return (
        <div className="w-full relative flex flex-col md:flex-row items-center justify-between bg-[#F5F5F5] px-[10px] md:px-[50px] py-[20px] md:py-[100px] gap-4 ">
            {/* top absolute image */}
            <img
                src={about}
                alt="About us"
                className="absolute top-[-30px] left-0 w-[150px] h-[138px] md:w-[269px] md:h-[247px] object-cover"  
            />

            {/* Left side: About Us Text */}
            <div className="flex flex-col items-center justify-center w-full md:w-[60%] gap-[10px] md:gap-[50px]">
                <h1 className="text-center p-4 font-fredoka text-[36px] md:text-[48px] text-[#5E35B1]">
                    About us
                </h1>
                <p className="text-center text-[#484848] leading-[2.5rem] font-montserrat font-semibold text-[24px] md:text-[28px]">
                    Optifin was built to help businesses of all sizes take control of their finances. With a focus on innovation, automation, and user-friendly design, our goal is to provide financial managers with the tools they need to track, optimize, and plan for success.
                </p>
            </div>

            {/* Right side: Team Images */}
            <div className="grid grid-cols-2 gap-8">
                {team.map((member, index) => (
                    <img
                        key={index}
                        src={member.image}
                        alt={`Team member ${index + 1}`}
                        className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-xl"
                    />
                ))}
            </div>

        </div>
    );
}

export default About;
