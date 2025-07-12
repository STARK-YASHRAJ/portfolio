import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10'>
            <div className='container flex flex-col mx-auto md:px-0 px-5'>
                <div className=' grid grid-cols-1 sm:grid-cols-3 md:flex-row gap-8'>
                    <div className='col-span-1 flex flex-col gap-8'>
                        <ul className='flex gap-2 items-center'>
                            <li className='w-1 h-8 bg-yellow100 '></li>
                            <li className='text-2xl text-gray-400 font-bold'>GET IN TOUCH</li>
                        </ul>
                        <ul>
                            <li className='font-semibold '>Email Address</li>
                            <li className='hover:text-yellow100 text-gray-400 cursor-pointer'>ridasyed244@gmail.com</li>
                        </ul>
                        <ul>
                            <li className='font-semibold '>Phone Number</li>
                            <li className='hover:text-yellow100 cursor-pointer text-gray-400'>+923206632809</li>
                        </ul>
                        <ul >
                            <li className='font-semibold'>Location</li>
                            <li className='hover:text-yellow100  cursor-pointer text-gray-400'>Faisalabad, Punjab, Pakistan</li>
                        </ul>

                    </div>
                    <div className='col-span-1 flex flex-col gap-5'>
                        <ul className='flex gap-2 items-center'>
                            <li className='w-1 h-8 bg-yellow100 '></li>
                            <li className='text-2xl font-bold text-gray-400'>ABOUT ME </li>
                        </ul>
                        <p className='text-gray-300/80 text-[17px] w-full md:w-5/6'>
                            I’m a passionate React JS and React Native developer ready to assist you in growing and expanding your business through modern web and mobile app development. With expertise in React JS and React Native, I can create high-quality, user-friendly applications tailored to your unique needs. Beyond coding, I excel in UI/UX design and specialize in crafting immersive and visually appealing user interfaces that exceed client expectations. My focus is always on delivering seamless user experiences and boosting user engagement.

                        </p>
                    </div>

                </div>
                <div className=' h-[0.5px]   bg-gray-500 my-8'></div>
                <div className=' flex sm:flex-row flex-col gap-3 justify-between'>
                    <div className='flex text-gray-300'>
                        <h1 className='hover:text-yellow-500 cursor-pointer'>Proudly powered by WordPress | {" "} Theme: Arrival by WPoperation</h1>

                    </div>
                    <div className='flex gap-5 text-2xl'>
                        <FaGithub className='text-gray-400' />
                        <FaInstagram className='text-gray-400' />
                        <FaLinkedinIn className='text-gray-400' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
