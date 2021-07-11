
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mb-4">About Me</h3>
        <Row className="justify-content-center">
          <Col lg="6">
            {/* Tabs with icons */}
            <div className="mb-3">
              <large className="text-uppercase font-weight-bold">
                Education
              </large>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                   
                    K-12 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                   
                    College
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    
                  post-secondary education
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                     K through fourth grade were in Morris, Il. Fifth through Twelfth were spent at Minooka Community High School. Sport activities; football, track, and wrestling. Worked part time for Channahon Park District. Graduation 1991.
                    </p>
                   
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      Joliet Jr. College(Science), University of Iowa(Nursing-inc), College for Air Force(Electives), Southern Illinois University-Carbondale(BS MIS)
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                    SouthWestern Illinois College(Web Design Admin), Kirkwood Community College(AAS Web Technologies and Software Development), DeltaV Coding BootCamp(Student, Teaching Assistant, Instructor Full Stack JavaScript).
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">
            {/* Menu */}
            <div className="mb-3">
              <large className="text-uppercase font-weight-bold">
                Experience
              </large>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Travel
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    Business
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Art
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      I have visited fourty-three states in the US. Globally I have been fortunate to have stayed in over twenty different countrys including Germany, England, Greece, Oman, Jordan, Portugal, Turkey, Amsterdam, Panama, El Salvador, Italy, Sicily, Egypt, Newfoundland, Greenland and many more.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                      I was raised in an entreprenuerial environment, I was a natural fit. One project I manage is Tektechnologies.com and it allows me to help other businesses build out their online presence and increase customer reach. I also work as a glass Artist and sell online at gatheringelements.com.   
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      I have been working with glass since the fall of 2000. I have done many types of glass art work and have the most interest in glass lampworking. I have taught glass bead making over the years and at Community Colleges. I have been lucky to share my skills with several apprencites, hopfully they do the same. 
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>





     
      </>
    );
  }
}

export default TabsSection;
