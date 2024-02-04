import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../custom-effects.css';

export default function TestPage(){
    
    function insertRecord(){
        const postModel = {
          name : "NET",
          email : "NET@mail.com",
          phoneNumber : "05338993122",
          employeeCount : 550,
          someField : "some field for test",
          isAuthorized : false
        };      
  
        console.log(postModel,"POST MODEL");
  
        const options = {
          method : 'POST',
          headers : {"Content-Type": "application/json"},
          body : JSON.stringify(postModel)
        };

        fetch(`http://localhost:5005/api/createCompany`, options);
                  
    }

    function getNewValues(){
        return otherName;
    }

    function getOtherValues(){
        const obj ={
            firstname : name.firstname, surname : name.surname, height : name.height
        }

        return obj;
    }

    const [otherName, setOtherName] = useState({ firstname : "other", surname : "person", height : 173})

    const [name, setName] = useState({firstname : "ali", surname : "dalgalan", height : 174});
    return(
        <Container>
            <div className='app'>

                <h5>This Page Has No Purpose.</h5>

                <p>{name.firstname} {name.surname} {name.height}</p>
                <Button onClick={ () => {
                    setOtherName(getOtherValues);
                    setName(getNewValues);
                }}>Change Values</Button>
            </div>
        </Container>
    )
}

