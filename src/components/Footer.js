import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-darkd font-medium text-lg
     bg-lightd dark:bg-darkd dark:text-lightd dark:border-lightd
     flex flex-col items-center justify-center py-4
    ">
      <div>2023 &copy; All Rights Reserved.</div>
      <div>Contact: <Link href={'mailto:tristanchen92@gmail.com'} className='hover:underline'>tristanchen92@gmail.com</Link></div>
    </footer>
  )
}

export default Footer