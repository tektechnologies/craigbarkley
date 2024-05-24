import React  from 'react';
import { StyledIconButton, StyledArrowIcon } from './StyleElements';
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
    console.log('handle click fire');
    this.setState({open: false});
    animateScroll.scrollToTop({ duration: 0});
  }

componentDidMount(){
  window.addEventListener('scroll', this.handleScroll, {passive: true});
}
componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll);
}

  render() {
    return (
      <StyledIconButton
        size='large'
        aria-label='scroll to top'
        onClick={this.handleClick}
      >
        <StyledArrowIcon fontSize={40}/>

      </StyledIconButton>
    )
  }
}

export default ScrollToTop;