/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim and Craig Barkley 

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import craigPic from "assets/img/CRAIGB.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={craigPic}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                      
                      <Button
                          className="mr-4"
                          color="info"
                          href="/linkedin"
                          onClick={e => e.window.location.href = 'https://www.linkedin.com/in/craig-barkley-25017b65/' }
                          size="lrg"
                        >
                          LinkedIN
                        </Button>
                        
                        <Button
                          className="float-right"
                          color="default"
                          href="github"
                          onClick={e => e.window.location.href = 'https://github.com/tektechnologies' }
                          size="lrg"
                        >
                          Git Hub
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">14</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">21</span>
                          <span className="description">Career</span>
                        </div>
                        <div>
                          <span className="heading">3</span>
                          <span className="description">Business</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Craig Barkley{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Cedar Rapids, Iowa
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Information Systems Manager - Creative Craig Barkley
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Southern Illinois University
                      <div>
                      <i className="ni education_hat mr-2" />
                      Kirkwood Community College
                      </div>
                      
                      <div>
                      <i className="ni education_hat mr-2" />
                      DeltaV Code School
                      </div>
                    
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                         With a Bachelor of Science in Management Information Systems and experience as a web designer and business consultant; I enjoy working with others and helping them overcome technological barriers to create competitive advantages for their businesses. I am committed to using my education, work experience and sociable personality to effectively follow procedures and resolve client issues in a productive and positive manner.
                        </p>
                        <a href="/wookone" onClick={e => e.window.location.href = 'https://www.wookone.com'}>
                          Current Practice Project wookOne.com
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
