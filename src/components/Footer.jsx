import Link from 'next/link'
import { Facebook, Instagram, LinkedIn, X_Twitter } from './Icons'

const Footer = () => {
  return (
    <footer className='bg-white py-12 lg:pb-8 lg:pt-[100px]'>
      <div className='px-6 min-[576px]:mx-auto min-[576px]:flex min-[576px]:w-[540px] min-[576px]:items-start min-[576px]:justify-between min-[576px]:px-0 md:w-full md:px-12 lg:px-40'>
        <div className='mb-7 max-w-64 min-[576px]:mb-0 md:max-w-[288px]'>
          <p className='text-secondary mb-2 text-lg font-bold'>
            Inspired Voices
          </p>
        </div>

        <div>
          <p className='text-md-150 text-secondary mb-4 font-bold'>
            Quick Links
          </p>
          <ul className='text-md-160 gap-3 text-black min-[576px]:grid min-[576px]:auto-cols-min min-[576px]:grid-cols-2 min-[576px]:gap-x-10 lg:gap-x-20'>
            <li>
              <Link href='/nominations'>Nominations</Link>
            </li>
            <li>
              <Link href='/models'>Models</Link>
            </li>
            <li>
              <Link href='/volunteers'>Volunteers</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className='border-1.5 border-purple-94 mb-8 mt-12' />

      <div className='flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-40'>
        <p className='text-md-160 font-medium text-black/50'>
          © 2025 Inspired Voices.
        </p>
        <span className='flex justify-center gap-10 opacity-50'>
          <Facebook />
          <Instagram />
          <X_Twitter />
          <LinkedIn />
        </span>
      </div>
    </footer>
  )
}

export default Footer
