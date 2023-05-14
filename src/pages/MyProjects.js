'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import project1 from '../../public/project1.png'
import { GithubIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex-col items-center justify-between relative
      border border-solid border-darkd bg-lightd shadow-2xl2 dark:bg-darkd dark:border-lightd
      p-4 rounded-br-3xl rounded-2xl md:p-8  lg:p-12 md:rounded-3xl md:rounded-br-2xl
    ">
      <div className="absolute top-0 -z-10 h-[102%] sm:h-[103%] bg-darkd rounded-br-3xl dark:bg-lightd
        -right-2 w-full rounded-[1.5rem] sm:-right-3 sm:w-[101%] sm:rounded-[2.5rem] 
      " />
      <Link href={link} target="_blank"
        className="w-full md cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw
          "
        />
      </Link>

      <div className="w-full pl-0 pt-6 lg:pl-6 flex flex-col items-start justify-between ">
        <span className="text-second font-medium text-base sm:text-xl">{type}</span>
        <Link href={link} target_='_blank' className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left font-bold text-lightt dark:text-darkt text-sm sm:text-4xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-lightt dark:text-darkt text-sm sm:text-base">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">{" "}<GithubIcon className={'text-darkd dark:text-white rounded-full mr-5'} /></Link>
          <Link href={link} target='_blank'
            className="ml-4 rounded-lg bg-darkd text-darkt p-2 px-6 text-lg font-semibold dark:bg-lightd dark:text-lightt"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full p-4 md:p-6 flex flex-col items-center justify-center relative rounded-2xl
      border border-solid border-darkd bg-lightd shadow-2xl2 dark:bg-darkd dark:border-lightd
    ">
      <div className="absolute top-0 -z-10 h-[102%] sm:h-[103%] bg-darkd rounded-br-3xl dark:bg-lightd
        -right-2 rounded-[1.5rem] sm:-right-3 w-[101%] sm:rounded-[2rem] 
      " />
      <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw
          "
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-second font-medium text-base md:text-lg lg:text-xl">{type}</span>
        <Link href={link} target_='_blank' className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left font-bold text-lightt dark:text-darkt text-2xl lg:text-3xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-lightt dark:text-darkt text-sm sm:text-base">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target='_blank'
            className="font-semibold underline text-base md:text-lg text-lightt dark:text-darkt"
          >
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={'text-darkd dark:text-lightd rounded-full mr-5'} />
          </Link>
        </div>
      </div>
    </article>
  )
}



const MyProjects = () => {
  return (
    <div className="mb-40">
      <AnimatedText text={'My Projects'} className="mb-16 !text-4xl sm:!text-6xl md:text-7xl"/>
      <div className="w-full grid grid-cols-12 gap-24 gap-y-32 gap-x-0 sm:gap-y-24 md:gap-x-8 lg:gap-x-16 xl:gap-y-32 xl:gap-24">
        <div className="col-span-12">
          <FeaturedProject
            title={'Personal Portfolio'}
            img={project1}
            summary={'使用 React, Next.js, Tailwind CSS 製作自己的 personal portfolio'}
            link='/'
            github='/'
            type='website'
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <FeaturedProject
            title={'Personal Portfolio'}
            img={project1}
            link='/'
            github='/'
            type='website'
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <FeaturedProject
            title={'Personal Portfolio'}
            img={project1}
            link='/'
            github='/'
            type='website'
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title={'Personal Portfolio'}
            img={project1}
            summary={'使用 React, Next.js, Tailwind CSS 製作自己的 personal portfolio'}
            link='/'
            github='/'
            type='website'
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <FeaturedProject
            title={'Personal Portfolio'}
            img={project1}
            link='/'
            github='/'
            type='website'
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <FeaturedProject
            title={'Personal Portfolio'}
            img={project1}
            link='/'
            github='/'
            type='website'
          />
        </div>
      </div>
    </div>
  )
}

export default MyProjects