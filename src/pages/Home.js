import React from 'react';
import Button from 'react-bootstrap/Button';
import image from './home.png';

const Home = () => {
    return (
        <div className='row  align-items-center mx-5 '>
            <div className='col-md-6'>
                <h3 className='mb-4'>Start your favourite course</h3>
                <h1 className='font-size-10px'>Now learning from anywhere, and build your bright createBrowserRouter</h1>
                <h4>go ahd your profession</h4>
                <Button variant="success">Start course</Button>
            </div>
            <div className='col-md-6'>
                <img className='image-size' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;
