import React from 'react';
import Navbar from './components/Navbar';
import Tube from './assests/tube.jpg';
import HeadImg from './assests/headimg.jpg';
import Dress from './assests/dress.png';
import Dress1 from './assests/dress1.png';
import Dress2 from './assests/dress2.png';
import Dress3 from './assests/dress3.png';
import Dress4 from './assests/dress4.png';
import Dress5 from './assests/dress5.png';
import Dress6 from './assests/dress6.png';
import Dress7 from './assests/dress7.png';
import Dress8 from './assests/dress8.png';
import Owner from './assests/owner.png';
import Fashion from './assests/fashion.png';
import Fashion1 from './assests/fashion1.png';
import Fashion2 from './assests/fashion2.png';


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

      {/* Images scroll1 */}
      <div className='p-4'>
        <div className='flex flex-wrap gap-4'>
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-[570px]  overflow-hidden'>
            <img
              src={Dress4}
              alt='Box 2'
              className='w-full h-full object-cover'
            />
          </div>

          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-[570px]  overflow-hidden'>
            <img
              src={Dress5}
              alt='Box 2'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Box 3 */}
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-1/6  overflow-hidden'>
            <img
              src={Dress6}
              alt='Box 3'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      {/* Images scroll3 */}
      <div className='p-4'>
        <div className='flex flex-wrap gap-4'>
          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-[900px]  overflow-hidden'>
            <img
              src={Dress7}
              alt='Box 2'
              className='w-full h-full object-cover'
            />
          </div>

          <div className='flex-shrink-0 h-40 md:h-[400px] w-full sm:w-1/2 md:w-[490px]  overflow-hidden'>
            <img
              src={Dress8}
              alt='Box 2'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* owner */}
      <div class='flex flex-wrap justify-around items-center mt-12'>
        <div class='flex justify-center items-center m-4'>
          <img
            src={Owner}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg mb-7'
          />
        </div>
        <div class='flex flex-col justify-center items-left m-4 '>
          <h1 class='text-4xl font-bold mb-3'>About the owner</h1>
          <p class='text-gray-400 mb-1'>
            Crafting Excellence, Delivering Quality
          </p>
          <br></br>
          <p class='text-gray-600 mb-1'>
            Welcome to our site! I'm delighted to introduce myself as the
            <br></br>
            driving force behind this venture. With a passion for excellence and
            <br></br>a dedication to quality, I bring a unique blend of<br></br>
            expertise and creativity to everything I do. Having spent years in
            <br></br>
            the industry, I've honed my skills in various fields, ensuring that
            <br></br>
            every project I undertake is executed with precision and care. My
            <br></br>
            journey began with a deep interest in innovative design and<br></br>
            exceptional service, which has grown into a full-fledged commitment
            <br></br>
            to delivering unparalleled experiences for my clients. <br></br>
          </p>
        </div>
      </div>

      {/* fashion1 */}
      <div class='flex flex-wrap justify-around items-center mt-12 bg-gray-300 m-8 rounded-lg'>
        <div class='flex flex-col justify-center items-left m-4 '>
          <div className='flex flex-col max-w-full bg-black w-[35px] relative'>
            <p className='text-9xl text-gray-400 -z-1 absolute'>O1</p>
            <div className='flex shrink-0 h-0.5 bg-black' />
          </div>
          <div>
            <p className=''>GET STARTED</p>
          </div>

          <br></br>
          <h1 class='text-5xl font-bold mb-3 z-10'>
            All fashion in <br></br>one place ?
          </h1>

          <br></br>
          <p class='text-gray-600 mb-1'>
            At Mary's Nahs Tube we believe that fashion is a powerful <br></br>
            form of self-expression. Our curated collection of clothing,{' '}
            <br></br>
            accessories, and footwear is designed to help you find and flaunt{' '}
            <br></br>
            your unique style, whether you're dressing for a special occasion or{' '}
            <br></br>
            updating your everyday wardrobe. <br></br>
          </p>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={Fashion}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg mb-7'
          />
        </div>
      </div>

      {/* fashion2 */}
      <div class='flex flex-wrap justify-around items-center mt-12 bg-gray-300 m-8 rounded-lg'>
        <div class='flex justify-center items-center m-4'>
          <img
            src={Fashion1}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg mb-7'
          />
        </div>
        <div class='flex flex-col justify-center items-left m-4 '>
          <div className='flex flex-col max-w-full bg-black w-[35px] relative'>
            <p className='text-9xl text-gray-400 -z-1 absolute'>O2</p>
            <div className='flex shrink-0 h-0.5 bg-black' />
          </div>
          <div>
            <p className=''>FASHION ESSENTIALS</p>
          </div>

          <br></br>
          <h1 class='text-5xl font-bold mb-3 z-10'>
            Picking the right <br></br>Fashion style!
          </h1>

          <br></br>
          <p class='text-gray-600 mb-1'>
            Fashion is more than just clothing—it's a form of<br></br>{' '}
            self-expression that tells the world who you are. With countless
            styles<br></br> to choose from, finding the right one can feel
            overwhelming. Here's<br></br> a guide to help you discover and
            embrace your <br></br>unique fashion style
          </p>
        </div>
      </div>

      {/* fashion3*/}
      <div class='flex flex-wrap justify-around items-center mt-12 bg-gray-300 m-8 rounded-lg'>
        <div class='flex flex-col justify-center items-left m-4 '>
          <div className='flex flex-col max-w-full bg-black w-[35px] relative'>
            <p className='text-9xl text-gray-400 -z-1 absolute'>O3</p>
            <div className='flex shrink-0 h-0.5 bg-black' />
          </div>
          <div>
            <p className=''>WHERE YOU GO IS THE STYLE</p>
          </div>

          <br></br>
          <h1 class='text-5xl font-bold mb-3 z-10'>
            Choose your <br></br>style
          </h1>

          <br></br>
          <p class='text-gray-600 mb-1'>
            Your style is a reflection of who you are, a way to <br></br>{' '}
            express your personality, mood, and individuality. Choosing the
            right <br></br> style can elevate your confidence and help you feel
            your <br></br>best every day. Here's how to explore and embrace a
            style that <br></br> truly resonates with you.
          </p>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={Fashion2}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg mb-7'
          />
        </div>
      </div>
    </>
  );
};

export default Landing;