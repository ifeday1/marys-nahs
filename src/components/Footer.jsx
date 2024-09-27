import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white text-black m-4 py-8'>
      <div className='container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-8'>
        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>
            Mary’s Nähstube Wels-Änderungsschneiderei Mode.
          </h3>
          <p className='text-sm'>Eferdinger Straße, 3, 4600, Wels.</p>
        </div>

        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#home' className='text-sm hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='#shop' className='text-sm hover:underline'>
                Catalog
              </a>
            </li>
            <li>
              <a href='#about' className='text-sm hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='text-sm hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>Help</h3>
          <p className='text-sm'>Privacy Policies</p>
        </div>

        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>Newsletter</h3>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 rounded-lg border border-gray-300 w-full md:w-auto flex-1'
            />
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className='text-center py-4'>
        <hr className='border-gray-300 my-4 mx-10' />

        <p className='text-sm text-gray-600'>© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
