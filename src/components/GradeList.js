import GradeElement from "@/components/GradeElement"
import GradeHeader from "@/components/GradeHeader"

const GradeList = ({ requestState, electiveState, geState, othersState, search, header, content }) => {

  let contentElements = [];

  for(const course of content) {
    for(const key in course) {
      if((course[key]).includes(search)) {
        course.type === '必修' && requestState && contentElements.push(<GradeElement type={course.type} credit={course.credit} chiName={course.chiName} engName={course.engName} avg={course.avg} grade={course.grade} gpa={course.gpa} />);
        course.type === '選修' && electiveState && contentElements.push(<GradeElement type={course.type} credit={course.credit} chiName={course.chiName} engName={course.engName} avg={course.avg} grade={course.grade} gpa={course.gpa} />); 
        course.type === '通識' && geState && contentElements.push(<GradeElement type={course.type} credit={course.credit} chiName={course.chiName} engName={course.engName} avg={course.avg} grade={course.grade} gpa={course.gpa} />);
        (course.type !== '必修' && course.type !== '選修' && course.type !== '通識') && othersState && contentElements.push(<GradeElement type={course.type} credit={course.credit} chiName={course.chiName} engName={course.engName} avg={course.avg} grade={course.grade} gpa={course.gpa} />);
        break;
      }
    }
  }

  return (
    <>
      {
        contentElements.length > 0 ?
          <>
            <GradeHeader 
              year={header.year}
              semester={header.semester}
              short={header.short}
              credit={header.credit}
              classRank={header.classRank}
              deptRank={header.deptRank}
              avg={header.avg}
              gpa={header.gpa}
            />
            <div className="w-full flex justify-center">
              <div className="w-[95%]">
                {contentElements}
              </div>
            </div>
          </>
        : null
      }
    </>
  )
}

export default GradeList