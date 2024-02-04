import React, { useEffect, useState } from 'react';
import '../styles.css';
import Table from 'react-bootstrap/Table';

export default function DataDisplayerList({props}) {
 

  //console.log(props);
  

  //return( <div className='listView'> {props.map( (record,index) => <p key={index}>id = {record._id} title ={record.title}</p>  )} </div> )

  return(
 
         
      <Table striped bordered hover>
            <thead>
              <tr>                
                <th>ID</th>
                <th>Title</th>                
              </tr>
            </thead>
            <tbody>
              {props.map( (record,index) => 
              <tr key={index}>
                <td>{record._id}</td>
                <td>{record.title}</td>
              </tr>)}             
            </tbody>
          </Table>
    
  )



}
