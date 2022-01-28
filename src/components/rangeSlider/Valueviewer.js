import React, { Component } from "react";
import "../rangeSlider/range.css";
export class Valueviewer extends Component {
  render() {
    return (
      <div>
        <div className="price-cont">
          <div className="min-max-title">Min Price</div>
          <div className="min-max-value">
            {this.props.values[0]}
            <span>USD</span>
          </div>
        </div>
        <div className="price-cont">
          <div className="min-max-title">Max Price</div>
          <div className="min-max-value">
            {this.props.values[1]}
            <span>USD</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Valueviewer;
