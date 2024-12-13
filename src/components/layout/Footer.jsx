import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white'>
        <div className='flex justify-between items-center shadow-lg px-4 py-8'>
        <div className='p-4'>
          <h1 className="font-semibold text-md sm:text-lg md:text-2xl">
            <span className="text-accents">Ruang</span>Nganggur
          </h1>
        </div>
        <div className='flex gap-6'>
            <div>
            <p className='text-accents'>Resource</p>
            <ul>
                <li>Dropship</li>
                <li>Manufacture</li>
            </ul>
            </div>
            <div>
            <p className='text-accents'>Company</p>
            <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            </div>
            <div>
            <p className='text-accents'>Contact Us</p>
            <ul>
                <li>Email</li>
                <li>Hotmail</li>
            </ul>
            </div>
        </div>
        
        </div>
        <hr />
    </div>
  )
}

export default Footer