'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import JavaProjImg from '../../public/java_game_proj.png'
import Yolov4ProjImg from '../../public/yolov4_proj.png'
import VerilogProjImg from '../../public/verilog_proj.png'
import QLearningImg from '../../public/Q_learning.png'
import DQNImg from '../../public/DQN.png'
import PPOImg from '../../public/PPO.png'

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

const FeaturedDownloadProject = ({ type, title, summary, img, link }) => {
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
          <Link href={link} target='_blank'
            className="ml-4 rounded-lg bg-darkd text-darkt p-2 px-6 text-lg font-semibold dark:bg-lightd dark:text-lightt"
          >
            Download Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const SmallProject = ({ type, title, summary, img, link }) => {
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
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left font-bold text-lightt dark:text-darkt text-sm sm:text-4xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-lightt dark:text-darkt text-sm sm:text-base">{summary}</p>
      </div>
    </article>
  )
}

const MyProjects = () => {
  return (
    <>
      <AnimatedText text={'My Projects'} className="mb-16 !text-4xl sm:!text-6xl md:text-7xl"/>
      <div className="mb-40 flex flex-col justify-center items-center">
        <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[85%] 2xl:w-[70%] grid grid-cols-12 gap-x-2 gap-y-12 sm:gap-y-24 md:gap-x-8">
          <div className="col-span-12">
            <FeaturedProject
              title={'Java Game Halo of Hero'}
              img={JavaProjImg}
              summary={'使用Java與物件導向concept製作遊戲 Halo of Hero'}
              link='https://github.com/Yerenmao/pd2_Halo_of_Hero'
              github='https://github.com/Yerenmao/pd2_Halo_of_Hero'
              type='game (程式設計二專案)'
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <FeaturedProject
              title={'YOLOv4'}
              img={Yolov4ProjImg}
              summary={'使用監視器畫面分析車流量'}
              link='https://yerenmao.github.io/'
              github='https://github.com/Yerenmao/Yerenmao.github.io'
              type='analytic (開放資料與智慧生活專案)'
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <FeaturedDownloadProject
              title={'Mine Sweeper'}
              img={VerilogProjImg}
              summary={'用 Verilog 做踩地雷遊戲'}
              link='/minesweeper.zip'
              type='IC design (數位系統實驗專案)'
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <SmallProject
              title={'Q Learning'}
              img={QLearningImg}
              link='https://youtu.be/tSxQP3di_bA'
              type='Reinforcement Learning (FUN AI WINTER CAMP)'
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <SmallProject
              title={'DQN'}
              img={DQNImg}
              link='https://youtu.be/i_qvV3Avobw'
              type='Reinforcement Learning (FUN AI WINTER CAMP)'
            />
          </div>
          <div className="col-span-12 xl:col-span-6">
            <SmallProject
              title={'PPO'}
              img={PPOImg}
              link='https://youtu.be/qYN8Y4WD3VM'
              type='Reinforcement Learning (FUN AI WINTER CAMP)'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProjects