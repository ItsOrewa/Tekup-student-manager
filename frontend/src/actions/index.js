import axios from 'axios';
import history from '../history';

export const login = (form) => {
    return async function(dispatch,getState){
        const response = await  axios.post("users/login",{username:form.username,password:form.password});
        if(!response.data.error){
            localStorage.setItem('usertoken', response.data)
            history.push('/home');
            dispatch({type:'LOGIN',payload:{IsLoggedIn : true , autherr : false }})
        }
        else{
            dispatch({type:'LOGIN',payload:{IsLoggedIn : false , autherr : true }})
        }
    }
};

export const logout = () => {
    localStorage.removeItem('usertoken');
    return {
        type:'LOGOUT',
        payload:{IsLoggedIn:false,autherr:false}
    }
};