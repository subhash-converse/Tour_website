import React, { useState } from 'react';
import  logo from '../Image/travelin img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBriefcase, faHeart, faMagnifyingGlass, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import "../App.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import user from '../Image/user.jpg'
import img from '../Image/k icon.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';


const UserAddPage = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isCareerVisible, setIsCareerVisible] = useState(false);
  const [listButtonColor, setListButtonColor] = useState('black');
  const [careerButtonColor, setCareerButtonColor] = useState('black');
  const [navVisible,setNavVisible] =useState(false);
  const [navMenuvisible,setNavMenuvisible]=useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
    setListButtonColor(isListVisible ? '#232323' : '#20B2AA');
  };

  const toggleCareerVisibility = () => {
    setIsCareerVisible(!isCareerVisible);
    setCareerButtonColor(isCareerVisible ? '#232323' : '#20B2AA');
  };


  const navication=()=>{
    setNavVisible(!navVisible);
  }

  const MenuNavication=()=>{
    setNavMenuvisible(!navMenuvisible);
  }

  const Blink=()=>{
    return<div className='notification-circle'>
      </div>
  }


  return (
       <div className='h-screen  '>
        {/* logo,search */}
        <div className='w-full sticky top-0 flex border-b-[1px] border-gray-200 h-[65px]'>
          {(!navVisible ? <div className=' hidden lg: bg-white z-10 border-r-[1px] border-gray-200 lg:flex items-center   min-w-[240px] lg:min-w-[240px] px-[20px] justify-between'>
                            <img src={logo} alt="logo" className=' h-[30px] w-[160px]  lg:inline-block lg:justify-self-start'/>
                            <FontAwesomeIcon icon={faBars} className='text-[#696767] text-lg' onClick={navication} />
                         </div>
                          :
                          <div className=' hidden lg:block min-w-[72px] text-center z-[1] border-r-[1px] bg-white border-gray-200 p-5'>
                            <FontAwesomeIcon icon={faXmark} className='text-[#5f5d5d] text-[20px]'  onClick={navication}/>
                         </div> 
                          )}

          {(!navMenuvisible? <div className='  lg:hidden min-w-[72px] text-center z-10 border-r-[1px] bg-white border-gray-200 p-5'>
                                <FontAwesomeIcon icon={faBars} className='text-[#696767] text-lg' onClick={MenuNavication} />
                             </div>
                            :
                            <div className='  bg-white  z-10  border-r-[1px] border-gray-200  items-center flex-col  min-w-[240px] h-screen   justify-between lg:hidden'>
                            <div className='flex h-[65px] justify-between items-center border-[1px] border-b-gray-200 px-6 z-10'>
                                <img src={logo} alt="logo" className=' h-[30px] w-[140px]  lg:inline'/>
                                <FontAwesomeIcon icon={faXmark} className='text-[#5f5d5d] text-[20px]'  onClick={MenuNavication}/>
                            </div>
                            <div className='mt-4 border-b-2 border-dashed border-gray-300 px-2 bg-white'>
                            <button className='flex items-centerp  py-[10px] w-full  nav-button' style={{ color: listButtonColor }} onClick={toggleListVisibility}>
                                <span className='flex gap-3 items-center w-full'>
                                    <span className='min-w-[25px] text-center'><PersonOutlineIcon /></span>
                                    <div className='w-full flex justify-between'>
                                        <span style={{fontSize:'14px',fontWeight:'500'}}>User Management</span>
                                        <span>{isListVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                                    </div>
                                </span>
                            </button>

 {isListVisible && (
    <ul className='bullet-list'>
          <li><Link to="/">All User Lists</Link></li>
          <li><Link to="/adduser">Add User</Link></li>
    </ul>)}
</div>
<div>

{/* candidate */}
<div className='border-b-2 border-dashed border-gray-300 pl-2'>
<button className='nav-button flex items-center py-[10px] justify-betweenc w-full nav-button' onClick={toggleCareerVisibility} style={{ color: careerButtonColor }}>
    <span className='flex gap-3 items-center w-full'>
        <span ><FontAwesomeIcon icon={faBriefcase} className='min-w-[25px] text-center ' /></span>
        <div className='w-full flex justify-between '>
            <span >Career Management</span>  
            <span>{isCareerVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
        </div>
    </span>
</button>              

 {isCareerVisible && (
    <ul className='bullet-list'  >
        <li>All Job vacancies</li>
        <li>Add Job Vacancy</li>
        <li>All Candidate List</li>
    </ul>)}
</div>
</div>
</div>
)}            

           {/* search */}
           <div className='bg-white  w-full  flex items-center justify-between  px-2 md:px-6'>
                <div className='flex items-center gap-2  md:gap-5'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=' hidden text-[#7987a1;] md:inline-block'style={{height:'18px',width:'18px'}}/>
                    <input type="text" placeholder='Search here...' className='outline-none hidden  md:inline-block  md:w-[400px]'/>
                </div>

                <div className='flex items-center gap-2  md:gap-5 pr-6'>
                    <NotificationsNoneIcon /> <Blink/>
                    <Avatar alt="Remy Sharp" src={img} style={{height:'30px',width:'30px'}} />
                </div>
           </div>
      </div>

        {/* sidebar,contents */}
        <div className='lg:flex   '>
          {(!navVisible ?
          <div className=' hidden lg: bg-white  lg:flex-col h-[93vh] border-r-[1px] border-gray-200 lg:relative lg:inline-block min-w-[240px] lg:min-w-[240px] '>
            {/* user management */}
            <div className='mt-4 border-b-2 border-dashed border-gray-300 pl-2'>
                <button className='flex items-centerp  py-[10px] w-full  nav-button' style={{ color: listButtonColor }} onClick={toggleListVisibility}>
                    <span className='flex gap-3 items-center w-full'>
                        <span className='min-w-[25px] text-center'><PersonOutlineIcon /></span>
                        <div className='w-full flex justify-between'>
                            <span style={{fontSize:'14px',fontWeight:'500'}}>User Management</span>
                            <span>{isListVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                        </div>
                    </span>
              </button>

               {isListVisible && (
                  <ul className='bullet-list'>
                    <li><Link to="/">All User Lists</Link></li>
                    <li><Link to="/adduser">Add User</Link></li>
                  </ul>)}
            </div>

            {/* candidate */}
            <div className='border-b-2 border-dashed border-gray-300 pl-2'>
                <button className='nav-button flex items-center py-[10px] justify-betweenc w-full nav-button' onClick={toggleCareerVisibility} style={{ color: careerButtonColor }}>
                    <span className='flex gap-3 items-center w-full'>
                        <span ><FontAwesomeIcon icon={faBriefcase} className='min-w-[25px] text-center ' /></span>
                        <div className='w-full flex justify-between '>
                            <span >Career Management</span>  
                            <span>{isCareerVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                        </div>
                    </span>
                </button>              

              {isCareerVisible && (
                  <ul className='bullet-list'  >
                     <li>All Job vacancies</li>
                     <li>Add Job Vacancy</li>
                     <li>All Candidate List</li>
                  </ul>)}
            </div>
          </div> :
          <div className=' px-[20px] hidden fixed] bg-white  h-[92vh] border-r-[1px] border-gray-200 md:relative md:inline-block  min-w-[72px] '>

          {/* user management */}
          <div className=''>
            <button className='flex items-centerp py-[10px] w-full  nav-button' style={{ color: listButtonColor }} onClick={toggleListVisibility}>
              <span className='flex gap-3 items-center w-full'>
                <span className='min-w-[25px] text-center'><PersonOutlineIcon/></span>
              </span>
            </button>
          </div>

          {/* candidate */}
          <div className=''>
            <button className='nav-button flex items-center py-[10px] justify-betweenc w-full nav-button' onClick={toggleCareerVisibility} style={{ color: careerButtonColor }}>
                <span className='flex gap-3 items-center w-full'>
                    <span className='min-w-[25px] text-center '><FontAwesomeIcon icon={faBriefcase} /></span>
                </span>
            </button>              
          </div>
        </div>
           )}

          {/* table or form content */}
          < div className='shadow-inner flex flex-col bg-[#f9fafb] px-2 shadow-gray-200 overflow-scroll w-full h-[93vh] md:justify-between '>
          {/* <Vacancylist/> */}
          {/* <Addjovvacancy/> */}
          {/* copy right */}
            <div className=' w-full flex flex-col font-sans font-normal   text-gray-400  text-sm items-center border-t-[1px] border-gray-200 md:flex-row md: justify-between bg-[#f9fafb] pt-4'>
                <span>Copyright <span>&copy;</span>2022 <span className='text-[#029e9d] font-sans'>Travelin</span></span>
                <span>Powered By <span><FavoriteBorderIcon className='text-[#7782fe]'/></span> Bizberg Themes</span>
            </div>
          </div>

        </div>
  </div>
  )
}

export default UserAddPage;