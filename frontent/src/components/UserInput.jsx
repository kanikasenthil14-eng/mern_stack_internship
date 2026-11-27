import React from 'react'
import {useState,useEffect} from 'react'

const UserInput = () => {
    const [Name,SetName]=useState("");
    useEffect(()=>{
        console.log("changing",Name);
    },[Name]);

  return (
    <div>
        <h3>User Input</h3>
        <input
        type="text"
        value={Name}
        onChange={(t)=>{SetName(t.target.value)}}
        placeholder="Enter your name"
        />
        <p>Welcome, {Name}</p>
    </div>
  )
}

export default UserInput