import React from 'react';

function Icon({ href, icon }) {
	return (
		<a
			href={href}
			target='_blank'
			className='w-[50px] h-[50px] flex items-center duration-300 hover:text-white justify-center mx-auto md:mx-5 rounded-[50%] shadow-md bg-gray-50'
		>
			<i className={`ri-${icon}-fill text-[20px]  hover:text-[#2b65d9] text-gray-800`}></i>
		</a>
	);
}

export default Icon;
