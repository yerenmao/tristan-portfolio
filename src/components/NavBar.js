'use client'

import useMyScroll from '@/hooks/useMyScroll';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import Link from 'next/link';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, MoonIcon, SunIcon } from './Icons';
import MyLogo from './MyLogo'
import { usePathname } from 'next/navigation'

const CustomLink = ({ href, title, className="" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`} >
      {title}
      <span className={`
        h-[1px] inline-block bg-darkd dark:bg-lightd
        absolute left-0 -bottom-0.5
        w-0 group-hover:w-full transition-width ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, toggle, className="" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group text-2xl text-lightd dark:text-darkd`} onClick={toggle}>
      {title}
      <span className={`
        h-[1px] inline-block bg-lightd dark:bg-darkd
        absolute left-0 -bottom-0.5
        w-0 group-hover:w-full transition-width ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomIcon = ({ href, className="", children }) => {
  return (
    <motion.a 
      href={href}
      target='_blank'
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={className} >
      {children}
    </motion.a>
  )
}

const NavBar = () => {

  useMyScroll()
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const logoHandleClick = () => {
    if(isOpen) setIsOpen(false);
  }

  return (
    <header className='fixed z-10 transition duration-300 ease-in-out
      w-full px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-60 py-10 md:py-8 font-medium flex items-center justify-between
      text-lightt dark:text-darkt bg-lightd dark:bg-darkd
    '>
      {/* button for navigating in small device */}
      <button className='flex-col justify-center items-center md:hidden' onClick={handleClick}>
        <span className={`bg-darkd dark:bg-lightd transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-darkd dark:bg-lightd transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-darkd dark:bg-lightd transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* navigation on big device */}
      <div className='w-full items-center justify-between hidden md:flex'>
        {/* text part */}
        <nav>
          <CustomLink href={'/'} title={'Home'} className='mr-4'/>
          <CustomLink href={'/grades'} title={'Grades'} className='mx-4'/>
          <CustomLink href={'/projects'} title={'Projects'} className='ml-4'/>
        </nav>
        {/* icon part */}
        <nav className='flex items-center justify-between'>
          <CustomIcon href={"https://github.com/Yerenmao"} className='mr-5'>
            <GithubIcon />
          </CustomIcon>
          
          
          <CustomIcon>
            <button onClick={() => setMode(mode==='light'?'dark':'light')}
              className='flex items-center justify-center rounded-full bg-darkd text-darkt dark:bg-lightd dark:text-lightt px-0.5 py-0.5 ml-5'
            >
              {
                mode==='dark' ? <SunIcon /> : <MoonIcon />
              }
            </button>
          </CustomIcon>
        </nav>
      </div>
      
      {/* navigation on small device */}
      {
        isOpen ? 
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[70vw] min-h-[70vh] flex flex-col justify-around z-10 items-center fixed top-1/2 left-1/2 -translate-x-1/2
              bg-darkd/80 dark:bg-lightd/80 rounded-2xl backdrop:blur-md py-2
            '
          >
            <nav className='flex flex-col items-center justify-between'>
              <CustomMobileLink href={'/'} title={'Home'} toggle={handleClick} className='mt-0'/>
              <CustomMobileLink href={'/grades'} title={'Grades'} toggle={handleClick} className='my-12'/>
              <CustomMobileLink href={'/projects'} title={'Projects'} toggle={handleClick} className='mb-0'/>
            </nav>
            <nav className='flex items-center justify-between flex-wrap'>
                <CustomIcon href={"https://github.com/Yerenmao"} className='bg-lightd dark:bg-darkd rounded-full mr-5'>
                  <GithubIcon />
                </CustomIcon>
                <CustomIcon>
                  <button onClick={() => { 
                    handleClick();
                    setMode(mode==='light'?'dark':'light');
                  }}
                    className='flex items-center justify-center rounded-full bg-lightd text-lightt dark:bg-darkd dark:text-darkt px-1 md:px-0.5 py-1 md:py-0.5 ml-5'
                  >
                    {
                      mode==='dark' ? <SunIcon /> : <MoonIcon />
                    }
                  </button>
                </CustomIcon>
            </nav>
          </motion.div>
        : null
      }

      <div className='absolute left-[50%] translate-x-[-50%]'>
        <MyLogo toggle={logoHandleClick}/>
      </div>
    </header>
  )
}

export default NavBar