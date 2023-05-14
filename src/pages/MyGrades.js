'use client'

import SearchBar from "@/components/SearchBar"
import ToggleButton from "@/components/ToggleButton"
import { useState } from "react"
import GradeList from "@/components/GradeList"

const MyGrades = () => {

  const [requestState, setRequestState] = useState(true);
  const [electiveState, setElectiveState] = useState(true);
  const [geState, setGeState] = useState(true);
  const [othersState, setOthersState] = useState(true);
  const [search, setSearch] = useState('');

  const gradesObj = [
    {
      header: {
        year: '111 學年', semester: '上學期', short: '111上', credit: '22', classRank: '1', deptRank: '2', avg: '98.00', gpa: '4.3',
      },
      content: [
        {type: '必修', credit: '3', chiName: '資料結構', engName: 'Data Structure', avg: '98', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '離散數學', engName: 'Discrete Mathematics', avg: '94', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '數位系統導論', engName: 'Introduction to Digital System', avg: '96', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '1', chiName: '數位系統實驗', engName: 'Experiment on Digital System', avg: '99', grade: 'A+', gpa: '4.3',},
        {type: '選修', credit: '3', chiName: 'Linux系統與開源軟體', engName: 'Linux System and Open Source Software', avg: '100', grade: 'A+', gpa: '4.3',},
        {type: '選修', credit: '3', chiName: '工程數學', engName: 'Engineering Mathematics', avg: '100', grade: 'A+', gpa: '4.3',},
        {type: '選修', credit: '3', chiName: '資訊安全', engName: 'Information Security', avg: '99', grade: 'A+', gpa: '4.3',},
        {type: '選修', credit: '1', chiName: '資訊工程倫理與生涯規劃', engName: 'Attitude Brilliance and Career of Computer Science and Information Engineering', avg: '100', grade: 'A+', gpa: '4.3',},
        {type: '通識', credit: '2', chiName: '西方古典音樂', engName: 'Western Classical Music', avg: '98', grade: 'A+', gpa: '4.3',},
      ]
    },
    {
      header: {
        year: '110 學年', semester: '下學期', short: '110下', credit: '15', classRank: '1', deptRank: '1', avg: '96.4', gpa: '4.3',
      },
      content: [
        {type: '必修', credit: '3', chiName: '程式設計（二）', engName: '', avg: '96', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '線性代數', engName: '', avg: '98', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '微積分（二）', engName: '', avg: '98', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '普通物理學（二）', engName: '', avg: '95', grade: 'A+', gpa: '4.3',},
        {type: '通識', credit: '2', chiName: '開放資料與智慧生活', engName: '', avg: '93', grade: 'A+', gpa: '4.3',},
        {type: '通識', credit: '1', chiName: '踏溯台南', engName: '', avg: '99', grade: 'A+', gpa: '4.3',},
      ]
    },
    {
      header: {
        year: '110 學年', semester: '上學期', short: '110上', credit: '20', classRank: '3', deptRank: '5', avg: '92.8', gpa: '4.24',
      },
      content: [
        {type: '必修', credit: '3', chiName: '程式設計（ㄧ）', engName: '', avg: '95', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '數位電路導論', engName: '', avg: '99', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '微積分（二）', engName: '', avg: '92', grade: 'A+', gpa: '4.3',},
        {type: '必修', credit: '3', chiName: '普通物理學（二）', engName: '', avg: '96', grade: 'A+', gpa: '4.3',},
        {type: '通識', credit: '2', chiName: '音樂舞蹈戲劇', engName: '', avg: '93', grade: 'A+', gpa: '4.3',},
        {type: '通識', credit: '2', chiName: '生技研發成果商品化導論', engName: '', avg: '85', grade: 'A', gpa: '4.0',},
        {type: '國文', credit: '2', chiName: '大學國文-現代文學與現代性', engName: '', avg: '90', grade: 'A+', gpa: '4.3',},
        {type: '外語', credit: '2', chiName: '職場英文', engName: '', avg: '87', grade: 'A', gpa: '4.0',},
      ]
    }
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="w-[90%] md:w-[70%] py-5">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="w-[90%] md:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
        <ToggleButton state={requestState} setState={setRequestState} text='必 修' btnColor='#ffa500' className='' />
        <ToggleButton state={electiveState} setState={setElectiveState} text='選 修' btnColor='#00d100' className='' />
        <ToggleButton state={geState} setState={setGeState} text='通 識' btnColor='#ff2e2e' className='' />
        <ToggleButton state={othersState} setState={setOthersState} text='其 他' btnColor='#088ffa' className='' />
      </div>
      <div className="w-[90%] md:w-[75%] mb-40">
        {
          gradesObj.map((list) => (
            <GradeList
              key={list.header.avg}
              search={search}
              requestState={requestState}
              electiveState={electiveState}
              geState={geState}
              othersState={othersState}
              header={list.header}
              content={list.content}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MyGrades