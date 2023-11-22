import React from 'react'
import  {Container}from 'react-bootstrap'
import Base from './Base'

function Task() {
 
  
  return (
    <Base title={"Task"} > 
        <Container style={{width : "50rem"}}>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -1: Introduction to Browser</h5>
        <div class="ml-4 mr-2 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :10</b></div></div>
        </Container>
       <Container style={{width : "50rem"}}>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -2: Datatypes</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :8</b></div></div>
     </Container>

        <Container style={{width : "50rem"}}>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>JavaScript - Day -3: JS array & objects</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :9</b></div></div>
        </Container>

        <Container style={{width : "50rem"}}>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -4: Functions</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :9</b></div></div>
        </Container>

        <Container style={{width : "50rem"}}>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -5: ES5 vs ES6</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :10</b></div></div>
       </Container>

       
        <Container style={{width : "50rem"}}><p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -6: OOP in JS</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :7</b></div></div>
        </Container>

       <Container style={{width : "50rem"}}>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -7: Array methods</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :8</b></div></div>
        
    </Container>
    </Base>
  )
}

export default Task