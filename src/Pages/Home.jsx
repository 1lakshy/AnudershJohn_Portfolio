import React from 'react';
import {
  GrTwitter,
  GrLinkedinOption,
  GrFacebookOption,
  GrInstagram,
  GrYoutube,
  GrPinterest,
  GrMail,
} from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col md:h-fit lg:flex-row h-screen'>
      <div className="lg:w-6/12 w-screen h-[35%] md:h-screen overflow-hidden">
        <img src="./img/homeAvatar.jpeg" alt="" className='' />
      </div>
      <div className="bg-slate-950 h-[65%] lg:h-screen w-screen lg:w-6/12 text-center">
        <div className="flex items-center justify-center md:h-screen h-[60%] flex flex-col ">
          <div className="text-white text-center mb-4 h-[10rem] md:mb-12">
            <h1 className='lg:text-7xl text-4xl md:text-5xl font-black mb-2'>Anudersh John</h1>
            <h3 className='lg:text-xl text-xs md:text-sm text-slate-400 mb-4'>Performance Marketing Manager</h3>
            <div className="w-28 h-8 rounded-full text-sm bg-white text-black flex items-center justify-center text-center m-auto mb-8">
            <Link to={'/knowMore'}><p>Know More</p></Link>
            </div>
           
          </div>

          <div className="Social flex content-between">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4 ml-4">
            <Link to={'https://twitter.com/AnudershJohn'}>
              <GrTwitter />
            </Link>
            </div>
          
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4">
            <Link to={'https://www.linkedin.com/in/anudersh-john-1a8338b2/'}>
              <GrLinkedinOption />
            </Link>
            </div>

            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4">
            <Link to={'https://www.facebook.com/Anu05081993'}>
              <GrFacebookOption />
            </Link>
            </div>

            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4">
            <Link to={'https://www.instagram.com/anudersh_john/'}>
              <GrInstagram />
            </Link>
            </div>
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4">
            <Link to={'https://www.youtube.com/@bestofall3127'}>
              <GrYoutube />
            </Link>
            </div>
 
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4">
            <Link to={'https://in.pinterest.com/anudershjohn/'}>
              <GrPinterest />
            </Link>
            </div>
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full mr-4 ">
            <Link to={'anudershjohn@gmail.com'}>
              <GrMail />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
