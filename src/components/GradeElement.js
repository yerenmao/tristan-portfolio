const GradeElement = ({ type, credit, chiName, engName, avg, grade, gpa }) => {

  let borderColor;

  switch(type) {
    case '必修':
      borderColor='border-[#ffa500]';
      break;

    case '選修':
      borderColor='border-[#00d100]';
      break;

    case '通識':
      borderColor='border-[#ff2e2e]';
      break;
    
    default:
      borderColor='border-[#088ffa]';
      break;
  }

  return (
    <div className="w-full my-4 py-2 flex border-2 rounded-2xl border-darkd/75 dark:border-lightd/75 text-darkd dark:text-lightd">
      <div className={`w-[120px] px-2 ml-2 hidden lg:flex justify-center items-center border-2 rounded-full text-sm ${borderColor}`}>
          {type}&nbsp;|&nbsp;{credit} 學分
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='ml-4 lg:ml-6 flex flex-col justify-around items-start'>
          <div>{chiName}</div>
          <div className="text-sm">{engName}</div>
        </div>
        <div className='mr-4 flex flex-col justify-between lg:justify-around items-end'>
          <div className="text-sm hidden lg:inline">學期成績:&nbsp;{avg}</div>
          <div className="text-sm hidden lg:inline">{grade}&nbsp;|&nbsp;GPA:&nbsp;{gpa}</div>
          <div className={`text-sm inline lg:hidden px-1 mb-2 border rounded-2xl ${borderColor}`}>{type}&nbsp;|&nbsp;{credit}&nbsp;學分</div>
          <div className="text-sm inline-block lg:hidden">{avg}&nbsp;|&nbsp;{grade}&nbsp;|&nbsp;GPA:&nbsp;{gpa}</div>
        </div>
      </div>
    </div>
  )
}

export default GradeElement