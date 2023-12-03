import React from 'react'
import { useReducer } from 'react'

export default function Component2() {
    
    const y = localStorage.getItem('Location')
  return (
    <div>
        <h3>Area he visited for marketing</h3>
        <p>{y}</p>
    </div>
  )
}
