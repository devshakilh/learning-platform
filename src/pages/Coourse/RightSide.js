import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './RightSide.css'
const RightSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learn-with-programming-server-ten.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className='pt-5 '>
            <Container >
                <Row className='grid cols-2'>
                    {
                        categories.map(category => <div key={category.id}>
                            <Link to={`/coursedetailsmap/${category.id}`}>


                                <Col className='d-flex'>
                                    <Card style={{ width: '18rem' }}>
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
                        )
                    }


                </Row>


            </Container>
        </div >

    );
};

export default RightSide;