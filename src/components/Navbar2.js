import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar2.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


 
 function Navbar2() {
    
     const [click,setClick] = useState(false);
     const [button,setButton]=useState(true)
     const handleClick =()=>setClick(!click);
     const closeMobileMenu =()=> setClick(false);
     const showButton=()=>{
         if(window.innerWidth<=960){
         setButton(false);
     } else {
     setButton(true);
    }
     };
     useEffect(() => {
       showButton();
       },[]);
    
     window.addEventListener('resize',showButton)
     return (
     <>
     <div>
     <nav className='navbar'>
       <div className='navbar-container'>
           <Link to='/Homelogin' className='navbar-logo' onClick={closeMobileMenu}> 𝕂𝕒𝕟𝕚𝕜𝕒 <i class="fas fa-seedling"></i></Link>
          
           <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times':'fas fa-bars'}/>
               </div>
              
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              
       
                   <li className='nav-item'>
                       <Link to='/Homelogin' className='nav-links' onClick={closeMobileMenu}>
                       <i class="fas fa-home"></i>
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links'  >
                           Log out
                       </Link>
                   </li>
                   
               </ul>
       </div>
     </nav>
     </div>
     </>
    
     )
 }
 
 export default Navbar2;
 