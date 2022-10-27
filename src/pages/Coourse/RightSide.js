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
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className='pt-5 '>

            {
                categories.map(category => <div key={category.id}>
                    <Link to={`/coursedetailsmap/${category.id}`}>

                        <Container>
                            <Row>
                                <Col className='card-grid'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={category.image} />
                                        <Card.Body>
                                            <Card.Title>{category.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Course Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>



                        </Container>

                    </Link></div>
                )
            }


        </div>
    );
};

export default RightSide;