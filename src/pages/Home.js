import React from 'react';
import Button from 'react-bootstrap/Button';
import image from './home.png';
const Home = () => {
    return (
        <div className='d-flex  align-items-center mx-5 '>
            <div>
                <h3 className='mb-4'>Start your favourite course</h3>
                <h1 className='font-size-10px'>Now learning from anywhere, and build your bright createBrowserRouter</h1>
                <h4>go ahd your profession</h4>
                <Button variant="success">Start course</Button>
            </div>
            <div>
                <img className='w-100%' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;
