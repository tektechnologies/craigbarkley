/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Technology Experience</h2>
                <p className="lead">
                 From the family network guy: to Full Stack Web Developer. I have worked with many technologies over the last few years. While completing my MIS in Business Administration, I began studying networking and wireless technologies. That experience brought me to the web, where I learned how to code HTML in Dreamweaver. And so on...
                </p>
                <div className="btn-wrapper">
                  <Button
                    color="primary"
                    href="/profile-page"
                  >
                    View Profile
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="/landing-page"
                    target="_blank"
                  >
                    View About Me
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              <a href="https://www.linkedin.com/in/craig-barkley-25017b65/">
                <div className="icons-container blur-item mt-5 on-screen">
                  <i className="icon fa fa-git" />
                  <i className="icon fa fa-apple" />
                  <i className="icon fa fa-github" />
                  <i className="icon fa fa-trello" />
                  <i className="icon fa fa-html5" />
                  <i className="icon fa fa-css3" />
                  <i className="icon fa fa-fort-awesome" />
                  <i className="icon fa fa-codepen" />
                  <i className="icon fa fa-google" />
                  <i className="icon fa fa-opencart" />
                  <i className="icon fa fa-slack" />
                  <i className="icon fa fa-stack-overflow" />
                  <i className="icon ni ni-chart-bar-32" />
                </div>
                <span className="blur-hidden h5 text-success">
                   <b><h2>Employment history on LinkedIn.</h2></b>  
                </span>
              </a>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
