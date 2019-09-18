import React, { Component } from "react";
import Tour from "../Tour";
import "./tourList.scss";
import { tourData } from "../../tourData";
export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(value => value.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour1 => (
          <Tour key={tour1.id} tour={tour1} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
