import React, { useState } from 'react';
import "./Navbar.css";
import user from "../assets/usuario.png";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from '../sidebar/Sidebar.jsx'
import logo from "../assets/logoCaracol.png"



const Navbar = ({ sidebarOpen, openSidebar }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <nav className='navbar'>
                <div className='nav_icon' >

                    <Button variant="primary" onClick={handleShow}>
                        <i className="fa fa-bars" ></i>
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} className='sidebar_width'>
                        <Offcanvas.Header closeButton>
                            <div className="sidebar__title">
                                <div className="sidebar__img">
                                    <img src={logo} alt="logo" />
                                </div>
                                
                            </div>
                        </Offcanvas.Header>
                        <Offcanvas.Body  >
                            <Sidebar />
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className="navbar__left">
                    <a className='active__link' href="#">Admin</a>
                </div>
                <div className="navbar__right">
                    <a href="#">
                        <i className="fa fa-search"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-clock-o"></i>
                    </a>
                    <a href="#">
                        <img width="30" src={user} alt="avatar_usuario" />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
