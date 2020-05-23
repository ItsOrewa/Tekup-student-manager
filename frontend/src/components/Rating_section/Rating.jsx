import React from 'react';
import Stars from './Stars'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
function Rating(){
  const qualities = ['Pedagogy','Communication','Course quality','Surrounding','Test/Ds/Td/Tp quality','Program objectives','Achievement of learning objectives']
  return(
      <div className='RaitinBox'>
        <Container className='RatingContainer'>
        <h3>Teacher: bla bla</h3>
        <h3>Module: bla bla</h3>
        <br></br>

        {qualities.map((quality,index)=>{
            return (
              <Stars  key={index} id={index} quality = {quality}/>
            )
        })}        
        <div className="RatingButton">
        <Button variant="contained" color="primary" disableElevation>
           Save
        </Button>
        <Button variant="contained" color="primary" disableElevation> 
           Cancel
        </Button>
        </div>
        </Container>
      </div>
    )
}

export default Rating;