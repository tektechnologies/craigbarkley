import React from 'react';
import Dropdown from '../DropdownNav/DropdownNav';
import Header from '../Header/Header'


class DeveloperManagerArtist extends React.Component {

constructor(props){
  super(props);
  this.state ={
    isOpen: false,
    showSubtitle: false,
    showScrollDown: false,
  };
}


toggle = () => {
   this.setState((prevState) => ({
    isOpen: !prevState.isOpen,
   }));
  };


  render() {
  
    // showSubtitle, showScrollDown ~ WIP
    const {isOpen, } = this.state;
    console.log(this.state)

    return (
      <main>
        <Dropdown isOpen={isOpen} toggle={this.toggle} />
        <Header toggle={this.toggle} />
      </main>
    )
  }
}


export default DeveloperManagerArtist;