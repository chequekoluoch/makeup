import React from 'react'
import {Card, ListGroup, ListGroupItem,} from 'react-bootstrap'
const Info = ({detail}) => {
    const { brand, name, price, image_link, website_link,  description, product_type }=detail
    return (
        <>
    
        <Card style={{ width: '18rem' }} className="m-2"  bg={Info} >
  <Card.Img variant="top" src={image_link} style={{backgroundColor:'rgba(155,123,123, 0.4)'}} />
  <Card.Body>
   
    <Card.Title style={{color:'purple',fontFamily:'san serif'}}>NAME: {name}</Card.Title>
    <Card.Text style={{color:'blue'}}>
      {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Price: {brand}</ListGroupItem>
    <ListGroupItem>Price: ${price}</ListGroupItem>
    <ListGroupItem>Type: {product_type}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={website_link}>Card Link</Card.Link>
    <Card.Link href={website_link}>Another Link</Card.Link>
  </Card.Body>
</Card>
</>
    )
}

export default Info
