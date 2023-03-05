import React, { FC } from 'react'

const Newsletter: FC = () => {
  return (
    <section className='newsletter font-bellefair'>
      <div className='my-8 mx-2 flex flex-col gap-6 border-[#333333] py-4 md:m-16 md:items-center md:justify-center md:border-2'>
        <h4 className='text-[24px] font-[400] md:text-[30px]'>NEWSLETTER</h4>
        <p className='text-[11px] font-[400] uppercase md:text-[32px] md:normal-case'>
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <form action='submit'>
          <input
            type='email'
            name='Email'
            placeholder='ENTER YOUR EMAIL'
            className='h-[46px] w-[340px] border-2 bg-white px-2 py-1 text-[14px] text-[#333333] md:mx-4 md:h-[60px] md:w-[446px]'
          />
          <button
            type='submit'
            className='mt-4 h-[54px] w-[182px] bg-[#333333] text-[10px] text-[#ffffff] hover:opacity-[80%] md:h-[60px] md:pt-0 md:text-[12px]'
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
