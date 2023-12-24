import Image from 'next/image'
import ParticlesContainer from './ui/home/ParticleBackground'

export default function Home() {

  return (
    <div>
      <ParticlesContainer></ParticlesContainer>
      <div className='gap-6 text-center h-screen flex justify-center flex-col items-center'>
        <div className='flex gap-6 flex-col w-[90%] items-center md:w-[95%] lg:w-[70%] xl:w-[60%] sm:[80%]'>
          <p className='text-gray-400 text-sm md:text-base'>🔥 Amazing Framer Templates & Resources!</p>
          <h1 className='md:text-7xl text-4xl text-center text-gradient gradient-dark font-bold whitespace-pre-line'>
            Join The Waitlist for
            FramerIt Today!
          </h1>
          <p className='text-center  text-gray-400 text-sm md:w-[70%] md:leading-8  md:text-lg'>Discover an Array of Incredible Framer Templates and Be Prepared for an Exciting Wave of New Resources on the Horizon. Sign up to Our Waitlist to be notified when we launch!</p>
          <div className='flex flex-col md:flex-row justify-center  w-full gap-3 md:h-[53px] mt-2'>
            <input type="email" placeholder='Your Email Address' className='bginput-secondary py-1 rounded-xl outline-none border-2 px-3 border-gray-700 bg-[#59595999]  h-[55px] md:w-[40%]' />
            <button className='bg-white text-lg text-black py-3 font-medium rounded-lg px-5 '>Join Waitlist!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
