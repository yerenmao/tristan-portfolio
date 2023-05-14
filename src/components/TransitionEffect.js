'use client'

import { AnimatePresence, motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut"}}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-first' 
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut"}}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-second' 
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut"}}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-darkd dark:bg-lightd' 
      />
    </AnimatePresence>   
  )
}

export default TransitionEffect