import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Mail from 'public/images/footer/mail.svg'
import Location from 'public/images/footer/pin.svg'

interface LinkItem {
  id: number
  text: string
  url: string
}

const Footer: React.FC = () => {
  const links: LinkItem[] = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'marketplace',
      url: '/marketplace',
    },
    {
      id: 3,
      text: 'auctions',
      url: '/auctions',
    },
    {
      id: 4,
      text: 'drop',
      url: '/drop',
    },
  ]

  return (
    <footer className='footer'>
      <div className='hidden gap-10 font-secondary md:flex'>
        <h2 className='cursor-pointer px-32 py-12 text-[48px] font-[600] text-[#292929] hover:opacity-[60%]'>
          ARTSY.
        </h2>
        <div className=''>
          <nav className='mt-4 grid grid-cols-4 gap-32'>
            <div>
              <ul className='text-[20px] font-[400]'>
                {links.map((link: LinkItem) => {
                  const { id, text, url } = link
                  return (
                    <li key={id} className='capitalize hover:font-[100]'>
                      <Link href={url}>{text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <ul className='text-[20px] font-[400]'>
                <li className='hover:font-[100]'>
                  <a href='#'>Blog</a>
                </li>
                <li className='hover:font-[100]'>
                  <Link href='#'>Wallets</Link>
                </li>
                <li className='hover:font-[100]'>
                  <Link href='#'>Rates</Link>
                </li>
                <li className='hover:font-[100]'>
                  <Link href='#'>High bids</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className='text-[20px] font-[400]'>
                <li>
                  <Link href='mailto: artsystudios@gmail.com' className='flex hover:font-[100]'>
                    <Image src={Mail} alt='email' className='hover:scale-75' />
                    <span>artsystudios@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link href='#' className='flex hover:font-[100]'>
                    <Image src={Location} alt='location' className='hover:scale-75' />
                    Lagos, Nigeria.
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <p className='hidden py-2 text-center font-[200] md:block'>
        Artsystudios © {new Date().getFullYear()}. All Rights Reserved.
      </p>

      <div className='block px-4 py-4 md:hidden'>
        <h2 className='pb-4 text-[12px] uppercase text-[#333333]'>Reach us</h2>
        <ul className='text-[12px] font-[400]'>
          <li className='pb-4'>
            <Link href='mailto: artsystudios@gmail.com' className='flex hover:font-[100]'>
              <Image src={Mail} alt='email' className='w-[24px] hover:scale-75' />
              <span>artsystudios@gmail.com</span>
            </Link>
          </li>
          <li>
            <Link href='#' className='flex hover:font-[100]'>
              <Image src={Location} alt='location' className='w-[24px] hover:scale-75' />
              Lagos, Nigeria.
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
