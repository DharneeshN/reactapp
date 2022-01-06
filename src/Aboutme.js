import React from 'react'
import Button from './Button'

import {useNavigate} from 'react-router-dom'
function Aboutme() {

    let navigate =useNavigate()
    return (
        <div className="App-header">
            <p>
          This is my first react website
        </p>
        <a
          className="App-link"
          href="https://dharneeshn.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </a>
        <button onClick={()=>{navigate("/")}}><Button buttonText ="Go to Home Page" /></button>
        </div>
    )
}

export default Aboutme
