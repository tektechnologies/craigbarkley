import React, { Component } from 'react';
import DeveloperManagerArtist from '../components/DeveloperManagerArtist/DeveloperManagerArtist';
import ClientWork from '../components/ClientWork';

class HomePage extends Component {
  render() {
    return (
     <>
      <DeveloperManagerArtist />
      <ClientWork />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
     </>
    )
  }
}

export default HomePage;