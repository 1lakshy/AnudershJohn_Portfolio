import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" hidden md:block md:flex justify-around flex-row  bg-black text-slate-200 w-screen h-32 items-center">
      <div className="w-40 incline-block m-0">
        <img src="/img/HLogo.png" alt="logo" />
        
      </div>
      <div className=" md:text-[1rem] md:w-[50%] flex justify-evenly items-center h-16">
        <Link to={'/'}>Home</Link>
        <Link to={'/myWork'}>MyWork</Link>
        <Link to={'/experience'}>Experience</Link>
        <Link to={'/qualification'}>Qualification</Link>
        <Link to={'/aboutMe'}>AboutMe</Link>
        <Link to={'/knowMore'}>KnowMore</Link>
      </div>
      {/* <div className="mx-auto w-20 h-12 flex items-center ">
          <p>Anu</p>
        </div> */}
    </div>
  );
};

export default Header;
