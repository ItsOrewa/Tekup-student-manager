import React from 'react';
import AbsenceTable from './AbsenceTable'
import Button from '@material-ui/core/Button'

function Absence(){
    return (
    <div>
        <div className='ResultInfo'>
        <h5> Name : bla bla </h5>
        <h5>Last update : 19/05/2020</h5>
        </div>
        <br></br>
        <AbsenceTable/>
        <div className="AbsenceButton">
            <Button variant="contained" color="primary" disableElevation>
            Back
            </Button>
        </div>   
    </div>

    ); 
}

export default Absence ;