import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const HeaderM = () => {
  const [show, setShow] = useState(false);
  const variants = {
    open: { opacity: 1, x: '0%' },
    closed: { opacity: 0, x: '-100%' },
  };

  const toggleHidden = () => {
    document.body.style.overflow = 'hidden';
    setShow(!show);
  };
  const toggleUnHidden = () => {
    document.body.style.overflow = '';
    setShow(!show);
  };
  return (
    <div className="overflow-y-hidden">
      <div className="block md:hidden bg-black text-white w-screen h-16 text-2xl flex items-center">
        <button onClick={show ? toggleUnHidden : toggleHidden} className="ml-4  z-10">
          <HiOutlineMenuAlt3 />
        </button>

        <div className="w-full absolute z-0 ">
        <img src="/img/HLogo.png" alt="logo" className='w-24 mx-auto pt-4' />
      
        </div>
      </div>
      <motion.div
        className=" md:text-lg md:w-[32rem] w-[60%] h-[calc(100vh-3rem)] bg-zinc-950 absolute grid grid-cols-1  text-white pl-8 
    "
        initial={{ x: '-100%' }}
        animate={show ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Link className="mt-8" to={'/'}>
          Home
        </Link>
        <Link to={'/myWork'}>MyWork</Link>
        <Link to={'/experience'}>Experience</Link>
        <Link to={'/qualification'}>Qualification</Link>
        <Link to={'/aboutMe'}>AboutMe</Link>
        <Link className="mb-4" to={'/knowMore'}>
          KnowMore
        </Link>
      </motion.div>
    </div>
  );
};

export default HeaderM;
