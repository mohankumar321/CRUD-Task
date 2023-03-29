import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/base";




 export default function User({user, setUser}){
  const history= useHistory()

   
    const DeleteUser=(idx)=>{
        const ALterlist=user.filter((per,Id)=>per.Id!==idx);
        setUser (ALterlist)
           }

     return (
        <BaseApp
        title="USER DETAILS">
                 
          <div className="user-content">
     
            {user.map((person, idx)=>(

                <div className="user-box" key={idx}>
                   
                   <h3 className="box name ">{person.Name}
                   <span className="box id ">   ID      <span>&#9755; </span> <b>{person.Id}</b></span></h3>
                   <h3 className="box sex l ">  Sex     <span>&#10521;</span> <b>{person.Sex}</b></h3>
                   <h3 className="box batch l ">Batch   <span>&#10521;</span> <b>{person.Batch}</b></h3>
                   <h3 className="box mail l "> Email   <span>&#10521;</span> <b>{person.Email}</b> </h3>
                   <h3 className="box exp l ">  Exp     <span>&#10521;</span> <b>{person.Experience}</b></h3>

                    <div className="btn-box">
                    <button className="user-btn edt"
                  onClick={()=>history.push(`/user/${idx}`)} >Read</button>

                    <button className="user-btn updt" 
                    onClick={()=>history.push(`/edit/${person.Id}`)}>Edit </button>

                    <button className="user-btn dlt"
                  onClick={()=>DeleteUser(person.Id)} >Delete</button>
                   

                   </div>

                </div>
            ))}
          </div>
        </BaseApp>
        
        
    )
}