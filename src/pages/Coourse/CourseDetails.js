import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RightSide.css'
import { Link } from 'react-router-dom';

// import Pdf from "react-to-pdf";
const CourseDetails = ({ course }) => {
    // const ref = React.createRef();
    const { price, name, short_des, image, _id } = course;
    return (
        <div>
            <Container>
                <Row>
                    <Col className='card-details'>

                        <Card style={{ width: '18rem' }}>
                            {/* <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                            </Pdf> */}
                            <Card.Img variant="top" src={image} />
                            <Card.Body>

                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    <h5> {short_des}</h5>
                                </Card.Text>
                                <div className='d-flex'>
                                    <h3 className='p-2'>  {price}</h3>
                                    <Link to={`/cheekout/${_id}`}><Button variant="primary"> Get Premium</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CourseDetails;