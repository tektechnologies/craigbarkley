
import React from "react";

import {
 Navbar,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
  Container,
  Button
} from "reactstrap";

class Inputs extends React.Component {
  state = {};
  render() {
    return (
      <>


      <Navbar className="navbar-dark bg-info" expand="lg">
      <Container>
        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
          Activities and Interests
        </NavbarBrand>
      
        
          <Nav navbar>
            <NavItem>
              <NavLink
                
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-coffee fa-2x" />
                <i className="fa fa-bicycle fa-2x" />
                <i className="fa fa-bed fa-2x" />
                <i className="fa fa-globe fa-2x" />
                <i className="fa fa-headphones fa-2x" />
                <i className="fa fa-motorcycle fa-2x" />
                <i className="fa fa-snowflake-o fa-2x" />
                <i className="fa fa fa-book fa-2x" />
                <i className="fa fa-coffee fa-2x" />
                <i className="fa fa-search fa-2x" />
                

              
              </NavLink>
            </NavItem>
          
           
          </Nav>
       
      </Container>
    </Navbar>







        <section className="section pb-0 section-components">
                
        <div className="py-5 bg-dark">

          
        <Container>
          {/* Inputs (alternative) */}
          <div className="mb-3">
                {/* Button links */}
                <div className="mb-3 mt-5">
                  <large className="text-uppercase font-weight-bold text-white">
                    Past and Current Web Projects still live, well mostly...
                  </large>
                </div>
                <Button
                  className="text-primary ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  TekTechnologies.com
                </Button>
               
                <Button
                  className="text-info ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Gathering Elements
                </Button>
                <Button
                  className="text-success ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                   Rare Bird Soap Shop
                </Button>
                <Button
                  className="text-warning ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Central Lime Stone Co.
                </Button>
                <Button
                  className="text-danger ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  MediaNetWifi
                </Button>








                <Button
                  className="text-primary ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  growinpro.com
                </Button>
               
                <Button
                  className="text-info ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  shamangrocer.com
                </Button>
                <Button
                  className="text-success ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                   wookone.com
                </Button>
                <Button
                  className="text-warning ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  craigbarkley.com
                </Button>
                <Button
                  className="text-danger ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  sistersailor.com
                </Button>






                <Button
                  className="text-primary ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                entretrack.newbo.co
                </Button>
               
                <Button
                  className="text-info ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                cashmann.github.io/CS4Iowa
                </Button>
                <Button
                  className="text-success ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                   Rare Bird Soap Shop Online Store
                </Button>
                
                
              </div>
              
            </Container>
          </div>
        </section>
      </>
    );
  }
}

export default Inputs;
