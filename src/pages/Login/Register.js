import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Register.css';

import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);


    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const handleGithubProvider = () => {
        providerLogin(githubProvider)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    const handleVerify = () => {
        alert('verifyEmail');
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to="/login"><h5>Login</h5></Link></>} />
                </Form.Group>
                <Button onClick={() => handleVerify()} variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <ButtonGroup vertical className='mt-4'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>Login with Google</Button>
                <Button onClick={handleGithubProvider} variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>


            </ButtonGroup>
        </div>
    );
};

export default Register;



























// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// const Register = () => {
//     return (
//         <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Your Name</Form.Label>
//                 <Form.Control name="name" type="text" placeholder="Your Name" />

//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>photo URL</Form.Label>
//                 <Form.Control name="photo URL" type="text" placeholder="Photo URL" />

//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control name="email" required type="email" placeholder="Enter email" />

//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control name="password" type="password" placeholder="Password" required />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Register
//             </Button>
//         </Form>
//     );
// };

// export default Register;