import React , {useState} from "react";
import { useSelector , useDispatch } from "react-redux";
import {login} from '../actions'
function Login(){
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
      username: "",
      password: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prevForm => {return {...prevForm,[name]: value};});
    }
    function log(event){
        event.preventDefault();
        dispatch(login(form));
    }
    if(auth === null)return;
return (

        <div className="login_box">
            
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
                <p style={{color:'yellow' , textAlign:'center'}}>{auth.autherr ? 'Wrong username/password' : ''}</p>  
                </form>
            </div>            
        </div>
  );
}

export default Login;