import React from 'react'
import { Portfolio_image } from '../../assets/MediaCall'
import { FaGooglePlay } from 'react-icons/fa'
import { BsApple, BsQrCode } from 'react-icons/bs'

export default function Projects() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                [1, 2, 3, 4, 5, 6]?.map((IoMdHeartEmpty, index) =>
                    <div className='border border-gray-300 hover:bg-gray-200 hover:border-gray-400 flex flex-col gap-3 p-5 bg-gray-100 shadow-lg rounded-lg hover:border-none '>
                        <h1 className='text-center  text-slate-700 text-3xl font-bold'>Marquee Fantasy</h1>
                        <h2 className='text-center  text-[#6e6f72] font-medium'>(Live on Apple & Play Store)</h2>
                        <div className='flex items-center justify-center rounded-lg'>
                            <img className='h-full ' src={Portfolio_image.simage} alt='' />
                        </div>
                        <p className='text-center pt-4 text-[18px] text-[#3d3e3f] font-medium'>I worked as an employee (Freelancer) on the Marquee App, contributing to major complex parts like game functionality, cloud functions, trade functionality and movie related features.</p>
                        <ul className='flex justify-center gap-1'>
                            <li className='text-xl font-bold hover:text-gray-800'>App Link:</li>
                            <li>(Click Below 👇)</li>
                        </ul>
                        <p className='text-center text-blue-500 sm:text-lg text-xs font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=com.plumcloud.marquee&hl=en&pli=1</p>
                        <ul className='flex justify-center items-center gap-5'>
                            <li> <FaGooglePlay className='text-3xl sm:text-4xl ' /> </li>
                            <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                            <li> <BsQrCode className='text-3xl sm:text-4xl ' /> </li>
                        </ul>
                        <ul className='flex justify-center items-center gap-5'>
                            <li> <BsApple className='text-5xl ' /> </li>
                            <li className='text-3xl text-gray-600 font-medium'>Apple Store</li>
                            <li> <BsQrCode className='text-3xl sm:text-4xl ' /> </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
