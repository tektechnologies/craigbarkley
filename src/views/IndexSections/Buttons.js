
import React from "react";




// reactstrap components
import { 
  Button, 
  Container, 
  Row, 
  Col,
  
NavbarBrand,
Navbar,
NavItem,
NavLink,
Nav

} from "reactstrap";

class BasicElements extends React.Component {
  render() {
    return (
      <>









      
        <section
          className="section section-components pb-0"
          id="section-components"
        >
        <div className="py-5 bg-secondary">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* Basic elements */}
                <h2 className="mb-5">
                  <span>Barkley Basics</span>
                </h2>
                {/* Buttons */}
                <h3 className="h4 text-success font-weight-bold mb-4">
                  Career Vocations
                </h3>
                

                {/* Button colors */}
                <div className="mb-3 mt-5">
                  <large className="text-uppercase font-weight-bold">
                    Instructional Experience.
                  </large>
                </div>
                <Button className="btn-1 ml-1" size="lg" color="primary" type="button">
                  Full Stack JavaScript
                </Button>
                <Button className="btn-1 ml-1" size="lg" color="info" type="button">
                  Glass Bead Lessons
                </Button>
                <Button className="btn-1 ml-1" size="lg" color="success" type="button">
                  Swim Lessons
                </Button>
                <Button className="btn-1 ml-1" size="lg" color="warning" type="button">
                  Roller Skating Lessons
                </Button>
                <Button className="btn-1 ml-1" size="lg" color="danger" type="button">
                   Networking Operations Basics
                </Button>
                <Button className="btn-1 ml-1" size="lg" color="success" type="button">
                  Glass LampWorking
                </Button>
                <Button className="btn-1 ml-1" size="lg" color="primary" type="button">
                Pizzaiolo Chef
                </Button>
            
            
                
    
                </Col>
                </Row>
                </Container>
                </div>
              </section>






              <Navbar className="navbar-dark bg-default" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Technology Interests
                </NavbarBrand>
              
                
                  <Nav navbar>
                    <NavItem>
                      <NavLink
                        
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-apple fa-2x" />
                        <i className="fa fa-digg fa-2x" />
                        <i className="fa fa-github fa-2x" />
                        <i className="fa fa-opencart fa-2x" />
                        <i className="fa fa-html5 fa-2x" />
                        <i className="fa fa-trello fa-2x" />
                        <i className="fa fa-slack fa-2x" />
                        <i className="fa fa-pied-piper-pp fa-2x" />
                        <i className="fa fa-rebel fa-2x" />
                        <i className="fa fa-css3 fa-2x" />
                        

                      
                      </NavLink>
                    </NavItem>
                  
                   
                  </Nav>
               
              </Container>
            </Navbar>
        

            



            








                <section
                className="section section-components pb-0"
                id="section-components"
              >
              <div className="py-5 bg-dark">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg="12">

                
                <div className="mb-3 mt-5">
                  <large className="text-uppercase font-weight-bold">
                    Work Experience
                  </large>
                </div>



                <Button className="btn-1" color="warning" outline type="button">
                JavaScript Instructor
              </Button>
              <Button
                className="btn-1 ml-1"
                color="info"
                outline
                type="button"
              >
                Software Developer Apprentice
              </Button>
              <Button className="btn-1" color="primary" outline type="button">
                Html and Css Instructor
              </Button>
              <Button
                className="btn-1 ml-1"
                color="white"
                outline
                type="button"
              >
                C#-Java-pHp-MySql-Node.js-React-jQuery-Experience
              </Button>
              <Button
                className="btn-1 ml-1"
                color="warning"
                outline
                type="button"
              >
                Wireless Internet Technology 
              </Button>
              <Button
                className="btn-1 ml-1"
                color="danger"
                outline
                type="button"
              >
                BAS Programmer
              </Button>
  






                <Button className="btn-1" color="primary" outline type="button">
                  Warehouse Manager
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="info"
                  outline
                  type="button"
                >
                  Paper Boy
                </Button>
                <Button className="btn-1" color="white" outline type="button">
                  Shipping and Receiving Manager
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="success"
                  outline
                  type="button"
                >
                  Pizza Chef
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="warning"
                  outline
                  type="button"
                >
                  Construction Laborer
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="danger"
                  outline
                  type="button"
                >
                  C-130 AirCraft LoadMaster
                </Button>





                <Button className="btn-1" color="primary" outline type="button">
                Packaging Manager
              </Button>
              <Button
                className="btn-1 ml-1"
                color="info"
                outline
                type="button"
              >
                Labeling Manager
              </Button>
              <Button className="btn-1" color="primary" outline type="button">
                Skating Rink DJ
              </Button>
              <Button
                className="btn-1 ml-1"
                color="success"
                outline
                type="button"
              >
                Internet Technician
              </Button>
              <Button
                className="btn-1 ml-1"
                color="warning"
                outline
                type="button"
              >
                Graphic Designer
              </Button>
              <Button
                className="btn-1 ml-1"
                color="danger"
                outline
                type="button"
              >
                Bar Tender
              </Button>







              <Button className="btn-1" color="primary" outline type="button">
              Tire Mechanic
            </Button>
            <Button
              className="btn-1 ml-1"
              color="info"
              outline
              type="button"
            >
              Life Guard
            </Button>
            <Button className="btn-1" color="primary" outline type="button">
              Farm Laborer
            </Button>
            <Button
              className="btn-1 ml-1"
              color="success"
              outline
              type="button"
            >
              Concession Stand Sales
            </Button>
            <Button
              className="btn-1 ml-1"
              color="warning"
              outline
              type="button"
            >
              Musicland Sales Associate
            </Button>
            <Button
              className="btn-1 ml-1"
              color="danger"
              outline
              type="button"
            >
              Hotel Concierge
            </Button>









            <Button className="btn-1" color="primary" outline type="button">
            Internet Sales and Technical Support
          </Button>
          <Button
            className="btn-1 ml-1"
            color="info"
            outline
            type="button"
          >
            Technology Tutor at Community College
          </Button>
          <Button className="btn-1" color="white" outline type="button">
            Glass Art Instructor at Community College
          </Button>
          <Button
            className="btn-1 ml-1"
            color="success"
            outline
            type="button"
          >
            Cookie at Burger Bars
          </Button>
          <Button
            className="btn-1 ml-1"
            color="warning"
            outline
            type="button"
          >
            Glass Artist/Entreprenuer
          </Button>
          

          <Button className="btn-1" color="primary" outline type="button">
          Restaurant Manager
        </Button>
            

               
              </Col>
            </Row>
          </Container>
          </div>
        </section>
      </>
    );
  }
}

export default BasicElements;
