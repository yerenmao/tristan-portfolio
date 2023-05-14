'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '@/components/LiIcon'

const Details = ({ experience='', ranking='', time='' }) => {
  const liRef = useRef(null);
  return (
    <motion.li className='flex
      my-8 mx-auto first:mt-0 w-[95%] sm:[80%] md:w-[60%]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75, type: 'spring' }}
    >
      <div className='w-[10%] sm:w-[20%] md:w-0'></div>
      <div className='flex flex-col items-start justify-between'>
        <div ref={liRef} className='flex flex-col'>
          <h3 className='font-bold text-xl md:text-2xl text-lightt/90 dark:text-darkt/90 pb-4'>
            {experience}
          </h3>
          <p className='font-medium text-lightt/75 dark:text-darkt/75'>
            {ranking}
          </p>
          <span className='font-medium text-lightt/90 dark:text-darkt/90'>
            {time}
          </span>
        </div>
      </div>
      <LiIcon reference={liRef} />
    </motion.li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return ( 
    <>
      <h2 className='font-bold text-2xl sm:text-4xl md:text-6xl w-full text-center my-8 md:my-16 text-lightt dark:text-darkt'>
        Experience
      </h2>
      <div ref={ref} className='w-full sm:w-4/5 md:w-3/4 relative mb-96 mx-0 md:mr-10 md:mx-auto'>
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className='absolute  top-2 h-full bg-first origin-top
          left-[20px] sm:left-[30px] md:left-9 w-[2px] md:w-[4px]
        '/>
          <ul className='w-full flex flex-col items-start justify-between ml-2 sm:xl-4'>
            <Details 
              experience='於廣達-成大聯合 AI 研究中心擔任實習生'
              time='2021年11月 至 2022年7月'
            />
            <Details 
              experience='擔任成大程式設計（一）助教'
              time='2022年 9月 至 2023年 1月'
            />
            <Details 
              experience='擔任 2022 SITCON Hour of Code 助教'
              time='2022年12月11日'
            />
            <Details 
              experience='擔任 2022 SITCON 機動股工作人員'
              time='2022年9月4日'
            />
            <Details 
              experience='FUN AI WINTER CAMP 競賽'
              ranking='進階組 第二名'
              time='2023年2月8日 至 2023年2月10日'
            />
            <Details 
              experience='國立成功大學資訊安全課程 CTF 競賽'
              ranking='第一名'
              time='2022年11月14日'
            />
            <Details 
              experience='成大資工110學年度上學期書卷獎'
              ranking='班排：3 &nbsp;/&nbsp; 系排：5'
            />
            <Details 
              experience='成大資工110學年度下學期書卷獎'
              ranking='班排：1 &nbsp;/&nbsp; 系排：1'
            />
            <Details 
              experience='成大資工111學年度上學期書卷獎'
              ranking='班排：1 &nbsp;/&nbsp; 系排：2'
            />
        </ul>
      </div>
    </>
  )
}

export default Experience