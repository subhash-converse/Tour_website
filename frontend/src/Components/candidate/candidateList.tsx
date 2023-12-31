import { faBackspace, faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CandidateTable from './candidateTable';




const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Candidatelist = () => {

  const [open, setOpen] = React.useState(false);
  const [click,setClick]=React.useState(false);
  const[btnColor,setBtnColor]=React.useState('Navication-button')

  const handleClickOpen = () => {
    setOpen(true);
    
  };


  const Backsapace = (x:number)=>{
    setClick(!click);
     setBtnColor(click ? 'Navication-button':'Navication-button-1');
    
     
     
    
  }
 

  return (
    <div className=''>
      {/* title,add candidate button */}

      <div className='w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between'>
        <div className='text-[#029e9d] text-sm'>
          <a href='#' className='anchor-tag'>Dashboard</a> / <a href='/'>Candidate</a> / <a href='/' className='text-[#7987a1]'> Candidate List</a>
        </div>

        <div className=''>
        <button className='Export-button' onClick={handleClickOpen}>
          <span><FontAwesomeIcon icon={faFileExport} /></span>
          <span className='pl-[10px]'>Export</span>
          </button>
        </div>
      </div>

      {/* input fields */}

      <div className='shadows  p-[24px] mb-4  xl:flex lg:items-center lg:justify-between bg-white'>
        <div className=' px -[12px]'>
          <span className='flex justify-center font-bold'>Candidate List</span>
        </div>

        <div className='flex flex-col  gap-y-7 mt-3 md:flex-row gap-x-6 lg:mt-0 w-full xl:w-[75%]'>
        <input type="text" placeholder='Search by catogory title' className='border-[1px] w-[full] border-gray-200  rounded-lg outline-none px-[12px] h-12 md:w-[50%]  '/>
        
        <div className='border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 md:w-[25%]'>
        <select name="catogory" id="catogory" className=' outline-none  text-[#7987AD] w-full h-11 flex items-center'>
          <option value="catogory">catogory</option>
          <option value="1" className='drop-option'>1</option>
          <option value="2" className='drop-option'>2</option>
          <option value="3" className='drop-option'>3</option>
        </select>
        </div>
        <div className='border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 md:w-[25%]'>
        <select name="catogory" id="catogory" className=' outline-none  text-[#7987AD] w-full h-11 flex items-center'>
          <option value="Show Entries">Show Entries</option>
          <option value="10" className='drop-option'>10</option>
          <option value="20" className='drop-option'>20</option>
          <option value="30" className='drop-option'>30</option>
          </select>
        </div>
        </div>
      </div>

      {/* candidate table */}
      <div className=' shadows max-h-[496px] overflow-scroll xl:overflow-x-hidden p-[24px] pt-0 bg-white mb-[15px]'>
        <CandidateTable/>
      </div>

      {/* pagenation */}
      <div className='w-full'>
        <div  className='flex gap-2 justify-center lg:justify-start'>
        <button id='btn1' className={btnColor} onClick={()=>Backsapace(1)}>Previous</button>
        <button id='btn2' className={btnColor} onClick={()=>Backsapace(2)}>1</button>
        <button id='btn3' className={btnColor} onClick={()=>Backsapace(3)}>2</button>
        <button id='btn4' className={btnColor} onClick={()=>Backsapace(4)}>3</button>
        <button id='btn15' className={btnColor} onClick={()=>Backsapace(5)}>Next</button>
        </div>
      </div>
        
    </div>
  )
}

export default Candidatelist