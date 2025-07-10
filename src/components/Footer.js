import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10'>
            <div className='w-[80%] mx-auto flex gap-[20%]'>
                <div className='flex flex-col gap-8'>
                    <ul className='flex gap-2 items-center'>
                        <li className='w-1 h-10 bg-yellow-400 '></li>
                        <li className='text-2xl font-bold'>GET IN TOUCH</li>
                    </ul>
                    <ul>
                        <li className='font-semibold'>Email Address</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>ridasyed244@gmail.com</li>
                    </ul>
                    <ul>
                        <li className='font-semibold'>Phone Number</li>
                        <li >+923206632809</li>
                    </ul>
                    <ul >
                        <li className='font-semibold'>Location</li>
                        <li>Faisalabad, Punjab, Pakistan</li>
                    </ul>

                </div>
                <div className='flex flex-col gap-5'>
                    <ul className='flex gap-2 items-center'>
                        <li className='w-1 h-10 bg-yellow-400 '></li>
                        <li className='text-2xl font-bold'>ABOUT ME </li>
                    </ul>
                    <p className='text-gray-300'>I’m a passionate Flutter developer ready to<br /> assist you in growing and expanding your business<br /> through app development. With expertise in<br /> Flutter, I can create high-quality, user-friendly <br />applications tailored to your needs. Beyond Flutter,<br /> I excel in UI/UX design. I specialize in designing<br /> immersive and visually appealing user interfaces <br />that exceed client expectations. My focus<br /> is always on enhancing user experience and<br /> engagement</p>
                </div>
                
            </div>
            <div className='w-[80%] mx-auto h-px  bg-gray-300 my-4'></div>
            <div className='w-[80%] mx-auto flex justify-between'>
                <div className='flex text-gray-300'>
                    <h1 className='hover:text-yellow-500 cursor-pointer'>Proudly powered by WordPress |</h1>
                    <h2> Theme: Arrival by WPoperation</h2>
                </div>
                <div className='flex gap-5 text-2xl'>
                    <FaGithub />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>
            </div>
        </footer>
    )
}

export default Footer
