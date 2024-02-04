import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function DataDisplayerSingle({props}) {
    //return <div>{props.title}</div>;


    return (
        <Card>
        <Card.Header>Get By Id Response</Card.Header>
        <Card.Body>         
          <Card.Text>
           <p className='f-b-500'>Title : {props.title}</p>
          </Card.Text>          
        </Card.Body>
      </Card>
    );
   

}