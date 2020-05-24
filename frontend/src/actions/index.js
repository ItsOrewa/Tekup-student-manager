import axios from 'axios';

export const login = (form,history) => {
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

export const rate_teacher = (teacher_course) => {
    return {
        type : 'RATE',
        payload:{teacher:teacher_course.name , course : teacher_course.course}
    }
}