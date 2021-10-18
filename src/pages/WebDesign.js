import SmallIntro from '../components/SmallIntro'
import WebCards from '../components/WebCards'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Design from '../components/Designes'


function WebDesign() {
    return (
        <Container>
            <SmallIntro heading='Web Design' text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.' />
            <div className="portfolio">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Express - Desktop.jpg' title='EXPRESS' text='A multi-carrier shipping website for ecommerce businesses' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Transfer - Desktop.jpg' title='TRANSFER' text='Site for low-cost money transfers and sending money within seconds' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Photon - Desktop.jpg' title='PHOTON' text='A state-of-the-art music player with high-resolution audio and DSP effects' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Builder - Desktop.jpg' title='BUILDER' text='Connects users with local contractors based on their location' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Blogr - Desktop.jpg' title='BLOGR' text='Blogr is a platform for creating an online blog or publication' />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <WebCards img='img/Camp - Desktop (1).jpg' title='CAMP' text='Get expert training in coding, data, design, and digital marketing' />
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <a href="app-design.html" className="service">
                            <img src="img/Bitmap.jpg" alt="app" width="100%" height="100%" className="service__image" />
                            <span className="service__info">
                                <span className="service__title">App design</span>
                                <span className="service__text">VIEW PROJECTS <i className="fas fa-chevron-right page-icons"></i></span>
                            </span>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <a href="graphic-design.html" className="service">
                            <img src="img/Bitmap (1).jpg" alt="graphic" width="100%" className="service__image" />
                            <span className="service__info">
                                <span className="service__title">GRAPHIC DESIGN</span>
                                <span className="service__text">VIEW PROJECTS <i className="fas fa-chevron-right page-icons"></i></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>


        </Container>
    )
}

export default WebDesign;