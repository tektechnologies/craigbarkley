
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import github from "assets/img/icons/common/github.svg";
import googleImg from "assets/img/icons/common/google.svg";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
      <Navbar className="navbar-dark bg-danger" expand="lg">
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

























        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  Do you need a website? {" "}
                  <span className="text-white">Lets grab a cup of coffee and talk.</span>
                </h3>
                <p className="lead text-white">
                  Maybe you need an online store to sell the products you make as an artistan or small business. Do you need additional applications built into an exsisting site? Whether you run Professional Services, Retail business or Food and Beverage, Tek Technologies has solutions that can help.
                </p>
                <div className="btn-wrapper">
                  <Button 
                    color="success" 
                    to="/login-page" 
                    href="https://www.secureserver.net/?pl_id=528714"
                    >
                    Tek Technologies
                  </Button>
                  <Button
                    className="btn-white"
                    color="default"
                    to="/register-page"
                    tag={Link}
                  >
                    Project Investment
                  </Button>
                </div>
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-right">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <big>Email Services</big>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="https://www.secureserver.net/help?pl_id=528714&prog_id=528714"
                         
                        >
                          <span className="btn-inner--icon mr-1">
                           
                          </span>
                          <span className="btn-inner--text">24 Hour Support</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="https://www.secureserver.net/products/website-builder?plid=528714"
                          
                        >
                          <span className="btn-inner--icon mr-1">
                            
                          </span>
                          <span className="btn-inner--text">Web Sites</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <big>New .COMs $16.99*</big>
                      </div>
                      <Form role="form">
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.emailFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-folder-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Web Sites include Hosting"
                              type="web"
                              onFocus={() =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={() =>
                                this.setState({ emailFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: this.state.passwordFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Website Security
                              "
                              type="password"
                              autoComplete="off"
                              onFocus={() =>
                                this.setState({ passwordFocused: true })
                              }
                              onBlur={() =>
                                this.setState({ passwordFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckLogin2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckLogin2"
                          >
                            <span>Check it out!</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            href="https://www.secureserver.net/?pl_id=528714"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
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

export default Login;
