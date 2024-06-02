import React from 'react'
import './Models.css'
import { NavLink } from 'react-router-dom'


const Models = (props) => {
 

  return (
     
    <NavLink to={props.path}>
 <div key={props.name} className="flex flex-direction-row items-center  " >
    
    <div className="grid grid-cols-1 gap-30 ">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={props.img} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">{props.name}</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{props.price}</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
    </div>
    </div>
   
    </NavLink>
  )
}

export { Models}
