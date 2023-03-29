import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/base";

export function Adduser({user,setUser}){
    const history=useHistory()
    const [Id,setId]=useState("")
    const [Name,setName]=useState("")
    const [Sex,setSex]=useState("")
    const [Batch,setBatch]=useState("")
    const [Email,setMail]=useState("")
    const [Experience,setExperience]=useState("")

    const AddNewUser=()=>{
        const NewUser={
            Id,
            Name,
            Sex,
            Batch,
            Email,
            Experience
        }
    
        setUser([...user,NewUser])
        history.push("/")
      setId("");
      setName("");
      setSex("");
      setBatch("");
      setMail("");
      setExperience("");
        
    }

    return(
        <BaseApp 
        title="CreateUser">
        <div className="input-box">
         <div className="boxchild">
                <input
                 placeholder="Id"
                 value={Id}
                 onChange={(event=>setId(event.target.value))}
                 />

                <input
                 placeholder="Name"
                 value={Name}
                 onChange={(event=>setName(event.target.value))}
                 />

                <input
                 placeholder="sex"
                 value={Sex}
                 onChange={(event=>setSex(event.target.value))}
                 />

                <input 
                placeholder="Batch"
                value={Batch}
                onChange={(event=>setBatch(event.target.value))}
                />

                <input
                 placeholder="Email"
                 value={Email}
                 onChange={(event=>setMail(event.target.value))}
                 />

                <input
                 placeholder="Experience"
                 value={Experience}
                 onChange={(event=>setExperience(event.target.value))}
                 /> 
    </div>
            <button className="add" onClick={AddNewUser}><h1>A</h1><h1>D</h1><h1>D</h1></button>
        </div></BaseApp>
    )
}