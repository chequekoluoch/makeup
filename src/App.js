import React,{useState} from 'react';
import {Form, Button,Row} from 'react-bootstrap'
import axios from 'axios';

import './App.css';
import Info from './Info';

function App() {
const [query, setQuery]=useState('')
const [details, setDetails]=useState([])
  const getData=async()=>{
    const response=await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}`)
    console.log(response)
    setDetails(response.data)
    setQuery('')
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    getData()
  }
  const onChange=(e)=>{
    setQuery(e.target.value)
    
  }
  return (
    <>
  <Form style={{width:'30%',marginLeft:'35%',marginRight:'35%'}} className="mt-4" onSubmit={onSubmit}>
    <Form.Control type="text" 
    placeholder="Makeup"
    value={query}
    onChange={onChange}/>
    <Button variant="primary" type="submit" style={{width:'100%'}} className="mt-2">
    Submit
    </Button>
  </Form>
  <Row style={{justifyContent:'center'}}>
  {details.length !== 0 && details.map((detail)=><Info detail={detail} key={detail.id}/>)}
  </Row>
 </>
  );
}

export default App;
