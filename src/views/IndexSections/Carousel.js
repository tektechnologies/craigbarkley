
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
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
              <i className="fa fa-fire" />
            </div>
            <h6 className="text-warning text-uppercase">
              Gathering Elements
            </h6>
            <p className="description mt-3">
               I have been working glass art since I left the military in 2000. Working glass allows for meditation on the mundane, allowing for mindfullness. Take Time to Make Time. 
            </p>
            <div>
              <Badge color="warning" pill className="mr-1">
                Beads
              </Badge>
              <Badge color="warning" pill className="mr-1">
                Pendants
              </Badge>
              <Badge color="warning" pill className="mr-1">
                Jars
              </Badge>
              <Badge color="warning" pill className="mr-1">
              Rings
            </Badge>
            <Badge color="warning" pill className="mr-1">
            Lessons
          </Badge>
          <Badge color="warning" pill className="mr-1">
          Ceramics
        </Badge>

        <Badge color="warning" pill className="mr-1">
        Fused Glass
      </Badge>
      <Badge color="warning" pill className="mr-1">
      
    </Badge>
    <Badge color="warning" pill className="mr-1">
    Art
  </Badge>


        </div>
            <Button
              className="mt-4"
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Gathering Elements
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
              <i className="fa fa-gamepad" />
            </div>
            <h6 className="text-warning text-uppercase">
              Video Gaming
            </h6>
            <p className="description mt-3">
              Atari 2600, was my first system, I have enjoyed xbox, ps2,3,4 and game boy pocket. Most recently, San Andreas on iphone.
            </p>
            <div>
              <Badge color="warning" pill className="mr-1">
                GTA
              </Badge>
              <Badge color="warning" pill className="mr-1">
              Worms 2: Armageddon
              </Badge>
              <Badge color="warning" pill className="mr-1">
                Oddworld
              </Badge>
                  <Badge color="warning" pill className="mr-1">
                  SSX 3
                </Badge>
                <Badge color="warning" pill className="mr-1">
                AC: Origins
              </Badge>
                <Badge color="warning" pill className="mr-1">
                Drakan: The Ancients' Gates
              </Badge>
              <Badge color="warning" pill className="mr-1">
              Halo
            </Badge>
            </div>
            <Button
              className="mt-4"
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              About Me
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
              <i className="fa fa-plane" />
            </div>
            <h6 className="text-warning text-uppercase">
              USAF
            </h6>
            <p className="description mt-3">
              While on active duty at Little Rock AFB, I deployed to Germany, Oman, Jordan, Saudi Arabia, and traveled globally from those locations. I worked as a C-130 Aircraft Loadmaster.
            </p>
            <div>
              <Badge color="warning" pill className="mr-1">
                Ground Training Desk
              </Badge>
              <Badge color="warning" pill className="mr-1">
                CDS Kit Manager
              </Badge>
              <Badge color="warning" pill className="mr-1">
                Lots of Crew Rest...
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Aim High
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
                  Hire Me!
                </h1>
                <p className="lead text-white mt-4">
                Have a rewarding employment opportunity? Looking for a profession full stack developer; team player? Your work vacancy could be my next rewarding challenge and adventure. Send me an email or reach out to me on LinkedIn. 
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  LinkedIn 
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
