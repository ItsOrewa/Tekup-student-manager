import React  from 'react';
import LinksTable from './LinksTable'
import Button from '@material-ui/core/Button'
import {withRouter}  from 'react-router-dom'
function Links(props){
    function back(){
        props.history.push('/home')
    }

    return (
    <div>
        <div className='ResultInfo'>
        <h5> You can find here all the Teacher's contact </h5>
        </div>
        <br></br>
        <LinksTable/>
        <div className="AbsenceButton">
            <Button variant="contained" color="primary" disableElevation onClick = {back}>
            Back
            </Button>
        </div>   
    </div>

    ); 
}

export default withRouter(Links) ;