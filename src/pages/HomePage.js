'use client'

import Image from "next/image"
import headshot from '../../public/headshot.jpeg'
import AnimatedNumbers from "@/components/AnimatedNumbers"

const HomePage = () => {
  return (
    <div className="w-full min-h-screen pt-[90px] md:pt-[96px] flex flex-col justify-around items-center text-lightt dark:text-darkt">
      
      {/* Picture+Info */}
      <div className="w-full flex flex-col justify-between items-center">
        <div className="px-2 py-2 mt-4 border-2 rounded-xl border-darkd dark:border-lightd">
          <Image src={headshot} alt='headshot' className='w-auto h-auto max-h-60 rounded-xl' priority/>
        </div>
      </div>
      {/* Information */}
      <div className="w-full flex flex-col justify-around items-center">
        <div className="my-4">
          <span className="hidden min-[360px]:inline mr-2 text-xs text-lightt/50 dark:text-darkt/50">{'<姓名>'}</span>
            陳順霙
          <span className="hidden min-[360px]:inline ml-2 text-xs text-lightt/50 dark:text-darkt/50">{'</姓名>'}</span>
        </div>
        <div className="my-4">
          <span className="hidden min-[360px]:inline mr-2 text-xs text-lightt/50 dark:text-darkt/50">{'<畢業高中>'}</span>
            臺北市立建國高級中學
          <span className="hidden min-[360px]:inline ml-2 text-xs text-lightt/50 dark:text-darkt/50">{'</畢業高中>'}</span>
          <div className="flex text-xs items-center justify-center text-lightt/50 dark:text-darkt/50">
            2018~2021
          </div>
        </div>
        <div className="my-4">
          <span className="hidden min-[360px]:inline mr-2 text-xs text-lightt/50 dark:text-darkt/50">{'<之前就讀>'}</span>
            國立成功大學資訊工程學系
          <span className="hidden min-[360px]:inline ml-2 text-xs text-lightt/50 dark:text-darkt/50">{'</之前就讀>'}</span>
          <div className="flex text-xs items-center justify-center text-lightt/50 dark:text-darkt/50">
            2021~2023
          </div>
        </div>
        <div className="my-4">
          <span className="hidden min-[360px]:inline mr-2 text-xs text-lightt/50 dark:text-darkt/50">{'<目前就讀>'}</span>
            國立臺灣大學資訊工程學系
          <span className="hidden min-[360px]:inline ml-2 text-xs text-lightt/50 dark:text-darkt/50">{'</目前就讀>'}</span>
          <div className="flex text-xs items-center justify-center text-lightt/50 dark:text-darkt/50">
            2023~now
          </div>
        </div>
      </div>
      {/* Age+Years */}
      <div className="w-full mb-20 flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="mx-5 flex flex-col justify-evenly items-center">
            <h2 className="text-xl font-medium text-darkd/75 dark:text-lightd/75">Age</h2>
            <span className="inline-block text-4xl font-bold">
              <AnimatedNumbers value={20} />
            </span>
          </div>
          <div className="mx-5 flex flex-col justify-evenly items-center">
            <h2 className="text-xl font-medium text-darkd/75 dark:text-lightd/75">Projects</h2>
            <span className="inline-block text-4xl font-bold">
              <AnimatedNumbers value={6} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage