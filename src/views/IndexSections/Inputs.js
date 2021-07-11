
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
 
  Container,
  Button
} from "reactstrap";

class Inputs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section pb-0 section-components">
                
        <div className="py-5 bg-dark">

          
        <Container>
          {/* Inputs (alternative) */}
          <div className="mb-3">
                {/* Button links */}
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">
                    Links
                  </small>
                </div>
                <Button
                  className="text-default"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Default
                </Button>
                <Button
                  className="text-primary ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Primary
                </Button>
                <Button
                  className="text-info ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Info
                </Button>
                <Button
                  className="text-success ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Success
                </Button>
                <Button
                  className="text-warning ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Warning
                </Button>
                <Button
                  className="text-danger ml-1"
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Danger
                </Button>


         
                <small className="text-uppercase font-weight-bold">
                  Form controls (alternative)
                </small>
              </div>
              
            </Container>
          </div>
        </section>
      </>
    );
  }
}

export default Inputs;
