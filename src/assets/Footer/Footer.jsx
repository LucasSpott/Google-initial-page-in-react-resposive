import { useState } from 'react'
import './footer.css'

function Footer(){
  return(
    <footer>
      <div className="contato">
        <div className="contatoright">
        <p>Sobre</p>
        <p>Publicidade</p>
        <p>Negócios</p>
        <p>Como funciona a Pesquisa</p>
        </div>
        <div className="contatoleft">
        <p>Privacidade</p>
        <p>Termos</p>
        <p>Configurações</p>
       </div>
        
      </div>
    </footer>

  )
}
export default Footer