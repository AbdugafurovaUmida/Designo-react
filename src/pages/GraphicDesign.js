import SmallIntro from '../components/SmallIntro'
import WebCards from '../components/WebCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Design from '../components/Designes'
import AllProject from '../components/AllProject';
import { Link } from 'react-router-dom';
import WebProject from '../components/WebProject'




function GraphicDesign() {
    return (
        <Container>
            <SmallIntro heading='Graphic Design' text='We deliver eye-catching branding materials that are tailored to meet your business objectives.' />
            <div className="portfolio">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/graphic-image.jpg' title='TIM BROWN' text='A book cover designed for Tim Brown’s new release, ‘Change’' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/graphic-image-one.jpg' title='BOXED WATER' text='A simple packaging concept made for Boxed Water' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/graphic-image-two.jpg' title='SCIENCE!' text='A poster made in collaboration with the Federal Art Project' />
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <Link to="/appdesign"><AllProject image='img/Bitmap.jpg'  title='App design' text='VIEW PROJECTS' /></Link>
                        {/* <a href="app-design.html" class="service">
                            <img src="img/Bitmap.jpg" alt="app" width="100%" height="100%" class="service__image" />
                            <span class="service__info">
                                <span class="service__title">App design</span>
                                <span class="service__text">VIEW PROJECTS <i class="fas fa-chevron-right page-icons"></i></span>
                            </span>
                        </a> */}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 web-project-image">
                    <Link to="/webdesign"><AllProject image='img/web-design.png' title='WEB DESIGN' text='VIEW PROJECTS'/></Link>  
                        {/* <a href="graphic-design.html" class="service">
                            <img src="img/Bitmap (1).jpg" alt="graphic" width="100%" class="service__image" />
                            <span class="service__info">
                                <span class="service__title">GRAPHIC DESIGN</span>
                                <span class="service__text">VIEW PROJECTS <i class="fas fa-chevron-right page-icons"></i></span>
                            </span>
                        </a> */}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default GraphicDesign;