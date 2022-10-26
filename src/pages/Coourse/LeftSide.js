import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSide.css';


const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className='pt-5'>

            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/coursedetails/${category.id}}`}><h1 className='category-text'>{category.name}</h1></Link></p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;