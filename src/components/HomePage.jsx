import React, { useEffect, useState } from 'react';
import '../site.css';
import DataDisplayerList from './DataDisplayerList';
import DataDisplayerSingle from './DataDisplayerSingle';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HomePage(){
    const [records, setRecords] = useState([]);      
    const [record, setRecord] = useState([]);
   
     function getAllRecords(){
        fetch("http://51.20.115.186:5000/api/getall", {method : "GET",headers : {"contentType" : "application/json"}}).then((response) => response.json()).then( (data) => setRecords(data)).catch( (err) => console.error(err));
     }
   
     function getRecordsById(itemid){
       fetch(`http://51.20.115.186:5000/api/GetById/${itemid}`, {method : "GET",headers : {"contentType" : "application/json"}}).then((response) => response.json()).then( (data) => setRecord(data)).catch( (err) => console.error(err));
    }

     function insertRecord(itemtitle){
      const postModel = {
        title : itemtitle
      };      

      console.log(postModel,"POST MODEL");

      const options = {
        method : 'POST',
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(postModel)
      }
      fetch(`http://51.20.115.186:5000/records/insert`, options).then(getAllRecords());

     }

    const [id, setId] = useState("");   
    const [inputid, setInputValue] = useState("");

     return (
       <div className="App">   

       <Container>

        <Card className='m-25'>
          <Card.Header>
            <Button variant="primary" className='w-100' onClick={ () => getAllRecords()}>Get All Records</Button>
          </Card.Header>
          <Card.Body>         
            <Card.Text>                   
              <DataDisplayerList props = {records} />
            </Card.Text>          
          </Card.Body>
        </Card>

        <Card className='m-25'>
          <Card.Header>
            <Row>
              <Col> 
                <input className='w-100 l-h-2' type='text' onChange={(e) => setId(e.target.value) } placeholder='Please Insert a Valid ID'></input>           
              </Col>
              <Col>
                <Button variant="primary" className='w-100' onClick={ () => getRecordsById(id)}>Get Title By Id</Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <DataDisplayerSingle props={record}/>
          </Card.Body>
        </Card>

        <Card className='m-25'>
          <Card.Header>
            <p>Post a New Record</p>
          </Card.Header>
          <Card.Body>
            <input className='w-100 l-h-2' type='text' onChange={(e) => setInputValue(e.target.value)} placeholder='Enter Title'/>
            <Button className='m-t-25' variant='primary' onClick={ () => insertRecord(inputid)}>Create</Button>
          </Card.Body>
        </Card>
       </Container>   

       </div>
     );
}


