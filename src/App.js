import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.scss";
import NavBar from "./components/NavBar/Navbar";
import TourList from "./components/TourList";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <TourList></TourList>
      </React.Fragment>
    );
  }
}
