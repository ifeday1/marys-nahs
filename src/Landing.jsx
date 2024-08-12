import React from 'react';
import Navbar from './components/Navbar';
import Tube from './assests/tube.jpg';
import HeadImg from './assests/headimg.jpg';
import Dress from './assests/dress.png';
import Dress1 from './assests/dress1.png';
import Dress2 from './assests/dress2.png';
import Dress3 from './assests/dress3.png';

const Landing = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-32'>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-5xl font-bold mb-3'>
            Welcome to Mary’s <br></br>Sewing room
          </h1>
          <p class='text-gray-600 mb-1'>Custom tailoring changes fashion</p>
          <br></br>
          <img
            src={Tube}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg mb-5'
          />
          <div className='flex gap-3.5 max-w-[342px]'>
            <div className='text-lg leading-loose text-neutral-800'>01</div>
            <div className='flex flex-col my-auto bg-neutral-300'>
              <div className='flex flex-col items-start bg-neutral-300'>
                <div className='flex flex-col max-w-full bg-black w-[138px]'>
                  <div className='flex shrink-0 h-0.5 bg-black' />
                </div>
              </div>
            </div>
            <div className='text-lg leading-loose text-neutral-800'>02</div>
          </div>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={HeadImg}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg mb-7'
          />
        </div>
      </div>

      {/* Images scroll */}
      <div className='p-4'>
        <div className='flex flex-wrap gap-4'>
          {/* Box 1 */}
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-1/6  overflow-hidden'>
            <img
              src={Dress}
              alt='Box 1'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Box 2: Reduced width on larger screens */}
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-[650px]  overflow-hidden'>
            <img
              src={Dress1}
              alt='Box 2'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Box 3 */}
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-1/6  overflow-hidden'>
            <img
              src={Dress2}
              alt='Box 3'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Box 4 */}
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-1/6  overflow-hidden'>
            <img
              src={Dress3}
              alt='Box 4'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
