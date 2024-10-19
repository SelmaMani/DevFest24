import React from 'react';

function PricingCard({
  buttonContent,
  featuresList,
  title,
  price,
  bgColor,
}) {
  // Determine text color based on background color
  const textColor = bgColor === 'black' ? 'text-white' : (bgColor === 'blue' ? 'text-black' : 'text-black');

  return (
    <div
      className={`flex flex-col justify-start items-center p-6 h-[500px] w-[300px] rounded-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`flex flex-col  gap-3 items-center py-5 ${textColor}`}>
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-[40px] font-bold font-montserrat'>{price}</p>
      </div>
      <div className='h-[1px] w-[95%] bg-gray-300 my-4'></div>
      <div className='flex flex-1 flex-col items-start self-stretch'>
        {/* Loop through featuresList */}
        {featuresList.map((feature, index) => (
          <p key={index} className={`${textColor} mb-2`}>+ {feature}</p>
        ))}
      </div>
      <button
        className={`mt-4 py-2 px-6 border bg-[#1E1E1E] self-stretch border-white rounded-[12px] text-white`}
      >
        {buttonContent}
      </button>
    </div>
  );
}

export default PricingCard;
