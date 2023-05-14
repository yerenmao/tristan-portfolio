import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {

  const {scrollYProgress} = useScroll(
    {
      target: reference,
      offset: ['center end', 'center center']
    }
  )

  return (
    <figure className='absolute left-0 stroke-darkd dark:stroke-lightd'>
      <svg className='-rotate-90 w-[40px] h-40px sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px]' viewBox='0 0 100 100'>
        <circle 
          cx={'75'} 
          cy={'50'} 
          r={'20'} 
          className='stroke-2 fill-none stroke-first dark:stroke-second'
        />
        <motion.circle 
          cx={'75'} 
          cy={'50'} 
          r={'20'} 
          className='stroke-[5px] fill-lightd dark:fill-darkd'
          style={{ pathLength: scrollYProgress }}
        />
        <circle 
          cx={'75'} 
          cy={'50'} 
          r={'10'} 
          className='animate-pulse stroke-1 fill-first dark:fill-second'
        />
      </svg>
    </figure>
  )
}

export default LiIcon