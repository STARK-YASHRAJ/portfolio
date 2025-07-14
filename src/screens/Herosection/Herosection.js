import { Portfolio_image } from '../../assets/MediaCall'
import { FaCalendarAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { IoMdHappy } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import CustomButton from '../../components/CustomButton';
import Projects from '../../components/uiComponents/Projects';
import ContactUs from '../../components/uiComponents/ContactUs';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { skillData } from '../../utilities';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contaxts/ThemeContaxt';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const Herosection = () => {
  const { darkMode, toggleDarkMode, loading } = useContext(ThemeContext);

  const [showButton, setShowButton] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Match your transition duration
  };


  return (
    <>
      {showButton && (
        <div
          onClick={handleClick}
          className='h-20 w-11 z-50 rounded-full fixed bottom-4 right-4 flex items-center justify-center bg-yellow100 cursor-pointer'
        >
          <MdOutlineKeyboardDoubleArrowUp
            className={`text-white100 text-3xl transform transition-transform duration-200 ${isClicked ? '-translate-y-[3px]' : ''
              }`}
          />
        </div>
      )}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-dashed border-white rounded-full animate-spin"></div>
        </div>
      )}

      <section className=' bg-black'>
        <div className='container relative h-[calc(100vh-75px)] md:px-0 px-5 items-center mx-auto flex justify-between text-white'>
          <div className='flex z-50 flex-col gap-3 sm:gap-5' >
            <h1 className=' text-3xl md:text-2xl  lg:text-4xl xl:text-7xl font-bold'>
              <ReactTyped strings={["I’m YASHRAJ"]} typeSpeed={70}
                backSpeed={50}
                loop />
            </h1>
            <h2 className=' text-4xl md:text-5xl font-bold text-yellow100'> React Developer</h2>
            <p className='mt-2'>I specialize in building high performance React apps and Website with clean architecture, responsive UI,<br /> and seamless cross platform functionality. Let’s transform your idea into a feature rich mobile<br /> app and website that users love.</p>
            <div>
              <CustomButton title='Download CV' className='rounded !px-6' />
            </div>
          </div>
          <div className=' md:block hidden '>
            <img className='!w-[85%] mx-auto sm:w-[90%] md:w-[96%] mt-0 object-cover"' src={Portfolio_image.yash} alt='logo' />
          </div>
        </div>
      </section>


      <section className='bg-white py-12 md:py-16'>
        <div className='grid gap-7 md:gap-0 sm:gap-8 md:px-0 px-5 grid-cols-1 md:grid-cols-5 items-center border-b-2 border-gray-300 pb-16 container mx-auto'>
          <div className='md:col-span-2'>
            <div className='relative xl:border-[20px] xl:border-[#4C5865] xl:w-[390px] xl:h-[600px]'>
              <div className='xl:absolute xl:top-[70px] xl:left-10 bg-yellow100 overflow-hidden md:w-[360px] md:h-[500px] '>

                <img className='object-fill flex items-center mx-auto justify-center pt-14 relative overflow-hidden' src={Portfolio_image.yash} alt='' />
              </div>

            </div>
          </div>
          <div className='flex md:col-span-3 flex-col gap-8'>
            <div className='flex items-center gap-5'>
              <div className='h-0.5 w-12 bg-black rounded' />
              <h1 className='text-slate-700 text-xl md:text-5xl font-bold'> ABOUT ME</h1>
            </div>
            <p className='font-serif text-lg md:text-xl '>
              Meet the React Developer behind the Screen. Building apps and website with passion and precision</p>

            <p className='text-[16px] md:text-lg font-normal text-gray-500'>I’m a passionate React.js and React Native developer dedicated to helping businesses grow through modern web and mobile app development. I specialize in building high-performance, cross-platform applications for Android, iOS, and the web using React and React Native. With a focus on clean architecture, responsive design, and seamless performance, I deliver scalable, feature-rich apps tailored to your business needs. Whether you’re launching a new product or enhancing an existing app, I bring deep expertise in custom React and React Native development to bring your vision to life.
            </p>

            <p className='text-[16px] md:text-lg font-normal text-gray-500'>I’m driven by challenges and enjoy developing innovative solutions. My goal is to understand your vision and transform it into a digital reality. Let’s work together to take your business to new heights in the digital world!</p>
            <div className='flex gap-5'>
              <button className='bg-yellow100 text-xs sm:text-lg transition delay-150 duration-300 ease-in-out py-4  text-black px-8 hover:bg-slate-950 hover:text-gray-200'>HIRE ME NOW</button>
              <button className='bg-sky-950 text-xs sm:text-lg transition delay-150 hover:text-gray-200 duration-300 ease-in-out py-4 px-8 text-white  hover:bg-black '>VIEW RESUME</button>
            </div>

          </div>

        </div>
      </section>
      <section id='Skills' className='pb-10 bg-[#FCFCFC]'>
        <div className='container md:px-0 px-5 mx-auto flex flex-col gap-10 '>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1 className='text-center text-4xl sm:text-5xl text-slate-700 font-bold'>MY SKILL SET</h1>
            <div className='h-0.5 bg-yellow100 w-32 mt-3' />
            <div className='h-0.5 bg-yellow100 w-20' />

          </div>
          <p className='text-center text-sm sm:text-lg font-normal'>Expertise & Proficiency: React Development and Backend Development</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 pb-8  text-sm font-medium text-gray-800'>

            {
              skillData.map((row, index) =>
                <div key={index}>
                  <h3 className="text-[#002366] text-lg font-medium">{row.title}</h3>
                  <div className="relative bg-gray-200 h-6 rounded overflow-hidden mt-1">
                    <div className="bg-yellow100 h-full w-[80%] flex items-center pl-2 text-xs sm:text-sm text-gray-700 overflow-hidden whitespace-nowrap truncate">
                      {row.desc}
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className='py-10'>
          <div className='relative h-[500px] sm:h-[400px] flex items-center overflow-hidden bg-black bg-opacity-15'
            style={{ backgroundImage: `url(${Portfolio_image.image1})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>

            <div className=' grid grid-cols-1 sm:py-0 py-8 sm:gap-0 gap-8 sm:grid-cols-3  container m-auto'>
              <div className='text-center gap-1 sm:gap-2 flex flex-col items-center'>
                <FaCalendarAlt className='text-white text-4xl sm:text-8xl ' />
                <p className='text-white text-2xl sm:text-5xl font-bold'>0.7+</p>
                <p className='text-white text-xl sm:text-3xl font-bold'>"Less than 1 year of work experience and currently still working"
</p>
              </div>
              <div className='text-center gap-1 sm:gap-2 flex flex-col items-center'>
                <BsBookmark className='text-white text-4xl sm:text-8xl ' />
                <p className='text-white text-2xl sm:text-5xl font-bold'>10+</p>
                <p className='text-white text-xl sm:text-3xl font-bold'>Projects Done</p>
              </div>
              <div className='text-center gap-1 sm:gap-2 flex flex-col items-center'>
                <IoMdHappy className='text-white text-5xl sm:text-8xl ' />
                <p className='text-white text-2xl sm:text-5xl font-bold'>10+</p>
                <p className='text-white text-xl sm:text-3xl font-bold'>Happy Clients</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto bg-white p-2 '>
        <div className='flex flex-col sm:px-0 px-5 gap-6 sm:gap-8'>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1 className='text-center text-3xl sm:text-5xl text-slate-700 font-bold' id='Experience'>SERVICES FIT YOUR NEEDS PERFECTLY</h1>
            <div className='h-0.5 bg-yellow100 w-32 mt-3' />
            <div className='h-0.5 bg-yellow100 w-20' />

          </div>
          <p className='text-center text-sm sm:text-lg font-normal'>Discover a range of services designed to meet your unique needs. From app development<br className='sm:block hidden' />
            and maintenance to scalability, we’ve got you covered.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className=' bg-white shadow rounded-md border border-gray-100'>

              <div className='border-b border-gray-300'>
                <h1 className='text-end p-7 text-slate-700 text-4xl sm:text-6xl font-bold'>01.</h1>
              </div>
              <div className='flex flex-col pb-12 pt-8 gap-6 items-center'>
                <h1 className=' '><FaLaptopCode size={80} className='' /></h1>
                <h2 className='text-[#646465]  text-2xl font-bold '>React Development</h2>
                <p className='text-sm sm:text-lg text-[#333333] text-center w-3/4'>Transforming your ideas into seamless mobile experiences through innovative app development with React Native</p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-md border border-gray-200'>

              <div className='border-b border-gray-300'>
                <h1 className='text-end p-7 text-slate-700 text-4xl sm:text-6xl font-bold'>02.</h1>
              </div>
              <div className='flex flex-col pb-12 px-3 pt-8 gap-6 items-center'>
                <h1 className=' '><HiMiniDevicePhoneMobile size={80} className='' /></h1>
                <h2 className='text-[#646465]  text-2xl text-center font-bold '>React UI Development from Figma Design</h2>
                <p className='sm:text-lg text-[17px] text-[#333333] text-center w-full sm:w-3/4'>Transforming your ideas into seamless website experiences through innovative website development with React JS</p>
              </div>
            </div>


          </div>

        </div>

      </section>
      <section id='Experience' className='bg-white py-16 sm:px-0 px-5'>
        <div className='flex container mx-auto flex-col gap-10 justify-center items-center'>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <h1  className='text-center text-3xl sm:text-5xl text-slate-700 font-bold'>CLIENT REVIEWS</h1>
            <div className='h-0.5 bg-yellow100 w-32 mt-3' />
            <div className='h-0.5 bg-yellow100 w-20' />

          </div>
          <h4 className='text-lg text-[#333333] text-center  sm:w-3/4'>Read what my satisfied clients have to say about their experiences with me.</h4>
          <div className='grid grid-cols-1  md:grid-cols-3 gap-5 '>
            <div className=' bg-white border border-gray-200 rounded-lg shadow'>

              <div className='border-b border-gray-200 py-5'>
                <h5 className='text-center text-[#1e2835] text-3xl font-bold'>01.</h5>
              </div>
              <h1 className='text-center mt-5 text-[#636465] text-xl  font-medium'>Maquidu</h1>
              <ul className='flex mt-3 gap-1 justify-center'>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
              </ul>
              <p className='text-sm py-3 text-[#3a4555] px-5 pb-8 font-normal text-justify'>I am beyond impressed by Rida Syed. Her attention to detail, professionalism, and ability to bring my vision to life exceeded all expectations. I only give her a vague concept and she did a great job. Wow 😮 recommend!!!</p>
            </div>
            <div className=' bg-white border border-gray-200 rounded-lg shadow'>

              <div className='border-b border-gray-200 py-5'>
                <h5 className='text-center text-[#1e2835] text-3xl font-bold'>01.</h5>
              </div>
              <h1 className='text-center mt-5 text-[#636465] text-xl  font-medium'>Hasan Ali</h1>
              <ul className='flex mt-3 gap-1 justify-center'>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
              </ul>
              <p className='text-sm py-3 text-[#3a4555] px-5 pb-8 font-normal text-justify'>Amazing services. Ram delivered an exaptional flutter app According to my thoughts & ideas. She understood my needs of design did it perfectly. I will use her services again. I would recommend her services for fluter app development. Great work!!!!</p>
            </div>
            <div className=' bg-white border border-gray-200 rounded-lg shadow'>

              <div className='border-b border-gray-200 py-5'>
                <h5 className='text-center text-[#1e2835] text-3xl font-bold'>03.</h5>
              </div>
              <h1 className='text-center mt-5 text-[#636465] text-xl  font-medium'>Shivam Tiwari</h1>
              <ul className='flex mt-3 gap-1 justify-center'>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
                <li>
                  <FaStar className='text-yellow100 text-xl' />
                </li>
              </ul>
              <p className='text-sm py-3 text-[#3a4555] px-5 pb-8 font-normal text-justify'>Working with YASHRAJ was an amazing experience! She understood our requirements perfectly and built a smooth, fast, and beautiful Flutter app for our business. Communication was easy, and she delivered everything on time. Highly recommended for anyone looking for a reliable Flutter developer</p>
            </div>
          </div>
        </div>
      </section>
      <section className=' border-t-2 border-gray-200 pt-12'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-8 md:px-0 px-5'>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <h1 className='text-center text-3xl sm:text-5xl text-slate-700 font-bold' id='Portfolio'>MY WORK SHOWCASE</h1>
              <div className='h-0.5 bg-yellow100 w-32 mt-3' />
              <div className='h-0.5 bg-yellow100 w-20' />

            </div>
            <p className='text-lg text-[#535151] text-center  '>Check out my projects, from experiments to finished creations, there’s something for everyone!</p>
            <div className='flex justify-center gap-5 py-5'>
              <Projects />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Herosection
