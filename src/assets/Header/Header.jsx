import { useState } from "react";
import './Header.css'

function Header(){
  return(
    <header>
    <div className="links">
      
      <img className="profile-image" src="https://lh3.googleusercontent.com/ogw/ADGmqu8bN0XPhG1JeKsDI3OIFxbjn9MvLBbUOb0UwSRE=s32-c-mo"></img>
      
      <a href="#">Imagens</a>
      <a href="#">Gmail</a>
      
    </div>
    </header>
  )
}
export default Header