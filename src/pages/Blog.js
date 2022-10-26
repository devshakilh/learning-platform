import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='bg-color'>
            <div >
                <h1 >what is cors?</h1>
                <h4>Ans: CORS stands for Cross-Origin Resource Sharing It allows us to rlaex the security applied to an API.  This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</h4>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <h4>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter,</h4>
            </div>
            <div>
                <h1>How does the private route work?</h1>
                <h4>Ans: The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</h4>
            </div>
            <div>
                <h1>What is Node? How does Node work?</h1>
                <h4>Ans: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h4>
            </div>
        </div>
    );
};

export default Blog;