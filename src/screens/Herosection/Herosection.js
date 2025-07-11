import React from 'react'
import { Portfolio_image } from '../../assets/MediaCall'
import { FaCalendarAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { IoMdHappy } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Herosection = () => {
  return (
    <>
      <section className=' bg-black'>
        <div className='container h-screen items-center mx-auto flex justify-between text-white'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-7xl font-bold'>
              I’m Ram Sakal Patel</h1>
            <h2 className='text-5xl font-bold text-yellow-500'>Expert React Developer</h2>
            <p>I specialize in building high performance React apps and Website with clean architecture, responsive UI,<br /> and seamless cross platform functionality. Let’s transform your idea into a feature rich mobile<br /> app and website that users love.</p>
            <button className='self-start bg-yellow-500 transition delay-150 duration-300 ease-in-out rounded py-3 px-6 hover:bg-slate-900 hover:text-white'>Download CV</button>
          </div>
          <div>
            <img className='h-[80%] w-full object-cover"' src={Portfolio_image.man} alt='logo' />
          </div>
        </div>
      </section>

      {/* 2nd section start here */}
      <section className='bg-white py-16'>
        <div className='grid grid-cols-5 items-center border-b-2 border-gray-300 pb-16 container mx-auto'>
          <div className='col-span-2'>
            <div className='relative border-[20px] border-[#4C5865] w-[390px] h-[600px]'>
              <div className='absolute top-[70px] left-10 bg-yellow-500 overflow-hidden w-[360px] h-[500px] '>

                <img className='object-cover flex items-center justify-center pt-14 relative overflow-hidden' src={Portfolio_image.man} alt='' />
              </div>

            </div>
          </div>
          <div className='flex col-span-3 flex-col gap-8'>
            <div className='flex items-center gap-5'>
              <div className='h-0.5 w-12 bg-black rounded' />
              <h1 className='text-slate-700 text-5xl font-bold'> ABOUT ME</h1>
            </div>
            <p className='font-serif text-xl '>
              Meet the React Developer behind the Screen. Building apps and website with passion and precision</p>

            <p className='text-lg font-normal text-gray-500'>I’m a passionate React.js and React Native developer dedicated to helping businesses grow through modern web and mobile app development. I specialize in building high-performance, cross-platform applications for Android, iOS, and the web using React and React Native. With a focus on clean architecture, responsive design, and seamless performance, I deliver scalable, feature-rich apps tailored to your business needs. Whether you’re launching a new product or enhancing an existing app, I bring deep expertise in custom React and React Native development to bring your vision to life.
            </p>

            <p className='text-lg font-normal text-gray-500'>I’m driven by challenges and enjoy developing innovative solutions. My goal is to understand your vision and transform it into a digital reality. Let’s work together to take your business to new heights in the digital world!</p>
            <div className='flex gap-5'>
              <button className='bg-yellow-500 text-lg transition delay-150 duration-300 ease-in-out py-4  text-black px-8 hover:bg-slate-950 hover:text-gray-200'>HIRE ME NOW</button>
              <button className='bg-sky-950 transition delay-150 hover:text-gray-200 duration-300 ease-in-out py-4 px-8 text-white text-lg hover:bg-black '>VIEW RESUME</button>
            </div>

          </div>

        </div>
      </section>
      {/* 2nd section section end here */}

      {/* 3rd section start here */}
      <section className='pb-10 bg-[#FCFCFC]'>
        <div className='container mx-auto flex flex-col gap-10 '>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1 className='text-center text-5xl text-slate-700 font-bold'>MY SKILL SET</h1>
            <div className='h-0.5 bg-yellow-400 w-32 mt-3' />
            <div className='h-0.5 bg-yellow-400 w-20' />

          </div>
          <p className='text-center text-lg font-normal'>Expertise & Proficiency: React Development and Backend Development</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 text-sm font-medium text-gray-800'>
            <div>
              <h3 class="text-[#002366] text-lg font-medium">React UI</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-sm text-gray-700">
                  Responsive Design, Pixel-Perfect UI, Multiple Theme Support
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] text-lg font-medium">API Integration</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-sm text-gray-700">
                  REST/RESTful, WebSocket, Multipart Form Data, API Testing
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] text-lg font-medium">State Management</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-sm text-gray-700">
                  Redux & Redux toolkit, Contaxt API
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-[#002366] text-lg font-medium">Backend</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[60%] flex items-center pl-2 text-sm text-gray-700">
                  Node JS, Express Js
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] text-lg font-medium">Database Management</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-sm text-gray-700">
                  MongoDB
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] text-lg font-medium">Version Control</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-sm text-gray-700">
                  Proficient in Git & GitHub(Version Control, Branching, Merging etc)
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] text-lg font-medium">UI Library</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-sm text-gray-700">
                  Tailwind CSS, Bootstrap, Material UI, Tan Stack,
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='py-10'>
          <div className='relative h-[400px] flex items-center overflow-hidden bg-black bg-opacity-15'
            style={{ backgroundImage: `url(${Portfolio_image.image1})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            {/* <img className='h-full w-full object-cover' src={Portfolio_image.image1} alt='' /> */}
            <div className=' flex justify-between items-center container m-auto'>
              <div className='text-center gap-2 flex flex-col items-center'>
                <FaCalendarAlt className='text-white text-8xl ' />
                <p className='text-white text-5xl font-bold'>1.6+</p>
                <p className='text-white text-3xl font-bold'>Years of Experience</p>
              </div>
              <div className='text-center gap-2 flex flex-col items-center'>
                <BsBookmark className='text-white text-8xl ' />
                <p className='text-white text-5xl font-bold'>10+</p>
                <p className='text-white text-3xl font-bold'>Projects Done</p>
              </div>
              <div className='text-center gap-2 flex flex-col items-center'>
                <IoMdHappy className='text-white text-8xl ' />
                <p className='text-white text-5xl font-bold'>10+</p>
                <p className='text-white text-3xl font-bold'>Happy Clients</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* 3rd section end here */}

      {/* 4th section start here */}
      <section className='container mx-auto bg-white p-2 '>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1 className='text-center text-5xl text-slate-700 font-bold'>SERVICES FIT YOUR NEEDS PERFECTLY</h1>
            <div className='h-0.5 bg-yellow-400 w-32 mt-3' />
            <div className='h-0.5 bg-yellow-400 w-20' />

          </div>
          <p className='text-center text-lg font-normal'>Discover a range of services designed to meet your unique needs. From app development<br />
            and maintenance to scalability, we’ve got you covered.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className=' bg-white shadow-lg rounded-md border border-gray-200'>

              <div className='border-b border-gray-300'>
                <h1 className='text-end p-7 text-slate-700 text-6xl font-bold'>01.</h1>
              </div>
              <div className='flex flex-col pb-12 pt-8 gap-6 items-center'>
                <h1 className=' '><FaLaptopCode size={80} className='' /></h1>
                <h2 className='text-[#646465]  text-2xl font-bold '>React Development</h2>
                <p className='text-lg text-[#333333] text-center w-3/4'>Transforming your ideas into seamless mobile experiences through innovative app development with React Native</p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-md border border-gray-200'>

              <div className='border-b border-gray-300'>
                <h1 className='text-end p-7 text-slate-700 text-6xl font-bold'>02.</h1>
              </div>
              <div className='flex flex-col pb-12 pt-8 gap-6 items-center'>
                <h1 className=' '><HiMiniDevicePhoneMobile size={80} className='' /></h1>
                <h2 className='text-[#646465]  text-2xl font-bold '>React UI Development from Figma Design</h2>
                <p className='text-lg text-[#333333] text-center w-3/4'>Transforming your ideas into seamless website experiences through innovative website development with React JS</p>
              </div>
            </div>


          </div>

        </div>

      </section>
      {/* 4th section end here */}

      {/* 5th section start here */}
      <section className='bg-white pt-16'>
        <div className='flex container mx-auto border-b  border-gray-300 pb-20 flex-col gap-10 justify-center items-center'>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1 className='text-center text-5xl text-slate-700 font-bold'>CLIENT REVIEWS</h1>
            <div className='h-0.5 bg-yellow-400 w-32 mt-3' />
            <div className='h-0.5 bg-yellow-400 w-20' />

          </div>
          <h4 className='text-lg text-[#333333] text-center w-3/4'>Read what my satisfied clients have to say about their experiences with me.</h4>
          <div className='grid grid-cols-3 gap-5 '>
            <div className=' bg-white border border-gray-300 rounded-lg shadow-lg'>

              <div className='border-b border-gray-200 py-5'>
                <h5 className='text-center text-[#1e2835] text-3xl font-bold'>01.</h5>
              </div>
              <h1 className='text-center mt-5 text-[#636465] text-xl  font-medium'>Maquidu</h1>
              <ul className='flex mt-3 gap-1 justify-center'>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
              </ul>
              <p className='text-sm py-3 text-[#3a4555] px-5 pb-8 font-normal text-justify'>I am beyond impressed by Rida Syed. Her attention to detail, professionalism, and ability to bring my vision to life exceeded all expectations. I only give her a vague concept and she did a great job. Wow 😮 recommend!!!</p>
            </div>
            <div className=' bg-white border border-gray-300 rounded-lg shadow-lg'>

              <div className='border-b border-gray-200 py-5'>
                <h5 className='text-center text-[#1e2835] text-3xl font-bold'>01.</h5>
              </div>
              <h1 className='text-center mt-5 text-[#636465] text-xl  font-medium'>Hasan Ali</h1>
              <ul className='flex mt-3 gap-1 justify-center'>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
              </ul>
              <p className='text-sm py-3 text-[#3a4555] px-5 pb-8 font-normal text-justify'>Amazing services. Ram delivered an exaptional flutter app According to my thoughts & ideas. She understood my needs of design did it perfectly. I will use her services again. I would recommend her services for fluter app development. Great work!!!!</p>
            </div>
            <div className=' bg-white border border-gray-300 rounded-lg shadow-lg'>

              <div className='border-b border-gray-200 py-5'>
                <h5 className='text-center text-[#1e2835] text-3xl font-bold'>03.</h5>
              </div>
              <h1 className='text-center mt-5 text-[#636465] text-xl  font-medium'>Shivam Tiwari</h1>
              <ul className='flex mt-3 gap-1 justify-center'>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow-400 text-xl' />
                </li>
              </ul>
              <p className='text-sm py-3 text-[#3a4555] px-5 pb-8 font-normal text-justify'>Working with Rida was an amazing experience! She understood our requirements perfectly and built a smooth, fast, and beautiful Flutter app for our business. Communication was easy, and she delivered everything on time. Highly recommended for anyone looking for a reliable Flutter developer</p>
            </div>
          </div>
        </div>
      </section>
      {/* 5th section end here */}

      {/* 6th section start here */}
      <section className='bg-gray-50 py-10'>
        <div className='w-[80%] mx-auto'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <h1 className='text-center text-5xl text-slate-700 font-bold'>MY WORK SHOWCASE</h1>
              <div className='h-0.5 bg-yellow-400 w-32 mt-3' />
              <div className='h-0.5 bg-yellow-400 w-20' />

            </div>
            <p className='text-lg text-[#333333] text-center  '>Check out my projects, from experiments to finished creations, there’s something for everyone!</p>
            <div className='flex justify-center gap-5 py-5'>
              <div className='flex flex-col gap-4 cursor-pointer'>
                <div className='w-[500px] h-[800px] border border-black bg-gray-200 shadow-lg rounded-lg hover:border-none '>
                  <h1 className='text-center py-5 text-[#151c25] text-2xl font-medium'>Marquee Fantasy</h1>
                  <h2 className='text-center py-5 text-[#151c25] font-medium'>(Live on Apple & Play Store)</h2>
                  <div className='w-[400px] h-[300px] bg-white border border-gray-400 ml-12 rounded-lg'>
                    <img className='h-full ' src={Portfolio_image.simage} alt='' />
                  </div>
                  <p className='text-center text-sm text-[#151c25] font-medium py-5'>I worked as an employee (Freelancer) on the Marquee App, contributing to major complex parts like game functionality, cloud functions, trade functionality and movie related features.</p>
                  <ul className='flex justify-center gap-1'>
                    <li className='text-xl font-bold hover:text-blue-400'>App Link:</li>
                    <li>(Click Below 👇)</li>
                  </ul>
                  <p className='text-center text-blue-500 font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=com.plumcloud.marquee&hl=en&pli=1</p>
                  <ul className='flex justify-center py-5 items-center gap-5'>
                    <li> <FaGooglePlay className='text-4xl ' /> </li>
                    <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                    <li> <BsQrCode className='text-4xl ' /> </li>
                  </ul>
                  <ul className='flex justify-center py-5 items-center gap-5'>
                    <li> <BsApple className='text-5xl ' /> </li>
                    <li className='text-3xl text-gray-600 font-medium'>Apple Store</li>
                    <li> <BsQrCode className='text-4xl ' /> </li>
                  </ul>
                </div>
                <div className='w-[500px] h-[800px] border border-black bg-gray-200 shadow-lg rounded-lg hover:border-none'>
                  <h1 className='text-center py-5 text-[#151c25] text-2xl font-medium'>FP Investment App​</h1>
                  <p className='text-center font-medium'>(Live on Play Store)</p>
                  <div className='w-[400px] h-[300px] bg-white border border-gray-400 ml-12 rounded-lg mt-5'>
                    <img className='h-full ' src={Portfolio_image.s3image} alt='' />
                  </div>
                  <p className='text-center text-sm text-[#151c25] font-medium py-5'>I worked as an employee (Freelancer), I developed this app from scratch, handling both frontend and backend development. Ensuring seamless profile management for both User & Admin, transaction tracking, and vault functionalities.</p>
                  <ul className='flex justify-center gap-1'>
                    <li className='text-xl font-bold hover:text-blue-400'>App Link:</li>
                    <li>(Click Below 👇)</li>
                  </ul>
                  <p className='text-center text-blue-500 font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=com.arsync.fpinvestmentapp&hl=en</p>
                  <ul className='flex justify-center py-5 items-center gap-5'>
                    <li> <FaGooglePlay className='text-4xl ' /> </li>
                    <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                    <li> <BsQrCode className='text-4xl ' /> </li>
                  </ul>
                </div>
                <div className='w-[500px] h-[800px] border border-black bg-gray-200 shadow-lg rounded-lg hover:border-none'>
                  <h1 className='text-center py-5 text-[#151c25] text-2xl font-medium'>KissnTells App</h1>
                  <p className='text-center font-medium'>(Live on Play Store)</p>
                  <div className='w-[400px] h-[300px] bg-white border border-gray-400 ml-12 rounded-lg mt-5'>
                    <img className='h-full ' src={Portfolio_image.s5image} alt='' />
                  </div>
                  <p className='text-center text-sm text-[#151c25] font-medium py-5'>I contributing by handling UI implementation and API integrations. I worked on building features like real time feeds, anonymous sharing, chat rooms, shorts functionality and user engagement tools.</p>
                  <ul className='flex justify-center gap-1'>
                    <li className='text-xl font-bold hover:text-blue-400'>App Link:</li>
                    <li>(Click Below 👇)</li>
                  </ul>
                  <p className='text-center text-blue-500 font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=com.app.kissntells&hl=en</p>
                  <ul className='flex justify-center py-5 items-center gap-5'>
                    <li> <FaGooglePlay className='text-4xl ' /> </li>
                    <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                    <li> <BsQrCode className='text-4xl ' /> </li>
                  </ul>
                </div>

              </div>
              <div className='flex flex-col gap-4 cursor-pointer'>
                <div className='w-[500px] h-[800px] border border-black bg-gray-200 shadow-lg rounded-lg hover:border-none'>
                  <ul className='flex items-center justify-center py-5 gap-5'>
                    <li> <FaCalculator className='text-4xl' /> </li>
                    <li className='text-xl text-[#151c25] font-bold'>MATH SOLOVER-AI homework helper</li>
                  </ul>
                  <p className='text-center font-medium'>(Live on Play Store)</p>
                  <div className='w-[400px] h-[300px] bg-white border border-gray-400 ml-12 rounded-lg mt-5'>
                    <img className='h-full ' src={Portfolio_image.s2image} alt='' />
                  </div>
                  <p className='text-center text-sm text-[#151c25] font-medium py-5'>I worked as a freelancer on Math Solver AI app. I built the frontend and backend from scratch, and added AI features. This app helps students solve math problems by scanning handwritten or typed questions. It gives step-by-step answers and supports many math topics, including graphs.</p>
                  <ul className='flex justify-center gap-1'>
                    <li className='text-xl font-bold hover:text-blue-400'>App Link:</li>
                    <li>(Click Below 👇)</li>
                  </ul>
                  <p className='text-center text-blue-500 font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=org.aigeeks.mathsolver</p>
                  <ul className='flex justify-center py-5 items-center gap-5'>
                    <li> <FaGooglePlay className='text-4xl ' /> </li>
                    <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                    <li> <BsQrCode className='text-4xl ' /> </li>
                  </ul>
                </div>

                <div className='w-[500px] h-[800px] border border-black bg-gray-200 shadow-lg rounded-lg hover:border-none'>
                  <h1 className='text-center py-5 text-[#151c25] text-2xl font-medium'>AI Logo Maker</h1>
                  <p className='text-center font-medium'>(Live on Play Store)</p>
                  <div className='w-[400px] h-[300px] bg-white border border-gray-400 ml-12 rounded-lg mt-5'>
                    <img className='h-full ' src={Portfolio_image.s4image} alt='' />
                  </div>
                  <p className='text-center text-sm text-[#151c25] font-medium py-5'>I developed this app from scratch, handling frontend UI development and backend API integrations. I built features that allow users to create professional quality logos using AI by selecting styles, colors, icons, and exporting high resolution designs.</p>
                  <ul className='flex justify-center gap-1'>
                    <li className='text-xl font-bold hover:text-blue-400'>App Link:</li>
                    <li>(Click Below 👇)</li>
                  </ul>
                  <p className='text-center text-blue-500 font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=com.org.ai.logo.maker&hl=en</p>
                  <ul className='flex justify-center py-5 items-center gap-5'>
                    <li> <FaGooglePlay className='text-4xl ' /> </li>
                    <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                    <li> <BsQrCode className='text-4xl ' /> </li>
                  </ul>
                </div>
                <div className='w-[500px] h-[800px] border border-black bg-gray-200 shadow-lg rounded-lg hover:border-none'>
                  <h1 className='text-center py-3  text-[#151c25] text-2xl font-medium'>Icy Vibes App</h1>
                  <h2 className='text-center py-2 text-[#151c25] font-medium'>(Live on Apple & Play Store)</h2>
                  <div className='w-[400px] h-[300px] bg-white border border-gray-400 ml-12 rounded-lg mt-3'>
                    <img className='h-full ' src={Portfolio_image.s6image} alt='' />
                    <p className='text-center text-sm text-[#151c25] font-medium py-5'>I developed this app from scratch, handling frontend UI development and backend API integrations. I built features that allow users to create professional quality logos using AI by selecting styles, colors, icons, and exporting high resolution designs.</p>
                    <ul className='flex justify-center gap-1'>
                      <li className='text-xl font-bold hover:text-blue-400'>App Link:</li>
                      <li>(Click Below 👇)</li>
                    </ul>
                    <p className='text-center text-blue-500 font-semibold hover:text-blue-400'>https://play.google.com/store/apps/details?id=ca.icyvibes</p>
                    <ul className='flex justify-center py-5 items-center gap-5'>
                      <li> <FaGooglePlay className='text-4xl ' /> </li>
                      <li className='text-3xl text-gray-600 font-medium'>Google Play</li>
                      <li> <BsQrCode className='text-4xl ' /> </li>
                    </ul>
                    <ul className='flex justify-center py-5 items-center gap-5'>
                      <li> <BsApple className='text-5xl ' /> </li>
                      <li className='text-3xl text-gray-600 font-medium'>Apple Store</li>
                      <li> <BsQrCode className='text-4xl ' /> </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6th section end here */}

      {/* 7th section start here */}
      <section className='bg-white py-10'>
        <div className='container flex flex-col gap-8 mx-auto '>

          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1 className='text-center text-5xl text-slate-700 font-bold'>GET IN TOUCH</h1>
            <div className='h-0.5 bg-yellow-400 w-32 mt-3' />
            <div className='h-0.5 bg-yellow-400 w-20' />
          </div>


          <p className='text-lg text-[#333333] text-center  '>Looking to Grow Your Business through App Development?
            Let’s Chat for Tips!
          </p>
          <div className='mt-10 grid grid-cols-2'>
            <div className=''>
              <ul className='flex items-center gap-2'>
                <li> <FaPhone className='text-gray-700 text-xl' /> </li>
                <li className='text-gray-700 font-bold text-xl'>Call Me ( whatsapp)</li>
              </ul>
              <h1 className='pl-7 pt-1 text-gray-500 font-semibold'>+923206632809</h1>
              <ul className='items-center flex text-center gap-2 mt-5'>
                <li> <CiMail className='text-gray-700 text-2xl' /> </li>
                <li className='text-gray-700 font-bold text-xl'>Gmail Me</li>
              </ul>
              <p className='pl-7 text-gray-500 font-semibold'>ridasyed244@gmail.com</p>
            </div>
            <div className='flex flex-col gap-8'>
              <h1 className='text-slate-700 text-3xl font-bold'>Ready to Share Your Thoughts? Let's Start!</h1>
              <p className='text-[#515253]'>Got an innovative idea for app development, UI/UX design or web app<br /> development? Share your thoughts and let’s collaborate to turn your vision into reality.</p>
              <div className='flex gap-10'>

                <input
                  type="text"
                  placeholder="Your Name"
                  class="border border-gray-400 placeholder:text-gray-500 placeholder:font-medium px-4 py-2 text-gray-700 w-full"
                />

                <input
                  type="text"
                  placeholder="Your Email"
                  class="border border-gray-400 placeholder:text-gray-500 placeholder:font-medium px-4 py-2 text-gray-700 w-full"
                />
              </div>
              <textarea placeholder='Enter Your Message' rows={5} className='placeholder:text-gray-500 placeholder:font-medium border border-gray-400 px-4 py-2 text-gray-700 w-full'></textarea>
              <button className='py-3 px-2 w-44 bg-yellow-500 rounded transition delay-150 duration-300 ease-in-out text-white hover:bg-slate-700'>Send Me</button>
            </div>
          </div>
        </div>
      </section>
      {/* 7th section end here */}
    </>
  )
}

export default Herosection
