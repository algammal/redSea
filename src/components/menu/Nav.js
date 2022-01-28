import React, { Component } from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import "../menu/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="Nav-ul">
          <NavLink exact to="/">
            <img alt="logo" src={logo} />
          </NavLink>
          <NavLink exact to="/pages/Hotels">
            Hotels
          </NavLink>
          <NavLink exact to="/pages/Flights">
            Flights
          </NavLink>
          <NavLink exact to="/pages/Cruises">
            Cruises
          </NavLink>
          <NavLink exact to="/pages/Activities">
            Activities
          </NavLink>
          <NavLink exact to="/pages/Transfers">
            Transfers
          </NavLink>
        </ul>
        <div className="solgan">Holiday Become Experience</div>
      </div>
    );
  }
}
