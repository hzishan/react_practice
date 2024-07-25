import React, { Component } from "react";
import Annotation from "react-image-annotation";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    annotations: [],
    annotation: {},
    width: window.innerWidth,
    height: window.innerHeight
  }

  onChange = (annotation) => {
    this.setState({ annotation })
    // console.log(annotation)
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation
    console.log(annotation)
    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
  }

  render () {
    return (
      <Annotation
        src={"https://images-tw.girlstyle.com/wp-content/uploads/2022/07/a91bcd61.jpg"}
        alt='Two pebbles anthropomorphized holding hands'
        style={{ width: "80%", height: "80%" }} 
        annotations={this.state.annotations}
        type={this.state.type}
        value={this.state.annotation}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default hot(module)(App);
