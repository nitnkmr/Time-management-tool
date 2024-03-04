import React, { useEffect, useState } from 'react'
import Input from './Input'
import "./Home.css"
import CardBody from './CardBody'
// UI is ready next thing is to think how to add desired functionality to it.
const Home = () => {
  const [userData, SetUserData]= useState([]);
  useEffect(()=>{
      console.log("useeffect");
  },[])
  console.log(userData)

  
  setInterval(()=>{
    userData.map((e)=>{
    console.log(e.timestamp)
    })
    },1000)

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
  {userData.map((ele,i)=><CardBody ele ={ele} key={i} i={i}/>)}
</div>
    
    </>

  )
}

export default Home