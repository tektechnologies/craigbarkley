
import React from "react";
import { Link } from "react-router-dom";

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

    <Col className="order-md-1" md="6">
    <div className="pr-md-5">
      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
        <i className="ni ni-settings-gear-65" />
      </div>
      <h3>Awesome features</h3>
      <p>
        The kit comes with three pre-built pages to help you get
        started faster. You can change the text and images and
        you're good to go.
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
                Carefully crafted components
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
                <i className="ni ni-html5" />
              </Badge>
            </div>
            <div>
              <h6 className="mb-0">Amazing page examples</h6>
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
                <i className="ni ni-satisfied" />
              </Badge>
            </div>
            <div>
              <h6 className="mb-0">
                Super friendly support team
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
          
          
          {/* Navbar success */}
          <Navbar className="navbar-dark bg-success mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Success Color
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar-success">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-success">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={argonReact}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar-success">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="ni ni-favourite-28" />
                      <span className="nav-link-inner--text d-lg-none">
                        Favorites
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="ni ni-planet" />
                      <span className="nav-link-inner--text d-lg-none">
                        Another action
                      </span>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav className="nav-link-icon">
                      <i className="ni ni-settings-gear-65" />
                      <span className="nav-link-inner--text d-lg-none">
                        Settings
                      </span>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="navbar-success_dropdown_1"
                      right
                    >
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
         
          
          
            
         
        </section>
        
      </>
    );
  }
}

export default Navbars;
