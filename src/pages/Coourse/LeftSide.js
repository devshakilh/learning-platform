import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSide.css';


const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learn-with-programming-server-ten.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className='pt-5'>

            <div className='margin' >
                {
                    categories.map(category => <div key={category.id}>
                        <h1 className='category-text'> <Link to={`/coursedetailsmap/${category.id}`}>{category.name}</Link></h1></div>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;