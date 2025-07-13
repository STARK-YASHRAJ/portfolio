import CustomDrawer from './CustomDrawer'
import CustomButton from './CustomButton'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
function Navbar({
  darkMode = false,
  toggleDarkMode = () => null
}) {
  const navList = ['Home', "Experience", "Skills", "Process", "Portfolio", "Contact"]
  return (
    <section className=' bg-white md:bg-black md:dark:bg-green-400 py-3 md:py-8'>
      <div className='container md:px-0 px-5 mx-auto text-white flex justify-between items-center'>
        <div>
          <h1 className='text-5xl font-semibold text-slate-800 md:text-white cursor-pointer'>
            R<span className='text-yellow100'>S</span>P
          </h1>
        </div>
        <div className='flex items-center gap-4'>
          <div className='hidden md:block'>
            <ul className='flex  md:gap-6 lg:gap-8 items-center font-semibold cursor-pointer'>
              {
                navList.map((row, index) =>
                  <li key={index}
                    onClick={() => {
                      const section = document.getElementById(row);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>{row}</li>
                )
              }

              <CustomButton onClick={() => {
                const section = document.getElementById('Contact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }} title='Contact Me' className='rounded !px-6' />

            </ul>
          </div>
          {/* {darkMode ? <MdDarkMode onClick={toggleDarkMode} size={30} className='dark:text-blue-500' /> : <MdOutlineLightMode onClick={toggleDarkMode} size={30} className='text-orange-300' />} */}
          <div className='block md:hidden'><CustomDrawer /></div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
