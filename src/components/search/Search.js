import React, { Component } from "react";
import "../search/search.css";
import {
  SEARCH_HOTELNAME,
  SEARCH_ADULT,
  SEARCH_CHILD,
  SEARCH_DROPDOWN,
  SEARCH_CHECKINDATE,
  SEARCH_CHECKOUTDATE,
  SEARCH_BTN,
} from "../../types";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    hotelname: "",
    checkin: "",
    checkout: "",
    adult: "",
    child: "",
  };
  // dropdown_toggle = () => {
  //   this.setState({
  //     dropdown: this.state.dropdown !== this.state.dropdown,
  //   });
  // };
  render() {
    console.log("state", this.state);
    console.log("props", this.props);
    return (
      <div className="navshort-cont">
        <div className="navshort-cont-head">
          <div className="navshort-tab">home</div>
        </div>
        <div className="search-cont">
          <div className="search-section">
            <input
              type="text"
              onChange={(e) => this.setState({ hotelname: e.target.value })}
              placeholder="Search by Hotel or city"
            />
          </div>
          <div className="search-section">
            <label>checkin</label>
            <div className="inputcalendar">
              <div className="calendar-value">{this.props.checkinvalue}</div>
              <input
                type="date"
                id="start"
                name="trip-start"
                value=""
                min="2018-01-01"
                max="2018-12-31"
                onChange={(e) => this.setState({ checkin: e.target.value })}
              />
            </div>
          </div>
          <div className="search-section">
            <label>checkout</label>
            <div className="inputcalendar">
              <div className="calendar-value">{this.props.checkoutvalue}</div>

              <input
                type="date"
                id="end"
                name="trip-end"
                value=""
                min="2018-01-01"
                max="2018-12-31"
                onChange={(e) => this.setState({ checkout: e.target.value })}
              />
            </div>
          </div>
          <div className="search-section dropdown">
            <button
              // onClick={() => this.props.dropdown_toggle()}
              className="numberOfChildAdultsBtn"
            >
              Adults,Child
            </button>
            {this.props.dropdown === true ? (
              <div className="dropdownItemCont">
                <div className="numberOfadults dropdownitem">
                  <span>Child</span>
                  <select
                    onChange={(e) => this.props.get_child(e.target.value)}
                    className="search-ropdown"
                    name="cars"
                    id="children"
                  >
                    <option key="child1" value="1">
                      1
                    </option>
                    <option key="child2" value="2">
                      2
                    </option>
                    <option key="child3" value="3">
                      3
                    </option>
                    <option key="child4" value="4">
                      4
                    </option>
                    <option key="child5" value="5">
                      5
                    </option>
                    <option key="child6" value="6">
                      6
                    </option>
                    <option key="child7" value="7">
                      7
                    </option>
                    <option key="child8" value="8">
                      8
                    </option>
                    <option key="child9" value="8">
                      9
                    </option>
                    <option key="child10" value="8">
                      10
                    </option>
                  </select>
                </div>
                <div className="numberOfChild dropdownitem">
                  <span>Adult</span>
                  <select
                    onChange={(e) => this.props.get_adult(e.target.value)}
                    className="search-ropdown"
                    name="cars"
                    id="adults"
                  >
                    <option key="adult1" value="1">
                      1
                    </option>
                    <option key="adult2" value="2">
                      2
                    </option>
                    <option key="adult3" value="3">
                      3
                    </option>
                    <option key="adult4" value="4">
                      4
                    </option>
                    <option key="adult5" value="5">
                      5
                    </option>
                    <option key="adult6" value="6">
                      6
                    </option>
                    <option key="adult7" value="7">
                      7
                    </option>
                    <option key="adult8" value="8">
                      8
                    </option>
                    <option key="adult9" value="8">
                      9
                    </option>
                    <option key="adult10" value="8">
                      10
                    </option>
                  </select>
                </div>
              </div>
            ) : null}
          </div>
          <div className="menu-search">
            <button >Search</button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state,
    dropdown: state.dropdown,
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     checkin_date: (checkinvalue) =>
//       dispatch({
//         type: SEARCH_CHECKINDATE,
//         checkin: checkinvalue,
//       }),
//     checkout_date: (checkoutvalue) =>
//       dispatch({
//         type: SEARCH_CHECKOUTDATE,
//         checkout: checkoutvalue,
//       }),
//     get_hotelname: (value) =>
//       dispatch({
//         type: SEARCH_HOTELNAME,
//         hotelname: value,
//       }),
//     get_child: (value) =>
//       dispatch({
//         type: SEARCH_CHILD,
//         child: value,
//       }),
//     get_adult: (value) =>
//       dispatch({
//         type: SEARCH_ADULT,
//         adult: value,
//       }),
//     dropdown_toggle: (dropdown) =>
//       dispatch({
//         type: SEARCH_DROPDOWN,
//         dropdown: dropdown,
//       }),
//     search_btn: (values) =>
//       dispatch({
//         type: SEARCH_BTN,
//         values,
//       }),
//   };
// };
export default connect(mapStateToProps)(Search);
