import { useState } from 'react'
import './header.scss'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    return (
        <>
            <Navbar>
                <Container className="header-container">
                    <Navbar.Brand href="#home" className="name-logo">
                        greku
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end links-container">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </Navbar.Collapse>
                    <HiOutlineMenuAlt3
                        className="mobile-dropdown-btn"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                    />
                </Container>
            </Navbar>
            <div className={showMobileNav ? 'mobile-nav' : 'mobile-nav hidden'}>
                <a href="#about" onClick={() => setShowMobileNav(false)}>
                    About
                </a>
                <a href="#projects" onClick={() => setShowMobileNav(false)}>
                    Projects
                </a>
                <a href="#contact" onClick={() => setShowMobileNav(false)}>
                    Contact
                </a>
            </div>
        </>
    )
}

export default Header
