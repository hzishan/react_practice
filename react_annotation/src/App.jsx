import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Dropdown from './Dropdown';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
    annotations: [],
    annotation: {},
    width: window.innerWidth,
    height: window.innerHeight
    });
    // this.onDelete = this.onDelete.bind(this);
  }
  


  onSelect = (selectedId) => {console.log("selectedId:",selectedId)}
  onChange = (data) => {console.log("data inform:", data)}
  onDelete=(e)=>{
    this.props.onDelete();
  }

  render () {
    return (
      <div>
        <ReactPictureAnnotation
          {...this.props}
          inputElement={(value, onChange, onDelete) => (
            <Dropdown
            value={value}
            onChange={onChange}
            onDelete={onDelete}
            options={this.props.options}
          />
          )}
        image="https://i.imgur.com/RhzU5r9.jpg"
        onSelect={this.onSelect}
        // onChange={this.onChange}
        onChange={(e)=>{console.log("noa",e)}}
        width={600}//window.innerWidth}
        height={600}//window.innerHeight}
        // scrollSpeed={0}
      />
      </div>

    )
  }
}

export default hot(module)(App);
