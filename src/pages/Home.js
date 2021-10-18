import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Design from '../components/Designes'
import WebDesign from "./WebDesign";
import WebProject from '../components/WebProject';
import AllProject from '../components/AllProject';
import { Link } from 'react-router-dom';
import '../index.css';


function Home() {
  return (
    <div>
      {/* //  Intro Start!  */}
      <section className="intro">
        <Container>
          <div className="home-intro" style={{ backgroundImage: "url(img/home-intro-bg.jpg)" }}>
            <Row>
              <Col lg='7' className='home-intro-page'>
                <h1 className="home-intro-title">Award-winning custom designs and digital branding solutions</h1>
                <p className="home-intro-text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <a className="home-btn" href="#">Learn More</a>
              </Col>
              <Col lg='5' className='home-intro-page'>
                <img className="home-page-image" src="img/home-mobile-image.png" alt="mobile-image" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="profession">
        <Container>
          <Row>
            <WebProject image='img/web-design.png' title='WEB DESIGN' text='VIEW PROJECTS'/>
            <div className="col-lg-6 col-md-12 grafic">
              <Link to="/appdesign"><AllProject image='img/app-design.png'  title='APP DESIGN' text='VIEW PROJECTS' /></Link>
              <Link to="/graphicdesign"><AllProject image='img/graphic-design.png' className="graphic-design" title='GRAPHIC DESIGN' text='VIEW PROJECTS' /></Link> 
            </div>
          </Row>
        </Container>
      </section>
      {/* <!-- Development Start! --> style={{ backgroundImage: "url(img/development-bg.png)" }}*/}
      <section className="development" >
        <div className="container ">
          <div className="development-item" >
            <div className="row">
              <div className="col-lg-4 col-md-12 development-page">
                <img src="img/passionate.png" alt="passionate" />
                <div className="development-info">
                  <h4 className="development-title">PASSIONATE</h4>
                  <p className="development-text">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 development-page">
                <img src="img/resourceful.png" alt="resourceful" />
                <div className="development-info">
                  <h4 className="development-title">RESOURCEFUL</h4>
                  <p className="development-text">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 development-page">
                <img src="img/friendly.png" alt="friendly" />
                <div className="development-info">
                  <h4 className="development-title">FRIENDLY</h4>
                  <p className="development-text"> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home;