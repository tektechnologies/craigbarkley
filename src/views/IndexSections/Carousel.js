
import React from "react";

// reactstrap components
import { 
  Button, 
  Container, 
  Row, 
  Col, 
  UncontrolledCarousel,
Navbar,
NavbarBrand,
Nav,
NavItem,
NavLink,
Card,
CardBody,
Badge } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
      <div className="position-relative">
      <section className="section section-lg section-shaped pb-250">
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
{/* 1st Hero Variation */}
</div>
<section className="section section-lg pt-lg-0 mt--200">
<Container>
<Row className="justify-content-center">
  <Col lg="12">
    <Row className="row-grid">
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
              <i className="ni ni-check-bold" />
            </div>
            <h6 className="text-primary text-uppercase">
              Download Argon
            </h6>
            <p className="description mt-3">
              Argon is a great free UI package based on Bootstrap
              4 that includes the most important components and
              features.
            </p>
            <div>
              <Badge color="primary" pill className="mr-1">
                design
              </Badge>
              <Badge color="primary" pill className="mr-1">
                system
              </Badge>
              <Badge color="primary" pill className="mr-1">
                creative
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
              <i className="ni ni-istanbul" />
            </div>
            <h6 className="text-success text-uppercase">
              Build Something
            </h6>
            <p className="description mt-3">
              Argon is a great free UI package based on Bootstrap
              4 that includes the most important components and
              features.
            </p>
            <div>
              <Badge color="success" pill className="mr-1">
                business
              </Badge>
              <Badge color="success" pill className="mr-1">
                vision
              </Badge>
              <Badge color="success" pill className="mr-1">
                success
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="success"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
              <i className="ni ni-planet" />
            </div>
            <h6 className="text-warning text-uppercase">
              Prepare Launch
            </h6>
            <p className="description mt-3">
              Argon is a great free UI package based on Bootstrap
              4 that includes the most important components and
              features.
            </p>
            <div>
              <Badge color="warning" pill className="mr-1">
                marketing
              </Badge>
              <Badge color="warning" pill className="mr-1">
                product
              </Badge>
              <Badge color="warning" pill className="mr-1">
                launch
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Col>
</Row>
</Container>
</section>































      <Navbar className="navbar-dark bg-warning" expand="lg">
      <Container>
        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
          
        </NavbarBrand>
      
        
          <Nav navbar>
            <NavItem>
              <NavLink
                
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-cog fa-2x" />
                
                

              
              </NavLink>
            </NavItem>
          
           
          </Nav>
       
      </Container>
    </Navbar>






        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-dark">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Bootstrap carousel
                </h1>
                <p className="lead text-white mt-4">
                  Argon Design System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
