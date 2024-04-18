import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.timer = null;
  }
  
  
  // This function adds a character to the string.
  // typeWriterEffect = () => {
  //   this.setState((prevState) => {
  //     return {
  //       curIndex: prevState.curIndex + 1,
  //       currentName: prevState.fullName.substring(0, prevState.curIndex)
  //     };
  //   });
  // };

  //curIndex <= fullName.lengt
  componentDidMount() {
    // Start typewriter effect when component mounts
    this.timerID = setInterval(this.typeWriterEffect, 500);
  }

  componentWillUnmount() {
    // Clean up by clearing the timer when component unmounts
    clearInterval(this.timerID);
  }

  typeWriterEffect = () => {
    const { fullName, curIndex } = this.state;
    if (this.props.showName) {
      this.setState((prevState) => ({
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex + 1)
      }));
    } else {
      // Stop typewriter effect when full name is displayed
      clearInterval(this.timer);
    }
  };


  // Required lifecycle methods here
  
  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
