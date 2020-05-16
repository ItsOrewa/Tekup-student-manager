import React , {useState} from "react";
import axios from 'axios';
import history from '../history';
function Login(){
    const [err,seterr] = useState("");
    const [form, setForm] = useState({
      username: "",
      password: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prevForm => {
          return {
            ...prevForm,
            [name]: value
          };
        });
    }
    function log(event){
        event.preventDefault();
        console.log(form);
        
        axios.post("users/login",{username:form.username,password:form.password})
      .then(res => {
        console.log(res.data);
        
        if(!res.data.error){
          localStorage.setItem('usertoken', res.data)
          history.push('/home');
       }
       else{
          seterr(preverr=>{
            return "Wrong Username/Password";
          })
       }
    })}
return (

        <div class="login_box">
            
            <br></br>
            <br></br>
            <div className="box">
                <p className="txt">Username</p>
                <form>
                <input type="text" name="username" value={form.username} placeholder="User Name" onChange={handleChange} /> 
                
                <p className="txt">Password</p>
                <input type="password" name="password" value={form.password} placeholder="Your Password" onChange={handleChange} />
                
                <input onClick={log} type="submit" value="login" />
                <br/>
                <p style={{color:'yellow' , textAlign:'center'}}>{err}</p>  
                </form>
            </div>            
        </div>
  );
}

export default Login;