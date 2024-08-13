import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto flex flex-wrap justify-between gap-8'>
        {/* About Section */}
        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>About Us</h3>
          <p className='text-sm'>
            We are a leading e-commerce platform providing a seamless shopping
            experience. Our mission is to deliver quality products and excellent
            customer service.
          </p>
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
                Shop
              </a>
            </li>
            <li>
              <a href='#about' className='text-sm hover:underline'>
                About Us
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
          <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
          <p className='text-sm'>Email: support@example.com</p>
          <p className='text-sm'>Phone: +123 456 7890</p>
          <p className='text-sm'>Address: 123 Main Street, Anytown, USA</p>
        </div>

        {/* Social Media Links */}
        <div className='flex-1 min-w-[200px]'>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
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
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer