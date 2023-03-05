import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import Arrow from '/public/images/featured/arrow.svg'

const Auctions: React.FC = () => {
  return (
    <section>
      <div className='auction-image my-16 flex flex-col p-8 md:h-screen'>
        <h2 className='hidden text-[24px] text-[#ffffff] md:block md:text-[40px]'>
          See Upcoming Auctions and Exhibitions
        </h2>
        <div className='mt-4 hidden border-b-[0.5px] border-[#FFFFFF] md:block'></div>

        <div className='auct-image mt-4 flex flex-col py-8 md:mx-12 md:h-screen'>
          <div className='px-8 font-bellefair text-[#ffffff] md:pt-72'>
            <div className='flex'>
              <div className='mt-2 h-4 w-4 rounded-full bg-[#F5F5F5]'></div>
              <h2 className='font-400 ml-4 text-[20px] uppercase md:w-[28%] md:text-[29.2px]'>
                Monalisa redefined in style
              </h2>
            </div>

            <div className=''>
              <div className='flex'>
                <span className='font-400 text-[40px] md:text-[67.6px]'>01</span>
                <span className='pt-4 pl-4 text-[12px] uppercase md:pt-10 md:text-[13.5px]'>
                  Start on : 08:00 GTS . Monday{' '}
                </span>
              </div>
              <div className='uppercase'>
                <div className='flex flex-col justify-between md:flex-row'>
                  <p className='pl-12 text-[10px] md:w-[45%] md:pl-[67px] md:text-[16px]'>
                    Get exculsive viewing of contemorary art and connect with investors and
                    auctineers across the world bringing their highest and lowest bids.
                  </p>
                  <div className='flex pt-4 pl-[42%] md:pl-[30%]'>
                    <span className='pt-3 text-[14px] normal-case underline hover:text-blue-100 md:text-[24px]'>
                      {' '}
                      See more
                    </span>
                    <button className='ml-2 h-[50px] rounded-lg border-[1px] border-white px-2 text-[14px] hover:bg-white hover:text-black md:ml-4 md:text-[24px]'>
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-2 flex border-t-2 py-6 '>
        <li className='flex justify-evenly pl-4 md:gap-96 md:pl-16'>
          <h2 className='text-[24px] text-[#333333] md:mr-64 md:text-[48px]'>
            Explore Marketplace
          </h2>
          <Link href='#'>
            <BsArrowRight className='ml-6 mt-4 hidden text-[48px] text-[#4693ED] hover:scale-75 md:block' />
            <Image
              src={Arrow}
              alt=''
              className='ml-12 block h-[50px] w-[50px] hover:scale-75 md:hidden'
            />
          </Link>
        </li>
      </div>
      <div className='mt-2 flex border-t-2 border-b-2 py-6 '>
        <li className='flex justify-evenly gap-16 pl-4 md:gap-96 md:pl-16'>
          <h2 className='text-[24px] text-[#333333] md:mr-96 md:text-[48px]'>See auctions</h2>
          <Link href='#'>
            <BsArrowRight className='mt-4 ml-14 hidden text-[48px] text-[#4693ED] hover:scale-75 md:block' />
            <Image
              src={Arrow}
              alt=''
              className='ml-16 block h-[50px] w-[50px] hover:scale-75 md:hidden'
            />
          </Link>
        </li>
      </div>
    </section>
  )
}

export default Auctions
