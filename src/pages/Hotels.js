import React from "react";
import Filter from "../components/filter/Filter";
import Hotel from "../components/hotel/Hotel";
export default function Home() {
  return (
    <div>
      <div className="HotelsCont row no-margin">
        <div className="filter-cont col-12 col-md-3 padding-right">
          <Filter />
        </div>
        <div className="hotel-cont col-12 col-md-9">
          <Hotel />
        </div>
      </div>
    </div>
  );
}
