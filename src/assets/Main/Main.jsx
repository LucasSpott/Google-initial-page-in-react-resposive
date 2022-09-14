import { useState } from 'react'
import './Main.css'

function Main() {
  const [count, setCount] = useState(0)

  return (
    <main className="main">
      <h1>Google</h1>
      <div className='div-input'>
       <input type="text" />
        </div>
      <div className="btn">
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
        </div>
    </main>
  )
}

export default Main
