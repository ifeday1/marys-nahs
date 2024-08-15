import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white text-black m-4 py-8'>
      <div className='container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-8'>
        {/* About Section */}
        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>
            Mary’s Nähstube Wels-Änderungsschneiderei Mode.
          </h3>
          <p className='text-sm'>Eferdinger Straße, 3, 4600, Wels.</p>
        </div>

        {/* Navigation Links */}
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

        {/* Contact Information */}
        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>Help</h3>
          <p className='text-sm'>Privacy Policies</p>
        </div>

        {/* Social Media Links */}
        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>Newsletter</h3>
          <div className='flex space-x-4'>
            <a href='#facebook' className='text-sm hover:underline'>
              Facebook
            </a>
            <a href='#twitter' className='text-sm hover:underline'>
              Twitter
            </a>
            <a href='#instagram' className='text-sm hover:underline'>
              Instagram
            </a>
            <a href='#linkedin' className='text-sm hover:underline'>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
