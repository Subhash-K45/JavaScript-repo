import React, { createContext } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { Mycontext } from './App'
import { useContext } from 'react'
import { useReducer } from 'react'
export default function Component1() {
    
    const [user_input,set_user_input] = useState("")
    return (
    <div>
        <h3>Area he visited yesterday for marketing</h3>
        <input type="text" onInput={(e)=>{
          set_user_input(e.target.value)
          localStorage.setItem('Location', e.target.value);
        }}/>
        <Link to="/next">Next</Link>
    </div>
  )
}
