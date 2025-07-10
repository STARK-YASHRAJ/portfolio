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
      <section className=' py-10 bg-black'>
        <div className='w-[80%] mx-auto flex justify-between text-white'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-5xl font-bold'>
              I’m Rida Syed</h1>
            <h2 className='text-5xl font-bold text-yellow-500'>Expert Flutter Developer</h2>
            <p>I specialize in building high performance Flutter apps with clean architecture, responsive UI,<br /> and seamless cross platform functionality. Let’s transform your idea into a feature rich mobile<br /> app that users love.</p>
            <button className='self-start bg-yellow-500 rounded-lg py-3 px-3 hover:bg-slate-900 hover:text-white'>Download CV</button>
          </div>
          <div>
            <img className='h-[80%] w-full object-cover"' src={Portfolio_image.image} alt='' />
          </div>
        </div>
      </section>

      {/* 2nd section start here */}
      <section className='bg-white py-14'>
        <div className='flex gap-32 w-[80%] mx-auto'>
          <div>
            <div className='relative border-[20px] border-[#4C5865] w-[350px] h-[500px]'>
              <div className='absolute top-16 left-32 bg-yellow-500 w-[300px] h-[400px] '>

                <img className='object-cover h-full' src={Portfolio_image.image} alt='' />
              </div>

            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-slate-900 text-5xl font-bold'> - About</h1>
            <p>
              Meet the Flutter Developer behind the Screen. Building apps with passion and precision</p>
            <p>I’m a passionate Flutter developer dedicated to helping businesses grow through powerful mobile app development. I specialize in building high performance, cross platform Flutter applications for Android, iOS and Web Apps. With a focus on clean architecture, responsive layouts, and seamless performance, I deliver scalable and feature rich apps to match your business needs. Whether you’re launching a new idea or upgrading an existing app, I bring expertise in custom Flutter app development to bring your vision to life.</p>
            <p>I’m driven by challenges and enjoy developing innovative solutions. My goal is to understand your vision and transform it into a digital reality. Let’s work together to take your business to new heights in the digital world!</p>
            <div className='flex gap-5'>
              <button className='bg-yellow-500 text-xs py-2 px-2 hover:bg-slate-950 hover:text-white'>HIRE ME NOW</button>
              <button className='bg-sky-950 py-2 px-2 text-xs hover:bg-black hover:text-white'>VIEW RESUME</button>
            </div>

          </div>

        </div>
      </section>
      {/* 2nd section section end here */}

      {/* 3rd section start here */}
      <section className='py-10 bg-[#FCFCFC]'>
        <div className='w-[80%] mx-auto flex flex-col gap-10 '>
          <h1 className='text-center text-5xl text-slate-950 font-bold'>MY SKILL SET</h1>
          <p className='text-center'>Expertise & Proficiency: Flutter Development and UI/UX Design</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-gray-800'>
            <div>
              <h3 class="text-[#002366] font-bold">Flutter UI</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-xs text-black">
                  Responsive Design, Pixel-Perfect UI, Multiple Theme Support
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] font-bold">API Integration</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-xs text-black">
                  REST/RESTful, WebSocket, Multipart Form Data, API Testing
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] font-bold">State Management</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-xs text-black">
                  Riverpod, Provider , GetX
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-[#002366] font-bold">Firebase Integration</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[60%] flex items-center pl-2 text-xs text-black">
                  Firestore, Messaging, Functions, Storage, Authentication
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] font-bold">Database Management</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-xs text-black">
                  Scalable Database Solutions(Optimization, Data Structuring etc)
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-[#002366] font-bold">Version Control</h3>
              <div class="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                <div class="bg-yellow-400 h-full w-[80%] flex items-center pl-2 text-xs text-black">
                  Proficient in Git & GitHub(Version Control, Branching, Merging etc)
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='py-10'>
          <div className='relative h-[400px] overflow-hidden'>
            <img className='h-full w-full object-cover' src={Portfolio_image.image1} alt='' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-32'>
              <div>
                <FaCalendarAlt className='text-white text-6xl' />
                <p className='text-white text-5xl font-bold'>3+</p>
                <p className='text-white text-xl font-bold'>Years of Experience</p>
              </div>
              <div>
                <BsBookmark className='text-white text-6xl' />
                <p className='text-white text-5xl font-bold'>25+</p>
                <p className='text-white text-xl font-bold'>Projects Done</p>
              </div>
              <div>
                <IoMdHappy className='text-white text-6xl' />
                <p className='text-white text-5xl font-bold'>20+</p>
                <p className='text-white text-xl font-bold'>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section end here */}

      {/* 4th section start here */}
      <section className='w-[80%] mx-auto bg-white p-2 '>
        <div className='flex flex-col gap-5'>
          <h1 className='text-center text-[#022144] font-bold text-3xl'>SERVICES FIT YOUR NEEDS PERFECTLY</h1>
          <p className='text-center text-[#333333] font-semibold'>Discover a range of services designed to meet your unique needs. From app development<br />
            and maintenance to scalability, we’ve got you covered.</p>
          <div className='flex justify-center gap-10'>
            <div className='w-[400px] h-[300px] bg-white shadow-lg border border-gray-100'>
              <h1 className='px-[330px] mt-10 text-[#333333] text-3xl font-bold'>01.</h1>
              <div className='w-[330px] border border-gray-300 ml-10'></div>
              <div className='flex flex-col gap-4 items-center'>
                <h1 className='py-5 text-4xl'><FaLaptopCode /></h1>
                <h2 className='text-[#022144]  text-xl font-bold '>Flutter Development</h2>
                <p className='text-sm text-[#333333] text-center'>Transforming your ideas into seamless mobile experiences through innovative app development with Flutter</p>
              </div>
            </div>
            <div className='w-[400px] h-[300px] bg-white shadow-lg border border-gray-100'>
              <h1 className='px-[330px] mt-10 text-[#333333] text-3xl font-bold'>02.</h1>
              <div className='w-[330px] border border-gray-300 ml-10'></div>
              <div className='flex flex-col gap-4 items-center'>
                <h1 className='py-5 text-4xl '><HiMiniDevicePhoneMobile /></h1>
                <h2 className='font-bold text-[#022144]'>Flutter UI Development from Figma Design</h2>
                <p className='text-sm text-[#333333] text-center'>ransform your Figma design into a responsive and functional Flutter UI. Clean architecture, optimized performance, and design fidelity guaranteed</p>
              </div>
            </div>
          </div>

        </div>

      </section>
      {/* 4th section end here */}

      {/* 5th section start here */}
      <section className='bg-white py-16'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='text-center text-3xl font-bold text-[#1e2835]'>CLIENT REVIEWS</h1>
          <h4 className='text-[#151c25] font-medium'>Read what my satisfied clients have to say about their experiences with me.</h4>
          <div className='flex gap-5 '>
            <div className='w-[400px] h-[300px] bg-white border border-gray-300 rounded-lg shadow-lg'>
              <h5 className='mt-5 text-center text-[#1e2835] text-3xl font-bold'>01.</h5>
              <div className='border border-gray-100 w-[320px] ml-10'></div>
              <h1 className='text-center mt-5 text-[#1e2835]  font-medium'>Maquidu</h1>
              <ul className='flex mt-3 justify-center'>
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
              <p className='text-xs py-3 text-center text-[#3a4555] font-medium'>I am beyond impressed by Rida Syed. Her attention to detail, professionalism, and ability to bring my vision to life exceeded all expectations. I only give her a vague concept and she did a great job. Wow 😮 recommend!!!</p>
            </div>
            <div className='w-[400px] h-[300px] bg-white border border-gray-300 rounded-lg shadow-lg'>
              <h5 className='mt-5 text-center text-[#1e2835] text-3xl font-bold'>02.</h5>
              <div className='border border-gray-100 w-[320px] ml-10'></div>
              <h2 className='text-center mt-5 text-[#1e2835]  font-medium'>rebeccacharl658</h2>
              <ul className='flex mt-3 justify-center'>
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
              <p className='text-xs py-3 text-center text-[#3a4555] font-medium'>Amazing services. Rida syed delivered an exaptional flutter app According to my thoughts & ideas. She understood my needs of design did it perfectly. I will use her services again. I would recommend her services for fluter app development. Great work!!!!</p>
            </div>
            <div className='w-[400px] h-[300px] bg-white border border-gray-300 rounded-lg shadow-lg'>
              <h5 className='mt-5 text-center text-[#1e2835] text-3xl font-bold'>03.</h5>
              <div className='border border-gray-100 w-[320px] ml-10'></div>
              <h3 className='text-center mt-5 text-[#1e2835]  font-medium'>Natalie Kong</h3>
              <ul className='flex mt-3 justify-center'>
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
              <p className='text-xs py-3 text-center text-[#3a4555] font-medium'>Working with Rida was an amazing experience! She understood our requirements perfectly and built a smooth, fast, and beautiful Flutter app for our business. Communication was easy, and she delivered everything on time. Highly recommended for anyone looking for a reliable Flutter developer</p>
            </div>
          </div>
        </div>
      </section>
      {/* 5th section end here */}

      {/* 6th section start here */}
      <section className='bg-gray-50 py-10'>
        <div className='w-[80%] mx-auto'>
          <div className='flex flex-col gap-5'>
            <h1 className='py-9 text-center text-[#151c25] text-5xl font-bold'>MY WORK SHOWCASE</h1>
            <p className='text-center text-[#151c25] font-medium'>Check out my projects, from experiments to finished creations, there’s something for everyone!</p>
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
        <div className='w-[80%] mx-auto '>
          <ul className='flex text-center flex-col gap-5 '>
            <li className='text-[#151c25] text-4xl font-bold'>GET IN TOUCH</li>
            <li className='text-[#151c25] font-medium '>Looking to Grow Your Business through App Development?
              Let’s Chat for Tips!</li>
          </ul>
          <div className='mt-10 flex justify-between'>
            <div className=''>
              <ul className='flex items-center gap-2'>
                <li> <FaPhone className='text-gray-950 text-xl' /> </li>
                <li className='text-[#0f1620] font-bold text-xl'>Call Me ( whatsapp)</li>
              </ul>
              <h1 className='text-center text-gray-500 font-semibold'>+923206632809</h1>
              <ul className='items-center flex text-center gap-3 mt-5'>
                <li> <CiMail className='text-gray-950 text-2xl' /> </li>
                <li className='text-[#0f1620] font-bold text-xl'>mail Me</li>
              </ul>
              <p className='text-center text-gray-500 font-semibold'>ridasyed244@gmail.com</p>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-[#151c25] text-3xl font-bold'>Ready to Share Your Thoughts? Let's Start!</h1>
              <p className='text-[#1d2530]'>Got an innovative idea for app development, UI/UX design or web app<br /> development? Share your thoughts and let’s collaborate to turn your vision into reality.</p>
              <ul className='flex gap-10'>
                <li>
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="border border-gray-400 px-4 py-2 text-gray-700 w-full"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Your Email"
                    class="border border-gray-400 px-4 py-2 text-gray-700 w-full"
                  />
                </li>
              </ul>
              <textarea placeholder='Enter Your Message' rows={5} className='border border-gray-400 px-4 py-2 text-gray-700 w-full'></textarea>
              <button className='py-2 px-2 bg-yellow-500 rounded-lg text-white hover:bg-blue-700'>Send Me</button>
            </div>
          </div>
        </div>
      </section>
      {/* 7th section end here */}
    </>
  )
}

export default Herosection
