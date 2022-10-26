import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image'
import './Header.css';

import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar className='py-4' bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link className='home-nav pr-10' to='/'>Learn with Programming</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav><Link className='home-nav' to='/home'>Home</Link></Nav>
                            <Nav><Link className='home-nav' to='/blog'>Blog</Link>Link</Nav>
                            <Nav><Link className='home-nav' to='blog'>FAQ</Link>Link</Nav>
                            <Nav><Link className='home-nav' to='/courshcard'>Course</Link>Link</Nav>

                        </Nav>
                        <Nav>
                            <Nav ><Link className='home-nav' to='/login'>Login</Link></Nav>
                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span>{user?.displayName}</span>
                                                <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                            </>
                                            :
                                            <>
                                                <Link to='/login'>Login</Link>
                                                <Link to='/register'>Register</Link>
                                            </>
                                    }


                                </>
                                <Link to="/profile">
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL}>
                                        </Image>
                                        : <FaUser></FaUser>
                                    }
                                </Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;