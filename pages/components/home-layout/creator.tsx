import React from 'react'
import Image from 'next/image'

import Loader from '../images/creator/Loader.svg'

const Creator: React.FC = () => {
  return (
    <section className='top-creators'>
      <div className='relative mt-16 h-[551px] bg-[#E2E2E2] font-secondary md:h-[745px]'>
        <div className='flow md:pt-8'>
          <div>
            <div className='flex justify-end text-[10px] md:hidden'>
              <li style={{ marginRight: '5px' }}>Editorials</li>
              <li style={{ marginRight: '5px' }}>Fashion</li>
              <li style={{ marginRight: '5px' }}>Lifestyle</li>
              <li>Blueprint</li>
            </div>
          </div>
          <div className='flex justify-between'>
            <h2 className='px-4 text-[24px] font-[600] text-[#161616] md:text-[55px]'>
              TOP CREATORS OF <br /> THE WEEK
            </h2>
            <div className='flex'>
              <Image src={Loader} alt='' className='hidden h-[80%]  md:block' />
              <ul role='list' className='hidden pl-4 pr-16 text-[40px] md:block'>
                <li>Editorials</li>
                <li>Fashion</li>
                <li>Lifestyle</li>
                <li>Blueprint</li>
              </ul>
            </div>
          </div>
          <p className='pl-4 text-[13px] font-[200] text-[#000000] opacity-[57%] md:w-[80%] md:text-[32px]'>
            “Everything always looked better in black and white. Everything always as if it were the
            first time; there&#39;s always more people in a black and white photograph. It just makes it
            seem that there were more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
        </div>
        <div className='absolute bottom-10 left-[225px] md:left-[977px]'>
          <h2 className='text-[32px] font-[700] text-[#333333] md:text-[48px]'>CIRCA</h2>
          <h1 className='text-[64px] font-[700] text-[#161616] line-through md:text-[170px]'>
            1985
          </h1>
        </div>
        <div className='creator-animation absolute top-16'></div>
      </div>
    </section>
  )
}

export default Creator
