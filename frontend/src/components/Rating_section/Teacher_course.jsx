import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector , useDispatch } from "react-redux";
import {rate_teacher} from '../../actions'
function Teacher_course(props){
    const rate = useSelector(state => state.rate);
    const dispatch = useDispatch();

    function displayrating(){

        dispatch(rate_teacher({name : props.name , course : props.course}))
    }
    return (
        <ListItemText primary= {'Teacher : ' +  props.name + ' Course : ' + props.course}  onClick = {displayrating}/>
    )
}

export default Teacher_course