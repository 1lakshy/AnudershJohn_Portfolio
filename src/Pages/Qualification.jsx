import React from 'react';

const Qualification = () => {
  return (
    <div className="w-screen h-[calc(100vh-3rem)] overflow-x-hidden bg-zinc-950 flex flex-col text-white items-center">
      <div className="h-12 flex items-center justify-center">
        <h1 className="text-2xl">Qualifications</h1>
      </div>
      <div className=" mb-4 mt-8 md:w-4/6 flex flex-col items-center md:flex-row md:justify-evenly text-zinc-400 text-center text-xs ">
        <div className="w-32 h-auto mb-4">
          <img src="./img/Q1.jpg" alt="" />
        </div>
        <div className="text-lg w-[calc(100vw-2rem)] md:w-9/12 md:mx-auto">
          <p>
            Completed Post Graduate Diploma in Management Media and Advertising
            from Welingkar Institute of Management Development and Research in
            the Year 2017 - 2018
          </p>
        </div>
      </div>
      <div className=" mb-4 mt-8 md:w-4/6 flex flex-col items-center md:flex-row md:justify-evenly text-zinc-400 text-center text-xs ">
        <div className="w-32 h-auto mb-4">
          <img src="./img/Q2.jpg" alt="" />
        </div>
        <div className="text-lg w-[calc(100vw-2rem)] md:w-9/12 md:mx-auto">
          <p>
            Completed Bachelor in Management Studies from Alkesh Dinesh Mody
            Institute For Financial and Management Studies, University of Mumbai
            in the Year 2011 - 2014
          </p>
        </div>
      </div>
      <div className=" mb-4 mt-8 md:w-4/6 flex flex-col items-center md:flex-row md:justify-evenly text-zinc-400 text-center text-xs ">
        <div className="w-32 h-auto mb-4">
          <img src="./img/Q3.png" alt="" />
        </div>
        <div className="text-lg w-[calc(100vw-2rem)] md:w-9/12 md:mx-auto">
          <p>
            Completed Maharashtra State Board Of Secondary and Higer Secondary
            Education, Higher Secondary Certificate from St. Mary's Junior
            College, Mumbai in the Year 2011
          </p>
        </div>
      </div>
      <div className=" mb-4 mt-8 md:w-4/6 flex flex-col items-center md:flex-row md:justify-evenly text-zinc-400 text-center text-xs ">
        <div className="w-32 h-auto mb-4">
          <img src="./img/Q4.jpg" alt="" />
        </div>
        <div className="text-lg w-[calc(100vw-2rem)] md:w-9/12 md:mx-auto">
          <p>
            Completed Maharashtra State Board Of Secondary and Higer Secondary
            Education, Secondary School Certificate from Kalina Education
            Society, Mumbai in the Year 2009
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
