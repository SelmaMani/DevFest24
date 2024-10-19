import React from 'react';
import PricingCard from './PricingCard'; // Assuming PricingCard is in the same directory
import { Swiper, SwiperSlide } from "swiper/react";

function Pricing() {
  const pricingData = [
    {
      title: 'Basic Plan',
      price: '$29',
      featuresList: ['Basic Expense Tracking', 'Email Support', 'Access to Mobile App' , 'Monthly Reporting'],
      bgColor: 'black',
      buttonContent: 'Choose quarterly plan',
    },
    {
      title: 'Pro Plan',
      price: '$49',
      featuresList: ['Advanced Expense Tracking', 'Priority Support', 'Access to Web & Mobile App' , 'Data Export Options (PDF, Excel, CSV)'],
      bgColor: '#1E88E5', 
      buttonContent: 'Choose yearly plan',
    },
    {
      title: 'Premium Plan',
      price: 'Custom ',
      featuresList: ['All Features', '24/7 Support', 'Unlimited Access' , 'Dedicated Account Manager'],
      bgColor: 'black', 
      buttonContent: 'Choose lifetime plan',
    },
  ];

  return (
    <div className='flex gap-14 flex-col justify-center items-center h-screen  to-white flex-wrap '>
         <p className=" text-[48px] text-[#1E88E5] text-center font-bold font-fredoka ">
        Pricing
        </p>
        <div className=' flex justify-center items-center gap-8'>
        {pricingData.map((card, index) => (
        <div>
            <PricingCard
          key={index}
          title={card.title}
          price={card.price}
          featuresList={card.featuresList}
          bgColor={card.bgColor}
          buttonContent={card.buttonContent}
        />
        </div>
      ))}
        </div>
    </div>
  );
}

export default Pricing;
