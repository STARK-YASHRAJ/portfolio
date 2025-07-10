import React from 'react'

function Navbar() {
  return (
    <section className=' bg-black py-8'>
     <div className='w-[80%] mx-auto text-white flex justify-between items-center'>
           <div>
            <h1 className='text-5xl font-semibold cursor-pointer'>RS</h1>
           </div>
           <div>
            <ul className='flex gap-8 items-center font-semibold cursor-pointer'>
                <li className='hover:underline underline-offset-8  decoration-yellow-500 decoration-2'>Home</li>
                <li className='hover:underline underline-offset-8  decoration-yellow-500 decoration-2'>Experience</li>
                <li className='hover:underline underline-offset-8  decoration-yellow-500 decoration-2'>Skills</li>
                <li className='hover:underline underline-offset-8  decoration-yellow-500 decoration-2'>Process</li>
                <li className='hover:underline underline-offset-8  decoration-yellow-500 decoration-2'>Portfolios</li>
                <li className='hover:underline underline-offset-8  decoration-yellow-500 decoration-2'>Contact</li>
                <button className='bg-yellow-500 rounded-lg py-2 px-3 hover:bg-slate-500 hover:text-white'>Contact Me</button>
            </ul>
           </div>
     </div>
    </section>
  )
}

export default Navbar
