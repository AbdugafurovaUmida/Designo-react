import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from "react";
import { Link } from "react-router-dom";


function Design() {
    return (
        //  Profession Start!
        <section className="profession">
            <Container>
                <Row>
                    <div className="col-lg-6 col-md-12 col-sm-12 profession-item">
                        <div className="profession-effect">
                            <a href="#"><img src="img/web-design.png" width="100%" alt="web-design" /></a>
                            <div className="profession-page">
                                <h2 className="profession-title">WEB DESIGN</h2>
                                <Link to="/webdesign" className='profession-text' >VIEW PROJECTS <i class="fas fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="col-lg-12 designer profession-item">
                            <div className="profession-effect">
                                <a href="#"><img src="img/app-design.png" width="100%" alt="app-design" /></a>
                                <div className="profession-page">
                                    <h2 className="profession-title">APP DESIGN</h2>
                                    <Link to="/appdesign" className="profession-text" >VIEW PROJECTS <i class="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 graphic-design profession-item">
                            <div className="profession-effect">
                                <a href="#"><img src="img/graphic-design.png" width="100%" alt="graphic-design" /></a>
                                <div className="profession-page">
                                    <h2 className="profession-title">GRAPHIC DESIGN</h2>
                                    <Link to="/graphicdesign" className="profession-text">VIEW PROJECTS <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Row>

            </Container>
        </section>
    );
};

export default Design;