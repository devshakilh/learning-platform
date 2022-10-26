import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div>
            <h3>All Categories: {categories.length}</h3>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`category/:id`}>{category.name}</Link></p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;