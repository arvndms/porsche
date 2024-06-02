import './Hero.css'
import back from '../../assets/arrow_btn.png'
import pause from '../../assets/pause_icon.png'
import play from '../../assets/play_icon.png'
import engine from '../../assets/engine.jpg'
const Hero = ({setHeroCount,setPlayStatus,heroCount,heroData,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Drive</p>
        <img src={back} alt=''/>
      </div>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={()=>setHeroCount(0)} className={heroCount==0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount==1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount==2?"hero-dot orange":"hero-dot"}></li>
        </ul>
     
       <div className="hero-play">
        <img onClick={()=>setPlayStatus(!playStatus)}src={playStatus?pause:play} alt=''/>
       </div>
      </div>
    </div>
  )
}

export default Hero