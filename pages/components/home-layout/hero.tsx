import Image from 'next/image'
import React from 'react'

import Group from '/public/images/hero/mobile/group.svg'

const Hero: React.FC = () => {
  return (
    <section className='jusify-center mx-auto overflow-hidden'>
      <div>
        <h1 className='m-4 mx-auto p-4 text-center font-secondary text-[32px] md:px-20 md:text-[64px] md:font-semibold lg:px-64'>
          Photography is poetry &amp; beautiful untold stories
        </h1>
        <p className='mx-2 px-2 text-center text-[16px] leading-8 sm:mx-32 md:text-[20px] lg:mx-32 lg:px-64'>
          Flip through more than 10,000 vintage shots, old photograghs, historic images and captures
          seamlessly in one place. Register to get top access.
        </p>
      </div>
      <div className='mt-8 md:mt-0'>
        <div className='hero-slide'>
          <div className='slide'></div>
          <div className='slide'></div>
          <div className='slide'></div>
          <div className='slide'></div>
          <div className='slide'></div>
        </div>
        <div className='mx-auto h-[50%] items-center justify-center px-4 hover:scale-110 md:hidden'>
          <Image src={Group} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Hero
