import React from 'react';
import AbsenceTable from './AbsenceTable'
import Button from '@material-ui/core/Button'
import {withRouter}  from 'react-router-dom'

function Absence(props){
    function back(){
        props.history.push('/home')
    }

    return (
    <div>
        <div className='ResultInfo'>
        <h5> Name : bla bla </h5>
        <h5>Last update : 19/05/2020</h5>
        </div>
        <br></br>
        <AbsenceTable/>
        <div className="AbsenceButton">
            <Button variant="contained" color="primary" disableElevation onClick = {back}>
            Back
            </Button>
        </div>   
    </div>

    ); 
}

export default withRouter(Absence) ;