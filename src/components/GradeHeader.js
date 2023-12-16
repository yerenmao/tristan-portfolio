import Link from "next/link";

const GradeHeader = ({ school, link, year, semester, short, credit, classRank, deptRank, avg, gpa }) => {
  return (
    <div className='w-full flex border-b-4 border-first text-darkd dark:text-lightd'>
      <div className="w-[168px] mb-3 mt-10 hidden sm:flex justify-center items-center">
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 text-first">
          {'@'+school}
        </Link>&nbsp;&nbsp;|&nbsp;&nbsp;{short}
      </div>
      <div className="w-[168px] mb-4 mt-10 flex sm:hidden justify-center items-center">
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 text-first">
          {'@'+school}
        </Link>&nbsp;|&nbsp;{short}
      </div>
      <div className="w-[85%] px-4 py-2 mt-8 mb-1 flex justify-evenly items-center 
      ">
        <div className="flex flex-col justify-around items-center">
          <div>學分數</div>
          <div>{credit}</div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <div>班排</div>
          <div>{classRank}</div>
        </div>
        <div className="hidden sm:flex flex-col justify-around items-center">
          <div>系排</div>
          <div>{deptRank}</div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <div>平均</div>
          <div>{avg}</div>
        </div>
        <div className="hidden sm:flex flex-col justify-around items-center">
          <div>GPA</div>
          <div>{gpa}</div>
        </div>
      </div>
    </div>
  )
}

export default GradeHeader