import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCard = ({ category }) => {
    return (
        <div className='col mt-4'>
            <Link to={`/coursedetailsmap/${category.id}`}>


                <Col className=' mb-4 ' >
                    <Card >
                        <Card.Img variant="top" src={category.image} />
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                This Course will make you a hero from zero, inshallah if you can follow us
                            </Card.Text>
                            <Button variant="primary">Course Details</Button>
                        </Card.Body>
                    </Card>
                </Col>


            </Link></div>

    );
};

export default SingleCard;