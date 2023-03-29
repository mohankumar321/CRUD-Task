import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/base";

export default function UserDetails({user}){
    const {Id}=useParams();
    const person =user[Id];
    return(
        <BaseApp 
        
        title="User-Details">
        <div className="user-content us-detail">
     
            <div className="user-box">

            <h3 className="box name ">{person.Name}
                   <span className="box id ">   ID      <span>&#9755; </span> <b>{person.Id}</b></span></h3>
                   <h3 className="box sex l ">  Sex     <span>&#10521;</span> <b>{person.Sex}</b></h3>
                   <h3 className="box batch l ">Batch   <span>&#10521;</span> <b>{person.Batch}</b></h3>
                   <h3 className="box mail l "> Email   <span>&#10521;</span> <b>{person.Email}</b> </h3>
                   <h3 className="box exp l ">  Exp     <span>&#10521;</span> <b>{person.Experience}</b></h3>

         </div>
         </div>
        
        </BaseApp>
    )}