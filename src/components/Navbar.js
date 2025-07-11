import React from 'react'

function Navbar() {
  return (
    <section className=' bg-black pt-8'>
      <div className='container mx-auto text-white flex justify-between items-center'>
        <div>
          <h1 className='text-5xl font-semibold cursor-pointer'>RSP</h1>
        </div>
        <div>
          <ul className='flex gap-8 items-center font-semibold cursor-pointer'>
            <li className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>Home</li>
            <li className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>Experience</li>
            <li className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>Skills</li>
            <li className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>Process</li>
            <li className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>Portfolios</li>
            <li className='hover:underline underline-offset-[12px] transition delay-300 duration-500 ease-in-out  decoration-yellow-500 decoration-2'>Contact</li>
            <button className='bg-yellow-500 rounded py-2 px-5 transition delay-150 duration-300 ease-in-out hover:bg-slate-500 hover:text-white'>Contact Me</button>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
