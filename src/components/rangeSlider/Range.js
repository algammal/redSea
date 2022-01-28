import React, { Component } from "react";
import { Slider, Handles, Tracks, Rail } from "react-compound-slider";
import Valueviewer from "../rangeSlider/Valueviewer";
import "../rangeSlider/range.css";
function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: "absolute",
        height: 10,
        zIndex: 1,
        marginTop: 35,
        backgroundColor: "#fe641b",
        borderRadius: 5,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {
        ...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */
      }
    />
  );
}
function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: -15,
        marginTop: 25,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "#464444",
        color: "#333",
      }}
      {...getHandleProps(id)}
    >
      <div
        value={value}
        style={{ fontFamily: "Roboto", fontSize: 11, marginTop: -35 }}
        className="values"
      >
        {value}
      </div>
    </div>
  );
}
const domain = [0, 100];
const defaultValues = [0, 100];
export class Range extends Component {
  state = {
    values: defaultValues.slice(),
  };
  onChange = (values) => {
    this.setState({ values });
  };
  render() {
    const {
      state: { values },
    } = this;
    const sliderStyle = {
      // Give the slider some width
      position: "relative",
      width: "90%",
      height: 80,
      margin: "0 auto",
    };

    const railStyle = {
      position: "absolute",
      width: "100%",
      height: 10,
      marginTop: 35,
      borderRadius: 5,
      backgroundColor: "#acb9be",
    };

    return (
      <div>
        <Slider
          rootStyle={
            sliderStyle /* inline styles for the outer div. Can also use className prop. */
          }
          domain={domain}
          step={1}
          mode={2}
          onChange={this.onChange}
          values={values}
        >
          <div
            style={
              railStyle /* Add a rail as a child.  Later we'll make it interactive. */
            }
          />
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
        <div>
          <Valueviewer values={values}>{values}</Valueviewer>
        </div>
      </div>
    );
  }
}

export default Range;
