import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Container, Row, Col } from 'react-bootstrap';

const CourshCard = () => {

    return (
        <div>


            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSide></LeftSide>
                    </Col>


                    <Col lg='8'>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default CourshCard;