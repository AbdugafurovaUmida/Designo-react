import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import Home from '../pages/Home';



function Header() {
    return (
        // Header Start! 
        <header className="header" id="mainHeader">
            <Container>
                <Row>
                    <Col>
                        <div className='header-bar'>
                            <Link to="/home"><img src="img/header-logo.png" alt="logo" /></Link>
                            <nav className="nav-bar d-flex" id="mainNav">
                                <Link className='nav-link' to="/about">OUR COMPANY</Link>
                                <Link className='nav-link' to="/locations">LOCATIONS</Link>
                                <Link className='nav-link' to="/contacts">CONTACT</Link>
                            </nav>
                            <button className="menu-toggle open" onclick="openMenu()"><img src="img/open-menu.svg" alt="menu" /></button>
                            <button className="menu-toggle close" onclick="closeMenu()"><img src="img/close-menu.svg" alt="menu" /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;