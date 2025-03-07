'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const NavBar = () => {
  const [menuVisibility, setMenuVisibility] = useState('hidden')
  const mobileMenu = useRef()

  const handleMenuClick = () => {
    menuVisibility == 'hidden'
      ? setMenuVisibility('block')
      : setMenuVisibility('hidden')
  }

  return (
    <div>
      <nav className='bg-purple-92 mx-auto mt-6 flex h-12 w-4/6 min-w-48 items-center justify-between rounded-3xl px-6 shadow-md md:px-12'>
        {/* Logo */}
        <div className='text-primary text-lg font-bold'>
          <Link href='/'>
            <Image
              src='/assets/logo-purple.png'
              alt='Inspired Voices logo'
              width={70}
              height={12}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex md:items-center md:space-x-8'>
          <Link
            href='/nominations'
            className='text-md text-secondary hover:text-primary'
          >
            Nominations
          </Link>

          <Link
            href='/models'
            className='text-md text-secondary hover:text-primary'
          >
            Models
          </Link>

          <Link
            href='/volunteers'
            className='text-md text-secondary hover:text-primary'
          >
            Volunteers
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden'>
          <button
            onClick={handleMenuClick}
            className='text-secondary hover:text-primary'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Initially hidden) */}
      <div
        ref={mobileMenu}
        className={`${menuVisibility} mx-auto mt-2 w-4/6 rounded-lg bg-pink-50 py-4 text-right md:hidden`}
      >
        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/nominations'
          className='text-md text-secondary hover:text-primary block px-6 py-2'
        >
          Nominations
        </Link>
        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/models'
          className='text-md text-secondary hover:text-primary block px-6 py-2'
        >
          Models
        </Link>

        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/volunteers'
          className='text-md text-secondary hover:text-primary block px-6 py-2'
        >
          Volunteers
        </Link>
      </div>
    </div>
  )
}

export default NavBar
