import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { SlClose } from "react-icons/sl";

export const View = () => {
    const history = useNavigate();
    const {id} = useParams();
  return (
    <div className='flex text-white'>
        <div className="w-[80%] h-[calc(100%-6rem)] bg-black mx-auto my-12 relative md:rounded-3xl">
        <button className='absolute right-0 top-[-2rem] md:top-[-3rem] md:w-12 md:h-12 md:text-3xl' onClick={()=> history(-1)}><SlClose/></button>
        <img src={`/img/w${id}.png`} alt="" srcset="" className='max-h-[calc(100vh-6rem)] m-auto w-auto' />
      
        </div>
       
    </div>
  )
}
