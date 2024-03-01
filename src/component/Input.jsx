import React from 'react'
import "./Input.css"
const Input = () => {
  return (
    <div className="input">
    <input type="text" name="username" id="username" placeholder='Username' />
    <input type="text" name="time" id="time" />
    <input type="button" value="Add" id='button'/>
    </div>
  )
}

export default Input