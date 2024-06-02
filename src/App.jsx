import Background from "./components/Backgroud/Background";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import MCon from "./components/Models/MCon";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {P718} from "./components/CarCard/718";
import { P911 } from "./components/CarCard/911";
import Taycan from "./components/CarCard/Taycan";
import Panamera from "./components/CarCard/Panamera";
import { Macan } from "./components/CarCard/Macan";
import Cayenne from "./components/CarCard/Cayenne";
import Founder from "./components/About/Founder";

const App = () => {
  let heroData=[
    {text1:"Driven",text2:"By Dreams"},
    {text1:"Beauty Behind",text2:"Madness"},  
    {text1:"Just One",text2:"Ride"}
  ]
  const [heroCount,setHeroCount]=useState(0);
  const[playStatus,setPlayStatus]=useState(false);
 

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  const router=createBrowserRouter([
    {
      path:"/",
      element:   <><Background heroCount={heroCount} playStatus={playStatus}/>
      <Navbar/>
      <Hero setHeroCount={setHeroCount} 
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
      /> </>  },
    {
      path:"/Founder",
      element:<><Navbar/><Founder/></>
    },
    {
      path:"/About",
      element:<><Navbar /><About /></>
    },{
      path:"/Model",
      element:<><Navbar /><MCon /></>
    },{
      path:"/Model/718",
      element:<><Navbar /><P718/></>
    },{
      path:"/Model/911",
      element:<><Navbar /><P911/></>
    },{
      path:"/Model/Taycan",
      element:<><Navbar /><Taycan/></>
    },{
      path:"/Model/Panamera",
      element:<><Navbar /><Panamera/></>
    },{
      path:"/Model/Macan",
      element:<><Navbar /><Macan/></>
    },{
      path:"/Model/Cayenne",
      element:<><Navbar /><Cayenne/></>
    }
  ])
 
  return (
    <div>
    
   
      <RouterProvider router={router}/>
    </div>
  )
}

export default App