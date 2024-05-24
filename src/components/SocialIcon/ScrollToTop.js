import React  from 'react';
import { StyledIconButton, StyledarrowIcon } from './StyleElements';
import { animateScroll } from 'react-scroll';

 class ScrollToTop extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      shouldRender: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({open: false});
    animateScroll.scrollToTop({ duration: 0});
  }



  render() {
    return (
      <div>ScrollToTop</div>
    )
  }
}

export default ScrollToTop;