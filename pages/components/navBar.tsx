import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect, useMemo } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import Logo from './images/nav/ARTSY.svg'
import Search from './images/nav/search.svg'
import Cart from './images/nav/cart.svg'
import Notification from './images/nav/notification.svg'

const NavBar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false)
  const [active, setActive] = useState<number>(0)

  const links = useMemo(
    () => [
      {
        id: 1,
        url: '/',
        text: 'Home',
      },
      {
        id: 2,
        url: '/marketplace',
        text: 'Marketplace',
      },
      {
        id: 3,
        url: '/auctions',
        text: 'Auctions',
      },
      {
        id: 4,
        url: '/drop',
        text: 'Drop',
      },
    ],
    [],
  )

  useEffect(() => {
    const pathname = window.location.pathname
    links.forEach((link) => {
      if (link.url === pathname) {
        setActive(link.id)
      }
    })
  }, [links])

  return (
    <header className='sticky top-0 z-30 flex h-14 w-full items-center justify-between bg-[#FFFFFF] p-4 py-2'>
      {/* Mobile menu button */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer text-black opacity-75 transition hover:rotate-180 hover:opacity-100 md:hidden lg:hidden '
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className='z-1 absolute top-16 flex h-[120px]  w-1/2 flex-col bg-black text-white md:hidden lg:hidden'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id} className=''>
                <Link href={url} className={`navLink ${active === id ? 'active' : ''}`}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      )}

      {/* LOGO */}
      <div className='align-center flex w-1/2 items-center justify-center md:w-1/5'>
        <Link href='/'>
          <div className='relative left-4 top-4 h-12 w-[80px] cursor-pointer opacity-75 transition hover:opacity-100 md:left-0 md:w-full'>
            <Image src={Logo} alt=''/>
          </div>
        </Link>
      </div>
      {/* Navigation */}
      <nav className='hidden flex-1 items-center justify-center md:flex'>
        <ul role='list' className='flex space-x-8'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id} className=''>
                <Link href={url} className={`navLink ${active === id ? 'active' : ''}`}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className='relative flex items-center justify-center gap-x-4  lg:w-[10vw]'>
        <Image src={Search} alt='' className='navIcon' />
        <Link href='/checkout'>
          <div className='navIcon relative cursor-pointer'>
            <span className='absolute -right-1 -top-1 z-50 flex h-2 w-2 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-[10px] text-white'></span>

            <Image src={Cart} alt='' className='' />
          </div>
        </Link>

        <Image src={Notification} alt='' className='navIcon hidden md:flex' />
      </div>
    </header>
  )
}
export default NavBar
