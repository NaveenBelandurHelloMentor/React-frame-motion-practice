import React from "react";
import { motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import "./Header.css";


const headerSvg = {
    hidden:{
        opacity:1,
        rotate:0
       },
       visible:{
        opacity:1,
        rotate:360,
        transition:{
          duration:2,
          ease:'easeInOut'
        }
       }
}

const Header = () => {



  return (
    <>
      <nav className="nav_container">
        <div className="heading_container">
          <div>
            <motion.svg
            drag
            dragConstraints={{top:2,bottom:2,left:2,right:2}}
             variants={headerSvg}
              initial='hidden'
              animate='visible'
              style={{color:'white'}}
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </motion.svg>
          </div>
          <div>
            <ul className='list'>
                <motion.li whileHover={{scale:1.3}}    transition={{ type:"spring", stiffness: 120 }}>Home</motion.li>
                <Link className='list' to='/List'>
                <motion.li whileHover={{scale:1.3}} transition={{ type:"spring", stiffness: 120 }}>UsersList</motion.li>
                </Link>
                <Link className='list' to='/contact'>
                <motion.li whileHover={{scale:1.3}} transition={{ type:"spring", stiffness: 120 }}>Contact</motion.li>
                </Link>
                <Link className='list' to='/box'>
                <motion.li whileHover={{scale:1.3}} transition={{ type:"spring", stiffness: 120 }}>Box</motion.li>
                </Link>
                <Link className='list' to='/card'>
                <motion.li whileHover={{scale:1.3}} transition={{ type:"spring", stiffness: 120 }}>Card</motion.li>
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
