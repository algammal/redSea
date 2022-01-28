import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "../filter/filter.css";
import stardimmed from "../../images/if_star_172558.png";
import staryellow from "../../images/if_star_326703.png";
import Range from "../rangeSlider/Range";
import { connect } from "react-redux";
import { right_search } from "../../actions/search"

class Filter extends Component {
  state = {
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false
  };
  constructor(props) {
    super(props);
    this.showAllAccordionTabs = this.showAllAccordionTabs.bind(this);
  }

  showAllAccordionTabs() {
    const getCollapsedAccordionSections = document.getElementsByClassName(
      "collapse"
    );
    for (var i = 0; i < getCollapsedAccordionSections.length; i++) {
      getCollapsedAccordionSections[i].classList.add("show");
    }
  }
  render() {
    return (
      <div className="filter-container">
        <div className="filter-header">Filter Search</div>
        <div className="filter-allcards">
          <Accordion onClick={this.showAllAccordionTabs} defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="accordion-Toggle"
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  Star Grade
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="filter-rating">
                    <label className="filter-star-cont">
                      <ul key="star0">
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                      </ul>
                      <input type="checkbox" onChange={(e) => {
                        this.setState({ oneStar: !this.state.oneStar })
                      }} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <ul key="star1">
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                      </ul>
                      <input type="checkbox" onChange={(e) => this.setState({ twoStar: !this.state.twoStar })} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <ul key="star2">
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                      </ul>
                      <input type="checkbox" onChange={(e) => this.setState({ threeStar: !this.state.threeStar })} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <ul key="star3">
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={stardimmed} />
                        </li>
                      </ul>
                      <input type="checkbox" onChange={(e) => this.setState({ fourStar: !this.state.fourStar })} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <ul key="star4">
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                        <li className="star rating-yellow">
                          <img alt="star" src={staryellow} />
                        </li>
                      </ul>
                      <input type="checkbox" onChange={(e) => this.setState({ fiveStar: !this.state.fiveStar })} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="accordion-Toggle"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  Price Range
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Range />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="accordion-Toggle"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  Property Type
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="filter-rating">
                    <label className="filter-star-cont">
                      <span>Apartment</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Hotel</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Guest House</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Motel</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Residance</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Resort</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Time Share</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Extended Stay</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Villa</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="accordion-Toggle"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  Amenties
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="filter-rating">
                    <label className="filter-star-cont">
                      <span>Airport Transport</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Business Center</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Disabled Facilities</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Night Club</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Laundry Service</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Restrant</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Wifi Internet</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Bar Lounge</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Swiming Pool</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Inside Parking</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Shuttle Bus Service</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Fitness Center</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Spa</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Children Activities</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Air Conditioner</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Bankquet Hall</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Cards Accepted</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Elevator</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="filter-star-cont">
                      <span>Pets Allowed</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <div className="button-search">
              <button onClick={() => { this.props.right_search(this.state.oneStar, this.state.twoStar, this.state.threeStar, this.state.fourStar, this.state.fiveStar) }} className="details-btn">Search</button>
            </div>
          </Accordion>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("statefilter", state)
  return {
    filter: state,
  };
}
const mapDispatchToProps = {
  right_search
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);