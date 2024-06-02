import './Background.css'
import img1 from '../../assets/bg1.jpg'
import img2 from '../../assets/bg2.jpg'
import img3 from '../../assets/bg3.jpg'
import video from '../../assets/porschecinematic.mp4'
const Background = ({playStatus,heroCount}) => {
   if(playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
    )
   }
   else if(heroCount==0){
     return <img src={img1} className='background fade-in' alt=''/>

   }
   else if(heroCount==1){
    return <img src={img2} className='background fade-in' alt=''/>

  }
  else if(heroCount==2){
    return <img src={img3} className='background' alt=''/>

  }
}

export default Background