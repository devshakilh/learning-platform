import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Toast } from 'bootstrap';


const CheekOut = () => {
    const corse = useLoaderData();
    const handleConfirm = (e) => {
        alert('confirm')

    }
    const handleCancel = (e) => {
        alert('cancel')

    }

    return (
        <div>
            <h1>This course is Programming </h1>
            {
                corse.map(course => <div
                    key={course.id}
                    course={course}
                >
                    <Card style={{ width: '20rem' }}>

                        <Card.Body className=''>
                            <div className='d-flex'>
                                <Card.Title className='me-5'>{course.name}</Card.Title>
                                <Card.Title>{course.price}</Card.Title>
                            </div>
                            <div>
                                <Card.Title>courses </Card.Title>
                                <Card.Title>{course._id}</Card.Title>
                            </div>

                            <div>
                                <Button onClick={(e) => handleConfirm(e)} className='me-5' variant="primary">Confirm</Button>

                                <Button onClick={(e) => handleCancel()} variant="primary">Cancel</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default CheekOut;