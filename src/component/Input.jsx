import React, { useEffect, useState } from 'react'
import "./Input.css"
const Input = ({ SetUserData ,userData}) => {
  const [input, SetInput] = useState({ username: "", time: "" , timestamp : ""})

  let date = new Date();
  
  const handleInput = (e) => {
    SetInput({...input, [e.target.name] : `${e.target.value}` })
  }
  useEffect(()=>{
   let timestamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
   SetInput({...input, timestamp : timestamp, totaltime : date.getTime()})
 },[])
  const AddData = (e) => {
    SetUserData([...userData,input])
  
  }

  return (
    <div className="input">
      <input type="text" name="username" id="username" placeholder='Username' onChange={handleInput} />
      <input type="text" name="time" id="time" onChange={handleInput} />
      <input type="button" value="Add" id='button' onClick={AddData} />
    </div>
  )
}

export default Input