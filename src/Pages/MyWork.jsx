import React from 'react';
import { Link } from 'react-router-dom';

const MyWork = () => {
  return (
    <div>
      {/* <div className="w-screen text-center">
        <h1 className="text-2xl text-white mt-8 mb-8">My Work</h1>
      </div> */}
      <div className="webiteMain md:h-[calc(100vh-20rem)] h-[calc(100vh-25rem)] flex flex-col items-center md:justify-center mb-12">
        <div className="text-black text-center ">
          <h1 className="md:text-4xl text-2xl md:text-8xl font-black text-white md:mb-16 mb-8">
            Websites
          </h1>
          <div className="grid md:grid-cols-3 md:gap-x-20 grid-cols-1 gap-y-4">
            <div className="h-12 w-[12rem] bg-white hover:bg-slate-400 cursor-pointer rounded-full flex items-center justify-center">
              <Link to="https://thelegacy.co.in/">Legacy Bespoke</Link>
            </div>
            <div className="h-12 w-[12rem] bg-white hover:bg-slate-400 cursor-pointer rounded-full flex items-center justify-center">
              <Link to="https://bathijaenterprises.com/">
                Bathija Enterprises
              </Link>
            </div>
            <div className="h-12 w-[12rem] bg-white hover:bg-slate-400 cursor-pointer rounded-full flex items-center justify-center">
              <Link to="https://brandlogik.in/">Brand Logik</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="CreativesAndDesign w-screen h-full">
        <div className="w-screen h-16 text-center md:mb-24 mb-4">
          <h1 className='md:text-4xl text-2xl md:text-8xl font-black text-white '>Creatives And Design</h1>
        </div>
        <div className="w-[90%] md:my-12 grid md:grid-cols-4 grid-cols-2  mx-auto md:gap-x-4 gap-x-2 gap-y-4">
       <Link to="/view/1">  <img src="/img/W1.png" alt="" className='Wimage'/></Link> 
       <Link to="/view/2"> <img src="/img/W2.png" alt="" className='Wimage'/></Link> 
       <Link to="/view/3"> <img src="/img/W3.png" alt="" className='Wimage'/></Link> 
       <Link to="/view/4">  <img src="/img/W4.png" alt="" className='Wimage'/></Link> 
       <Link to="/view/5" className='md:Wimage col-span-2'> <img src="/img/W5.png" alt=""/></Link> 
       <Link to="/view/6" className='md:Wimage col-span-2' > <img src="/img/W6.png" alt="" /></Link> 
          
          {/* <div className="grid grid-rows-2 col-span-2 md:h-[20rem] h-"> */}
          <Link to="/view/8" className='md:Wimage col-span-2'> <img src="/img/W8.png" alt="" className='Wimage'/></Link> 
          {/* </div> */}
          <Link to="/view/9"><img src="/img/W9.png" alt="" className='Wimage'/></Link> 
          <Link to="/view/10"><img src="/img/W10.png" alt="" className='Wimage'/></Link> 
        </div>
      </div>
    </div>
  );
};

export default MyWork;
