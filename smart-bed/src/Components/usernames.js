import React from "react";
import supabase from "../supabaseClient";
import { useState, useEffect } from "react";

function UserName() {
    const [email, setEmail] = useState([]);

    useEffect(() => {
        fetchUserName();
      }, []);

      
    async function fetchUserName() {
        let response = await supabase
        .from('users')
        .select()
    console.log(response);
    setEmail(response.data);


}

    return (
      <div className="container">
        <h3>{ email.length } user count </h3>        
      </div>
    );
  }
  
  export default UserName;