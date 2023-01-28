import React from 'react';

function TimeBox({ time, text }) {
	return (
		<div className='w-[70px] flex flex-col relative p-2 items-center mx-2 justify-center md:mx-3 md:w-[120px] h-[100px] rounded-md shadow-md'>
			<p className='text-[24px] top-6 absolute text-gray-600 font-Anton font-semibold'>{time}</p>
			<p className='text-[18px] leading-5 font-Oswald text-[#2b65d9] absolute bottom-2'>{text}</p>
		</div>
	);
}

export default TimeBox;
