import './Navbar.css'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/list.svg'

const Navbar = () => {
  return (
    <div className='nav'>
    <div className="dropdown">
    <img src={menu} onClick={()=>{ return document.getElementById("myDropdown").classList.toggle("show");}} className="dropbtn"/>
    <div id="myDropdown" className="dropdown-content">
       <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/Model"><li>Model</li></NavLink>
       <NavLink to="/Founder"><li>Founder</li></NavLink>
       <NavLink to="/About"><li>About</li></NavLink>

    </div>
    </div>
      <div className='nav-logo'>
         PORSCHE
      </div>
      <ul className='nav-menu'>
       <NavLink className={(e)=>{return e.Active?"red":"nav-menu-text"}}to="/"><li>Home</li></NavLink>
       <NavLink className={(e)=>{return e.Active?"red":"nav-menu-text"}}to="/Model"><li>Model</li></NavLink>
       <NavLink className={(e)=>{return e.Active?"red":"nav-menu-text"}}to="/Founder"><li>Founder</li></NavLink>
       <NavLink className={(e)=>{return e.Active?"red":"nav-menu-text"}}to="/About"><li>About</li></NavLink>

      </ul>
    
      
    </div>
  )
}

export default Navbar