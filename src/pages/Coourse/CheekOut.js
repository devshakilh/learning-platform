import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


const CheekOut = ({ corse }) => {
    const cores = useLoaderData();
    console.log(cores);
    // const { price, name, short_des, image, author } = course;
    return (
        <div>
            <h1> this is cheek out{cores.length}</h1>
            {/* {
                cores.map(course => <div
                    key={course.id}
                    course={course}
                >
                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>)
            } */}
        </div>
    );
};

export default CheekOut;