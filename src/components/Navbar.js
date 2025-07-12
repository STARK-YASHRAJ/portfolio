import CustomDrawer from './CustomDrawer'
import CustomButton from './CustomButton'

function Navbar() {
  const navList = ['Home', "Experience", "Skills", "Process", "Portfolio", "Contact"]
  return (
    <section className=' bg-white md:bg-black py-3 md:py-8'>
      <div className='container md:px-0 px-5 mx-auto text-white flex justify-between items-center'>
        <div>
          <h1 className='text-5xl font-semibold text-slate-800 md:text-white cursor-pointer'>
            R<span className='text-yellow100'>S</span>P
          </h1>
        </div>
        <div>
          <div className='hidden md:block'>
            <ul className='flex  md:gap-6 lg:gap-8 items-center font-semibold cursor-pointer'>
              {
                navList.map((row, index) =>
                  <li key={index} className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>{row}</li>
                )
              }
              <CustomButton title='Contact Me' className='rounded !px-6' />
            </ul>
          </div>
          <div className='block md:hidden'><CustomDrawer /></div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
