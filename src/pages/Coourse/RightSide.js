import React, { useEffect, useState } from 'react';



import './RightSide.css'
import SingleCard from './SingleCard';


const RightSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learn-with-programming-server-ten.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (

        <div className='row row-cols-2'>

            {
                categories.map(category => <SingleCard key={category.id} category={category}></SingleCard>)
            }

        </div>


    );
};

export default RightSide;






