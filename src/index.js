import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import classes from "./Carousel.css";

class Carousel extends React.Component {
  state = {
    intervalID: null,
    timer: this.props.timer,
    children: React.Children.toArray(this.props.children),    
    slideIndex: this.props.selectedIndex != null ? this.props.selectedIndex : 0,
    direction: "",
    changeSlide: false
  };

  dotchangeHandler = id => {
    if (this.state.children.length > 1) this.setState({ slideIndex: id });
  };

  changeSlideHandler = () => {
    let new_index = null;
    if (this.state.direction === "left") {
      new_index = (this.state.slideIndex - 1) % this.state.children.length;
      if (this.state.slideIndex === 0)
        new_index = this.state.children.length - 1;
    } else {
      new_index = (this.state.slideIndex + 1) % this.state.children.length;
    }
    this.setState({ slideIndex: new_index, changeSlide: false });
  };

  slideChangeHandler = () => {
    this.setState({ direction: "right", changeSlide: true });
  };

  componentDidMount() {    
    if (this.state.timer != null && this.state.children.length > 1) {
      this.setState({
        intervalID: setInterval(this.slideChangeHandler, this.state.timer)
      });
    }
  }
  componentWillUnmount() {
    if (this.state.intervalID != null) {
      this.myClearInterval();
    }
  }

  myClearInterval = () => {
    clearInterval(this.state.intervalID);
  };

  arrowHandler = direction => {
    if (this.state.children.length > 1)
      this.setState({ direction: direction, changeSlide: true });
  };

  pauseIntervalHandler = () => {
    this.myClearInterval();
  };
  resumeIntervalHandler = () => {
    this.setState({
      intervalID: setInterval(this.slideChangeHandler, this.state.timer)
    });
  };

  render() {
    const { children, slideIndex } = this.state;  
    console.log("hello");      
    return (
      <div
        onMouseLeave={
          (this.state.timer != null && children.length > 1) ? () => this.resumeIntervalHandler() : null
        }
        onMouseEnter={
          (this.state.timer != null && children.length > 1) ? () => this.pauseIntervalHandler() : null
        }
        className={classes.Container}
      >
        <div
          onClick={() => this.arrowHandler("left")}
          className={classes.leftArrow}
        >
          <i />
        </div>
        <div className={classes.slideContainer}>
          <CSSTransition
            in={this.state.changeSlide}
            timeout={800}
            classNames={{
              enter: classes.slideContainerEnter,
              enterDone: classes.slideContainerEnterDone
            }}
            onEntered={() => this.changeSlideHandler()}
          >
            {children[slideIndex]}
          </CSSTransition>
          <ol>
            {children.map((item, index) => {
              let listItem = null;
              index === this.state.slideIndex
                ? (listItem = <li key={index} className={classes.active} />)
                : (listItem = (
                    <li
                      onClick={() => this.dotchangeHandler(index)}
                      key={index}
                    />
                  ));
              return listItem;
            })}
          </ol>
        </div>
        <div
          onClick={() => this.arrowHandler("right")}
          className={classes.rightArrow}
        >
          <i />
        </div>
      </div>
    );
  }  
};

Carousel.propTypes = {
  timer: PropTypes.number,
  selectedIndex: PropTypes.number
};

export default Carousel;