import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays · 25 September to 30 September · 2 Guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>

      <SearchResult
        img="https://paradisahomes.com/wp-content/uploads/2017/06/IMG_0158.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian house"
        description="1 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free Parking · Washing Machine "
        star={4.73}
        price="$30/night"
        total="$117 Total"
      />

      <SearchResult
        img="https://cdn.home-designing.com/wp-content/uploads/2018/08/modern-platform-bedroom-sets-1024x576.jpg"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 Guest · 3 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen"
        star={4.3}
        price="$40/night"
        total="$157 Total"
      />

      <SearchResult
        img="data:image/jpeg;base64,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"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free Parking · Dry Cleaning"
        star={5}
        price="$60/night"
        total="$450 Total"
      />
    </div>
  );
}

export default SearchPage;
