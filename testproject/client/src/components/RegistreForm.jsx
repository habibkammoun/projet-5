import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import { useEffect } from "react";
import OtherMethods from "./OtherMethods"
import { useState } from "react";
import Axios from "axios";
import FormButton from "./FormButton";
import FormCreateAccount from "./FormCreateAccount";


function RegistreForm(){
 
       
  
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
    return(
      
      <div id="loginform">
        <FormHeader title="create account" />
        <div class="row">
    
    
    <label>Username</label>
    <input type="text" placeholder="enter your username" onChange={(event) => {
            setname(event.target.value);
          }} required/>
    <label>Password</label>
    <input type="password" placeholder="passsword" onChange={(event) => {
            setpassword(event.target.value);
          }} required/>
    <label>email</label>
    <input type="email" placeholder="email" onChange={(event) => {
            setemail(event.target.value);
          }} required/>
  </div> 
  
  <FormButton title="create"/>
  
        <OtherMethods />
      </div>
      
    )
  
  }


export default RegistreForm;