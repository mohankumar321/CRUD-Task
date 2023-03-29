import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/base";

export default function Edituser({user,setUser}){
    const history=useHistory()

    const [idx,setIdx]=useState("")
    const [Name,setName]=useState("")
    const [Sex,setSex]=useState("")
    const [Batch,setBatch]=useState("")
    const [Email,setMail]=useState("")
    const [Experience,setExperience]=useState("")

    const {Id}=useParams();
    const selecteduser=user.find((prsn,index)=>prsn.Id===Id);
    useEffect(() => {
        setIdx(selecteduser.Id)
        setName(selecteduser.Name)
        setSex(selecteduser.Sex)
        setBatch(selecteduser.Batch)
        setMail(selecteduser.Email)
        setExperience(selecteduser.Experience)
    }, [selecteduser]);

const UpdateUser=()=>{
    const editindex=user.findIndex(prsn=>prsn.Id===Id)
const EditedData={
    Id,
    Name,
    Sex,
    Batch,
    Email,
    Experience
}
user[editindex]=EditedData;
setUser([...user]);
history.push("/")
}
    return(
        <BaseApp 
        title="Edit-User">
         <div className="input-box edt-box">
         <div className="boxchild edt-childbox">

              <input
                 placeholder="Id" 
                 value={idx} 
                 onChange={(event=>setIdx(event.target.value))}
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
            <button className="add update" 
            onClick={UpdateUser}><h1>U</h1><h1>P</h1><h1>D</h1>
            
            <h1>A</h1><h1>T</h1><h1>E</h1></button>
        </div>
        
        </BaseApp>
    )
}