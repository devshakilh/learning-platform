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
import { useState } from 'react';
import { useEffect } from 'react';
import image from './fav.webp'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme");
        } else {
            setTheme("dark-theme");
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div>
            <Navbar className='py-4' bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='title'><img className='image-wh' src={image} alt="" /> <Link className='home-nav' to='/'>Learn with Programming</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav><Link className='home-nav' to='/home'>Home</Link></Nav>
                            <Nav><Link className='home-nav' to='/blog'>Blog</Link>Link</Nav>
                            <Nav><Link className='home-nav' to='/faq'>FAQ</Link>Link</Nav>
                            <Nav><Link className='home-nav' to='/courshcard'>Course</Link>Link</Nav>

                        </Nav>
                        <Nav>
                            {/* <Nav ><Link className='home-nav' to='/login'>Login</Link></Nav> */}
                            <Nav>  <Button className='me-4' onClick={() => toggleTheme()} variant="success">Toggle Theme</Button></Nav>
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
                                                <Link to='/login' className='home-nav'>Login</Link>
                                                <Link to='/register' className='home-nav'>Register</Link>
                                            </>
                                    }


                                </>
                                <Link to={user?.displayName}>
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