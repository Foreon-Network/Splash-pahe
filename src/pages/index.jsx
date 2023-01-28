import Icon from '@/components/Icon';
import ImageHeader from '@/components/ImageHeader';
import TimeBox from '@/components/TimeBox';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	let [days, setDays] = useState('00');
	let [hours, setHours] = useState('00');
	let [mins, setMins] = useState('00');
	let [secs, setSecs] = useState('00');
	const [display, setDisplay] = useState(false);
	let interval = useRef();

	// time counter function
	let startTimer = () => {
		let countdownDate = new Date('Apr 5, 2023 12:00:00').getTime();
		interval = setInterval(() => {
			let now = new Date().getTime();
			let distance = countdownDate - now;
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let secs = Math.floor((distance % (1000 * 60)) / 1000);
			if (distance < 0) {
				setDisplay(false);
			} else {
				setDisplay(true);
				setDays(days);
				setHours(hours);
				setMins(mins);
				setSecs(secs);
			}
		}, 1000);
	};
	// countdown functionality on load
	useEffect(() => {
		startTimer();
		const currentValue = interval.current;
		return () => {
			clearInterval(currentValue);
		};
	}, []);
	return (
		<>
			<Head>
				<title>Foreon</title>
			</Head>

			<div className='w-ful min-h-full max-h-full flex items-center bg-white py-6 justify-center flex-col'>
				<ImageHeader />
				<h1 className='text-5xl text-center font-[900] text-gray-900 font-Oswald my-8 md:text-[80px] md:leading-[50px]'>
					GOING LIVE IN
				</h1>
				{display && (
					<div className='flex my-6 items-center justify-center px-2'>
						<TimeBox time={days} text='days' />{' '}
						<span className='text-gray-800 text-2xl md:text-[30px]'>:</span>
						<TimeBox time={hours} text='hours' />{' '}
						<span className='text-gray-800 text-2xl md:text-[30px]'>:</span>
						<TimeBox time={mins} text='minutes' />{' '}
						<span className='text-gray-800 text-2xl md:text-[30px]'>:</span>
						<TimeBox time={secs} text='seconds' />
					</div>
				)}
				<button className='text-[15px] gradient mt-8  flex items-center font-semibold text-white w-[200px] justify-center px-16 py-3 rounded-[24px]'>
					Intro
					<i className='ri-arrow-right-line text-[18px] text-white ml-2'></i>
				</button>

				<p className='text-[18px] font-Oswald text-[#2b65d9] my-6 font-normal'>
					Follow Our Social Media Channels
				</p>

				<div className='w-full h-full flex items-center justify-center pb-14 px-2'>
					<Icon href={' https://twitter.com/foreonnetwork'} icon={'twitter'} />
					<Icon href={'https://t.me/foreonnetwork'} icon={'send-plane'} />
					<Icon href={'https://github.com/Foreon-Network'} icon={'github'} />
					<Icon href={'https://foreonnetwork.medium.com/'} icon={'medium'} />
					<Icon href={'https://www.reddit.com/r/foreonnetwork/'} icon={'reddit'} />
					<Icon href={''} icon={'discord'} />
				</div>
			</div>
		</>
	);
}
