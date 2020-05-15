import React from "react";
function Login(){
return (

<div class="login_box">
            
            <br></br>
            <br></br>
            <div class="box">
                <p class="txt">Username</p>
                <input type="text" name="username" placeholder="User Name" /> 
                
                <p class="txt">Password</p>
                <input type="password" name="pass" placeholder="Your Password" />
                
                <input type="submit" value="login" />  
                
            </div>            
        </div>
  );
}

export default Login;