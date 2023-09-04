import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const KnowMore = () => {
  return (
    <div>
      <div className="Main text-center md:h-[calc(100vh-4rem)] h-[calc(100vh-15rem)] w-screen bg-zinc-900 flex flex-col items-center justify-center">
        <h1 className=" text-4xl md:text-8xl font-black text-white md:mb-8 ">
          Hi, I'm Anudersh John!
        </h1>
        <p className="text-slate-400 text-lg md:mb-32 mb-12">Scroll down to know more</p>

        {/* <Link to="#know" className='text-4xl text-white'><IoIosArrowDown/></Link> */}
        <AnchorLink
          href="#know"
          className="text-2xl md:text-4xl text-white delay-1000 duration-1000"
        >
          <button>
            <IoIosArrowDown />
          </button>
        </AnchorLink>
      </div>
      <div
        className="w-[85%] mx-auto bg-zinc-900 text-white text-lg md:pt-8 h-full mb-4 text-center"
        id="know"
      >
        <div className="MainRoutes grid grid-cols-2 gap-x-4  gap-y-8 grid-row-2 overflow-hidden">
          <Link to="/myWork">
            <div className="">
              <img className="rounded-t-3xl md:h-[30rem]" src="./img/k1.jpg" alt=''
               onMouseOver={e => (e.currentTarget.src = "./img/k5.jpg")} 
               onMouseOut={e => (e.currentTarget.src = "./img/k1.jpg")} />
              <div className=" h-20 bg-black rounded-b-3xl flex items-center justify-center">
                <p>My Work</p>
              </div>
            </div>
          </Link>
          <Link to="/experience">
            <div className="">
              <img className="rounded-t-3xl md:h-[30rem]" src="./img/k2.jpg" alt=""
              onMouseOver={e => (e.currentTarget.src = "./img/k6.jpg")} 
              onMouseOut={e => (e.currentTarget.src = "./img/k2.jpg")} />
              <div className="w-full  h-20 bg-black rounded-b-3xl flex items-center justify-center">
                <p>Experience</p>
              </div>
            </div>
          </Link>

          <Link to="/qualification">
            <div className="w-full h-auto">
              <img className="rounded-t-3xl md:h-[30rem]" src="./img/k3.jpg" alt=""
              onMouseOver={e => (e.currentTarget.src = "./img/k7.jpg")} 
              onMouseOut={e => (e.currentTarget.src = "./img/k3.jpg")} /> 
              <div className="w-full  h-20 bg-black rounded-b-3xl flex items-center justify-center">
                <p>Qualifications</p>
              </div>
            </div>
          </Link>
          <Link to="/aboutMe">
            <div className="w-full h-auto">
              <img className="rounded-t-3xl md:h-[30rem] md:mx-auto" src="./img/k4.jpg" alt=""
              onMouseOver={e => (e.currentTarget.src = "./img/k8.jpg")} 
              onMouseOut={e => (e.currentTarget.src = "./img/k4.jpg")}  />
              <div className="w-full  h-20 bg-black rounded-b-3xl flex items-center justify-center">
                <p>About Me</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
