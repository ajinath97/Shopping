import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // handleDelete = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          // onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
          // onClick={this.props.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
