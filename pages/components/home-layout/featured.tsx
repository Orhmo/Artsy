import React from 'react'
import Image from 'next/image'

// Import products
import One from '/public/images/featured/1.svg'
import Two from '/public/images/featured/2.svg'
import Three from '/public/images/featured/3.svg'

import Arrow from '/public/images/featured/arrow.svg'
import Arrow2 from '/public/images/featured/arrow2.svg'

const Featured: React.FC = () => {
  return (
    <section className='mx-auto mt-4 items-center justify-center px-2 md:px-16'>
      <div>
        <h1 className='font-primary text-[32px] text-[#333333] md:text-[48px]'>
          Featured products
        </h1>
        <div className='mt-4 mb-10 border-b-[0.5px] border-[#333333]'></div>

        <div>
          <>
            <div className='flex flex-col-reverse md:flex-row-reverse'>
              <>
                <div className='ml-0 md:ml-8 md:w-[50%]'>
                  <h2 className='hidden pb-4 font-tertiary text-[40px] font-bold md:flex'>
                    The Boolean Egyptian
                  </h2>
                  <p className='font-primary text-[15px] text-[#616161] md:text-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                  </p>
                  <div className='absolute flex '>
                    <div className='circle-container bottom-3 md:bottom-0'>
                      <div className='circle-profile '></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                    </div>
                  </div>
                  <div className='absolute ml-48 mt-4 flex items-center gap-16 '>
                    <p className='text-[16px] md:text-[24px]'>64 major creators</p>
                    <Image
                      src={Arrow}
                      alt=''
                      className='hidden h-[50px] w-[50px] hover:scale-75 md:block'
                    />
                  </div>
                </div>
              </>
              <div className='relative md:w-[50%]'>
                <Image src={One} alt='' className='' />
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 hover:opacity-60 md:hidden'>
                  <h2 className='text-[30px] font-[600] text-white '>The Boolean Egyptian</h2>
                  <Image
                    src={Arrow2}
                    alt=''
                    className=' mt-8 ml-64 h-[60px] w-[60px] hover:scale-75'
                  />
                </div>
              </div>
            </div>

            <div className='my-12 border-b-[0.5px] border-[#333333] md:my-10'></div>
          </>

          <>
            <div className='flex flex-col md:flex-row-reverse'>
              <div className="md:w-[50%]'> relative">
                <Image src={Two} alt='' />
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 hover:opacity-60 md:hidden'>
                  <h2 className='text-[30px] font-[600] text-[#ffffff]'>The Boolean Egyptian</h2>
                  <Image
                    src={Arrow2}
                    alt=''
                    className=' mt-8 ml-64 h-[60px] w-[60px] hover:scale-75'
                  />
                </div>
              </div>
              <>
                <div className='mr-8md:mr-8 md:w-[50%]'>
                  <h2 className='hidden pb-4 font-tertiary text-[40px] font-bold md:flex'>
                    The Boolean Egyptian
                  </h2>
                  <p className='font-primary text-[15px] text-[#616161] md:text-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                  </p>
                  <div className='absolute flex'>
                    <div className='circle-container bottom-3 md:bottom-0'>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                    </div>
                  </div>
                  <div className='flex-cols absolute ml-48 mt-4 flex items-center gap-16 '>
                    <p className='text-[16px] md:text-[24px]'>64 major creators</p>
                    <Image
                      src={Arrow}
                      alt=''
                      className='hidden h-[50px] w-[50px] hover:scale-75 md:block'
                    />
                  </div>
                </div>
              </>
            </div>
            <div className='my-12 border-b-[0.5px] border-[#333333] md:my-10'></div>
          </>

          <>
            <div className='flex flex-col-reverse md:flex-row-reverse'>
              <>
                <div className='ml-0 md:ml-8 md:w-[50%]'>
                  <h2 className='hidden pb-4 font-tertiary text-[16px] font-bold md:flex md:text-[40px]'>
                    The Boolean Egyptian
                  </h2>
                  <p className='font-primary text-[15px] text-[#616161] md:text-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                  </p>
                  <div className='absolute flex'>
                    <div className='circle-container bottom-3 md:bottom-0'>
                      <div className='circle-profile '></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                      <div className='circle-profile'></div>
                    </div>
                  </div>
                  <div className='flex-cols absolute ml-48 mt-4 flex items-center gap-16 '>
                    <p className='text-[16px] md:text-[24px]'>64 major creators</p>
                    <Image
                      src={Arrow}
                      alt=''
                      className='hidden h-[50px] w-[50px] hover:scale-75 md:block'
                    />
                  </div>
                </div>
              </>
              <div className='relative md:w-[50%]'>
                <Image src={Three} alt='' />
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0  hover:opacity-60 md:hidden'>
                  <h2 className='text-[30px] font-[600] text-white'>The Boolean Egyptian</h2>
                  <Image
                    src={Arrow2}
                    alt=''
                    className=' mt-8 ml-64 h-[60px] w-[60px] hover:scale-75'
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  )
}

export default Featured
