import {Container, Row, Col, Card, Button} from 'react-bootstrap';

function Welcome (){
  return (
    <Container fluid='md-mt-4'>
      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni esse accusamus et doloribus sed voluptates voluptatem suscipit, numquam odit cumque, molestiae ex asperiores non.</p>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni esse accusamus et doloribus sed voluptates voluptatem suscipit, numquam odit cumque, molestiae ex asperiores non.</p>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni esse accusamus et doloribus sed voluptates voluptatem suscipit, numquam odit cumque, molestiae ex asperiores non.</p>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni esse accusamus et doloribus sed voluptates voluptatem suscipit, numquam odit cumque, molestiae ex asperiores non.</p>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col lg='6'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni esse accusamus et doloribus sed voluptates voluptatem suscipit, numquam odit cumque, molestiae ex asperiores non.</p>
        </Col>
        <Col lg='6'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni esse accusamus et doloribus sed voluptates voluptatem suscipit, numquam odit cumque, molestiae ex asperiores non.</p>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col lg='6'>
           <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg='6'>
           <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome;