'use client'

import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
    }
  }
}

const AnimatedText = ({ text, className="" }) => {
  return (
    <div className="w-full mx-auto pt-6 flex items-center justify-center text-center">
      <motion.h1 className={`inline-block w-full 
        text-lightt dark:text-darkt 
        text-2xl md:text-4xl lg:text-6xl font-bold
        capitalize ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
      {
        text.split(' ').map((word, index) => {
          return (
            <motion.span key={word+'-'+index} 
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          )
        })
      }
      </motion.h1>
    </div>
  )
}

export default AnimatedText