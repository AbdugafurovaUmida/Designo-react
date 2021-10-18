import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Touch() {
    return (
        <div>
            {/* <!-- Get Touch Start! --> */}
            <section className="get-touch">
                <div className="container">
                    <div className=" project" style={{backgroundImage: "url(img/Get-touch-bg.jpg)"}}>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 project-page">
                                <h2 className="get-touch-title">Let’s talk about your project</h2>
                                <p className="get-touch-text">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 geting ">
                                <button type="button" className="get-touch-btn home-btn">Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Touch;