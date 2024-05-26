import React from "react";
import DeveloperManagerArtist from "../components/DeveloperManagerArtist/DeveloperManagerArtist";
import ClientWork from "../components/ClientWork/ClientWork";
// import About from '../components/About/About';
// import Contact from '../components/Contact/Contact';
import Footer from "../components/Footer/Footer";
import SocialIcon from "../components/SocialIcon/SocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import SelectedProjectForm from "../components/SelectedProjectForm/SelectedProjectForm";

// function component modal
// https://codesandbox.io/p/sandbox/styled-react-modal-demo-m9jlky57y?file=%2Fsrc%2Findex.js%3A33%2C18-33%2C19

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
    };
  }

  displayFormModal = () => {
    this.setState({ displayModal: true });
  };

  handleModalClose = () => {
    this.setState({ displayModal: false });
  };

  render() {
    // console.log('modal in state: ',this.state.displayModal);
    return (
      <>
        <DeveloperManagerArtist displayForm={this.displayFormModal} />
        <ClientWork />
        {/* <About />
      <Contact />
     */}
        <SelectedProjectForm
          show={this.state.displayModal}
          handleClose={this.handleModalClose}
        />
        <SocialIcon />
        <Footer />
        <ScrollToTop />
      </>
    );
  }
}

export default HomePage;
