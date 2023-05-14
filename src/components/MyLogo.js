import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link);

const MyLogo = ({ toggle }) => {
  return (
    <div className="flex items-center justify-center bg-lightd dark:bg-darkd">
      <MotionLink
        href={'/'}
        className="w-16 h-16  
          flex items-center justify-center rounded-full 
          border-2 border-solid border-first
          px-0.5 py-0.5
        "
        whileHover={{
          backgroundColor: "#6b7280",
          scale: 1.1,
          transition:{duration: 1}
        }}
        onClick={toggle}
      >
        <img src="Yerenmao.png" alt="LOGO" />
      </MotionLink>
    </div>
  )
}

export default MyLogo