const ToggleButton = ({ state, setState, text, btnColor, className='' }) => {

  let bgs1;
  let bgs2;
  let poss2;
  let borderColor;

  if(state === true) {
    bgs1 = `bg-[${btnColor}]`
    bgs2 = 'bg-darkd/75 dark:bg-lightd/75'
    poss2 = 'right-[19px]'
  } else {
    bgs1 = 'bg-transparent'
    bgs2 = 'bg-transparent'
    poss2 = 'right-[46px]'
  }

  switch(btnColor) {
    case '#ffa500': 
      bgs1 = state === true ? 'bg-[#ffa500]' : 'bg-transparent';
      borderColor = 'border-[#ffa500]';
      break;

    case '#00d100':
      bgs1 = state === true ? 'bg-[#00d100]' : 'bg-transparent';
      borderColor = 'border-[#00D100]';
      break;  

    case '#ff2e2e':
      bgs1 = state === true ? 'bg-[#ff2e2e]' : 'bg-transparent';
      borderColor = 'border-[#ff2e2e]';
      break;

    case '#088ffa':
      bgs1 = state === true ? 'bg-[#088ffa]' : 'bg-transparent';
      borderColor = 'border-[#088ffa]';
      break;
  }

  return (
    <div>
      <button className={`w-full py-4 rounded-2xl relative border-2 border-darkd/75 dark:border-lightd/75 hover:border-first dark:hover:border-first ${className}`} 
        onClick={() => setState(!state)}
      >
        <input type="checkbox" id="check" className="sr-only peer"/>
        <div className="w-full h-full flex justify-center relative">
          <div className="w-full text-lightt dark:text-darkt">{text}</div>
          <span className={`absolute w-[54px] right-4 rounded-full border ${borderColor} ${bgs1}`}>&nbsp;</span>
          <span className={`absolute w-[21px] h-[21px] top-[2px] ${poss2} rounded-full border ${borderColor} ${bgs2} transition-all duration-300`}>
            &nbsp;
          </span>
          <div className="w-28"></div>
        </div>
      </button>
    </div>
  )
}

export default ToggleButton