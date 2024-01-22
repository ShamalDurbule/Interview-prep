import React from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/constant";
import { useState } from "react";
function Body() {
  let [filteredCards , setFilteredCards] = useState(resObj);
  return (
    <div className="body">
      <div className="search">
        <input type="search" />
        <button className="rate-btn" onClick={() =>setFilteredCards(
          filteredCards = filteredCards.filter((cards) => (
            cards.info.avgRating > 4.5
          ))
        )} >Top Rated Restaurants</button>
      </div>
      <div className="body-wrapper">
        {filteredCards.map((element) => ( //Map for iteration
            <RestaurantCard resData={element} key={element.info.id}/> //Using index as a key is not a good practice
        ))}
      </div>
    </div>
  );
}

export default Body;