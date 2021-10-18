import SmallIntro from '../components/SmallIntro'
import WebCards from '../components/WebCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Design from '../components/Designes'
import AllProject from '../components/AllProject';
import { Link } from 'react-router-dom';




function AppDesign() {
    return (
        <Container>
            <SmallIntro heading='App Design' text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.' />
            <div className="portfolio">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Express - Desktop10.jpg' title='AIRFILTER' text='Solving the problem of poor indoor air quality by filtering the air' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Express - Desktop (1).jpg' title='EYECAM' text='Product that lets you edit your favorite photos and videos at any time' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Express - Desktop (2).jpg' title='FACEIT' text='Get to meet your favorite internet superstar with the faceit app' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Express - Desktop (3).jpg' title='TODO' text='A todo app that features cloud sync with light and dark mode' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Express - Desktop (4).jpg' title='LOOPSTUDIOS' text='A VR experience app made for Loopstudios' />
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 web-project-image">
                    <Link to="/appdesign"><AllProject image='img/web-design.png'  title='App design' text='VIEW PROJECTS' /></Link>
                        {/* <a href="app-design.html" class="service">
                            <img src="img/Bitmap.jpg" alt="app" width="100%" height="100%" class="service__image" />
                            <span class="service__info">
                                <span class="service__title">App design</span>
                                <span class="service__text">VIEW PROJECTS <i class="fas fa-chevron-right page-icons"></i></span>
                            </span>
                        </a> */}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <Link to="/graphicdesign"><AllProject image='img/Bitmap (1).jpg'  title='GRAPHIC DESIGN' text='VIEW PROJECTS' /></Link>
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

export default AppDesign;