import React, { useEffect, useState } from 'react'
import "./Input.css"
const Input = ({ SetUserData ,userData}) => {
  const [input, SetInput] = useState({ username: "", time: "" , timestamp : "" , endTime :""})
  const [minutes, SetMinutes] = useState (0);

  
  const handleInput1 = (e) => {
    SetInput({...input, [e.target.name] : `${e.target.value}` })
  }
  const handleInput2 = (e) => {
    SetMinutes(parseInt(e.target.value))
    SetInput({...input, [e.target.name] : `${e.target.value}` })
  }
  useEffect(()=>{
   let date = new Date();
   let timestamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
   let currenttime = date.getTime();
   let endTime = (currenttime/1000) + (minutes * 60)
   SetInput({...input, timestamp : timestamp, endTime : endTime})
   console.log(minutes,"minutes");
   console.log(endTime,"endtime");
   console.log(currenttime,"currentime");
 },[userData])
  const AddData = (e) => {
    SetUserData([...userData,input])
  }

  return (
    <div className="input">
      <input type="text" name="username" id="username" placeholder='Username' onChange={handleInput1} />
      <input type="text" name="time" id="time" onChange={handleInput2} />
      <input type="button" value="Add" id='button' onClick={AddData} />
    </div>
  )
}

export default Input