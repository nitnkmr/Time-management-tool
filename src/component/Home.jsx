import React, { useEffect, useState } from 'react'
import Input from './Input'
import "./Home.css"
import CardBody from './CardBody'
// UI is ready next thing is to think how to add desired functionality to it.
const Home = () => {
  const [userData, SetUserData]= useState([]);
  const [valid, Setvalid]= useState(true);
  useEffect(()=>{
      console.log("useeffect");
      console.log(userData)
  },[])
  setInterval(()=>{
    let currenttime = new Date().getTime()

    userData.map((e)=>{
      if(currenttime <= e.endTime){
        Setvalid(false)
      }else{
        Setvalid(true)
      }
    console.log(currenttime, "ct")
    console.log(e.endTime, "et")
    console.log(e)
    })
    },10000)

  return (
    <>
<div><Input SetUserData = {SetUserData} userData ={userData} /></div>
<div className="container">
  <div className="cardHeader flex">
    <h3>Sr No.</h3>
    <h3>Name</h3>
    <h3>Entry Time</h3>
    <h3>Total Time</h3>
    <h3>Add Time</h3>
  </div>
  {userData.map((ele,i)=>valid ? <CardBody ele ={ele} key={i} i={i} clr = {"white"}/>: <CardBody ele ={ele} key={i} i={i} clr = {"yellow"}/>)}
</div>
    
    </>

  )
}

export default Home