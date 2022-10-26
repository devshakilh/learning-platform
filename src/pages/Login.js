import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link to="/register">if you not registered please Register</Link>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <ButtonGroup vertical className='mt-4'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>


            </ButtonGroup>

        </div>
    );
};

export default Login;