import React, { Component } from "react";
import "../hotel/hotel.css";
import stardimmed from "../../images/if_star_172558.png";
import staryellow from "../../images/if_star_326703.png";
import { connect } from "react-redux";
import { handleGethotels } from "../../actions/hotel";
import Search from "../search/Search";

class Hotel extends Component {

  componentDidMount() {
    this.props.dispatch(handleGethotels());
    this.render_allHotels()
  }
  componentDidUpdate() {
    this.render_allHotels()
  }
  render_allHotels = () => {
    // const { hotels } = this.props;
    // let array = []
    // for (const key in hotels) {
    //   if (Object.hasOwnProperty.call(hotels, key)) {
    //     const element = hotels[key];
    //     // console.log(element)
    //     array.push(...element)
    //   }
    // }
    //console.log(array);
    return (
      <div className="hotel-allcards-cont">
        {this.props.hotels.hotels?.map((hotel) => {
          return (
            <div key={hotel.id} className="hotel-card-cont row no-margin">
              <div className="hotel-img-cont col-12 col-md-3">
                <img alt="cardImg" className="Hotel-img" src={hotel.img} />
              </div>
              <div className="hotel-card-textcont col-12 col-md-9">
                <h2>{hotel.hotelName}</h2>
                <div className="hotel-card-locationcont">
                  <div className="hotel-card-subtitle">
                    <h3 className="pin">{hotel.location}</h3>
                    <ul>
                      <li className="star rating-yellow">
                        <img
                          alt="star"
                          src={hotel.rating >= 1 ? staryellow : stardimmed}
                        />
                      </li>
                      <li className="star rating-yellow">
                        <img
                          alt="star"
                          src={hotel.rating >= 2 ? staryellow : stardimmed}
                        />
                      </li>
                      <li className="star rating-yellow">
                        <img
                          alt="star"
                          src={hotel.rating >= 3 ? staryellow : stardimmed}
                        />
                      </li>
                      <li className="star rating-yellow">
                        <img
                          alt="star"
                          src={hotel.rating >= 4 ? staryellow : stardimmed}
                        />
                      </li>
                      <li className="star rating-yellow">
                        <img
                          alt="star"
                          src={hotel.rating >= 5 ? staryellow : stardimmed}
                        />
                      </li>
                    </ul>
                  </div>
                  <p>{hotel.description}</p>
                  <button className="details-btn">Details</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
  render() {

    console.log(this.render_allHotels())
    //let items = this.props.hotels.hotels
    return (
      // console.log("this.props.hotels", this.props.hotels.hotels),
      <div className="Hotel-rightside-cont">
        <div className="menu-comp-cont">
          <Search />
        </div>
        {this.render_allHotels()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotels: state
  };
}

export default connect(mapStateToProps)(Hotel);
