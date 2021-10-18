import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>   
            {/* //    Footer Start!  */}
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={6}>
                        <a className="footer-logo" href="index.html"><img src="img/footer-logo.png" alt="logo" /></a>
                        <hr className="footer-line-first" />
                    </Col>
                    <Col xs={6}>
                        <div className="footer-header">
                            <ul className="footer-header-menu">
                                <li className="footer-header-page"><a href="about.html" target="_blank">OUR COMPANY</a></li>
                                <li className="footer-header-page"><a href="location.html" target="_blank">LOCATIONS</a></li>
                                <li className="footer-header-page"><a href="contact.html" target="_blank">CONTACT</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr className="footer-line" />
                <Row className="align-items-end">
                    <Col>
                        <address className="address">
                            <ul className="footer-menu">
                                <h5 className="footer-menu-title">Designo Central Office</h5>
                                <li className="footer-page">3886 Wellington Street</li>
                                <li className="footer-page">Toronto, Ontario M9C 3J5</li>
                            </ul>
                        </address>
                    </Col>
                    <Col>
                        <address className="address">
                            <ul className="footer-menu">
                                <h5 className="footer-menu-title">Contact Us (Central Office)</h5>
                                <li className="footer-page">P : <a href="tel:+1 253 863 8967" target="_blank">+1 253-863-8967</a></li>
                                <li className="footer-page">M : <a href="mailto:contact@designo.com" target="_blank">contact@designo.com</a></li>
                            </ul>
                        </address>
                    </Col>
                    <Col>
                        <div className="footer-icons">
                            <a className="footer-icon" href="https://www.facebook.com/" target="_blank"><i className="icon-facebook"></i></a>
                            <a className="footer-icon" href="https://www.youtube.com/" target="_blank"><i className="icon-youtube"></i></a>
                            <a className="footer-icon" href="https://twitter.com/" target="_blank"><i className="icon-twitter"></i></a>
                            <a className="footer-icon" href="https://www.pinterest.com/" target="_blank"><i className="icon-pinterest"></i></a>
                            <a className="footer-icon" href="https://www.instagram.com/" target="_blank"><i className="icon-instagram1"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        </div>
    );
}

export default Footer;