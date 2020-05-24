import React from "react";
import ResultTable from './ResultTable';
import Button from '@material-ui/core/Button'

function Result(){
    return (
    <div>
        <div className='ResultInfo'>
            <h6>Name: blabla</h6> 
            <h6>Class: blabla</h6>
            <h6>Semester : blabla</h6>
            <h6>Moy : 12.66</h6>
        </div>
        <br></br>
        <ResultTable/>
        <div className="AbsenceButton">
            <Button variant="contained" color="primary" disableElevation>
            Back
            </Button>
        </div>  
    </div>

    )
}

export default Result;