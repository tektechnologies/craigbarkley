
import React from "react";
import { Link } from "react-router-dom";
import promo1 from "assets/img/theme/IMG_2175.JPG";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";
import argonReact from "assets/img/brand/argon-react.png";

class Navbars extends React.Component {
  render() {
    return (
      <>
      <Navbar className="navbar-dark bg-primary" expand="lg">
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




    <section className="section section-lg">
    <Container>
      <Row className="row-grid align-items-center">
        <Col className="order-md-2" md="6">
          <img
            alt="..."
            className="img-fluid floating"
            src={promo1}
          />
        </Col>

    <Col className="order-md-1" md="6">
    <div className="pr-md-5">
      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
        <i className="ni ni-settings-gear-65" />
      </div>
      <h3>Most Recent Employers</h3>
      <p>
      Paths take us many places, since 2012, I have been lucky enough to learn and growth with the following organizations. I have also enjoyed selling my glass art at farmers markets and helping other artisans build their own presence online. 
      </p>
      <ul className="list-unstyled mt-5">
        <li className="py-2">
          <div className="d-flex align-items-center">
            <div>
              <Badge
                className="badge-circle mr-3"
                color="success"
              >
                <i className="ni ni-settings-gear-65" />
              </Badge>
            </div>
            <div>
              <h6 className="mb-0">
              NewBoCo / DeltaV
              </h6>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="d-flex align-items-center">
            <div>
              <Badge
                className="badge-circle mr-3"
                color="success"
              >
                <i className="ni ni-settings-gear-65" />
              </Badge>
            </div>
            <div>
              <h6 className="mb-0">Kirkwood Community College</h6>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="d-flex align-items-center">
            <div>
              <Badge
                className="badge-circle mr-3"
                color="success"
              >
                <i className="ni ni-settings-gear-65" />
              </Badge>
            </div>
            <div>
              <h6 className="mb-0">
                Ecolips, Inc.
              </h6>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Col>

  </Row>
  </Container>
</section>




        <section>
          
        <Navbar className="navbar-dark bg-success mt-4" expand="lg">
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
          
        </section>
        
      </>
    );
  }
}

export default Navbars;
