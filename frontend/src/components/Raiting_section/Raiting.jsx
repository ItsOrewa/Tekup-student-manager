import React from 'react';
import Stars from './Stars'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
function Raiting(){
  return(
      <div className='RaitinBox'>
        <Container class='RatingContainer'>
        <h3>Teacher: bla bla</h3>
        <h3>Module: bla bla</h3>
        <br></br>
        <div className="row">
          <h5 className="column">Pedagogy </h5>
          <Stars className="column" key={1} id={1}/>
        </div>
        <div className="row">
          <h5 className="column">Communication</h5>
          <Stars className="column" key={2} id={2}/>
        </div>
        <div className="row">
          <h5 className="column">Course quality</h5>
          <Stars className="column" key={3}  id={3}/>
        </div>
        <div className="row">
          <h5 className="column">Surrounding</h5>
          <Stars className="column" key={4} id={4}  />
        </div>
        <div className="row">
          <h5 className="column">Test/Ds/Td/Tp quality</h5>
          <Stars className="column" key={5} id={5} />
        </div>
        <div className="row">
          <h5 className="column">Program objectives</h5>
          <Stars className="column" key={6}  id={6} />
        </div> 
        <div className="row">
          <h5 className="column">Achievement of learning objectives</h5>
          <Stars className="column" key={7} id={7} />
        </div>      
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

export default Raiting;