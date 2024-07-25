import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Select from "react-select";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: "Mel", label: "Mel" },
        { value: "SCC", label: "SCC" },
        { value: "BCC", label: "BCC" },
        { value: "NOR", label: "NOR" }
      ]
    };
  }

  handleChange = e => {
    let { onChange } = this.props;
    let v = e.value;
    onChange(v);
  };

  onDelete = () => {
    let { onDelete } = this.props;
    onDelete();
  };

  render() {
    console.log("annotator", this.props);
    return (
      <div className="row" style={{ width: "300%" }}>
        <div className="col col-md-8">
            <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
            />
        </div>
        <div
          style={{ float: "right", background: "white" }}
        >
          <i class='far fa-trash-alt' onClick={this.onDelete}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(Dropdown);
