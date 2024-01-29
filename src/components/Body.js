import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { useState,useEffect } from "react";
function Body() {
  const [listofRestaurent, setListofrestaurent] = useState([]);
  const [filteredCards , setFilteredCards] = useState([]);
  const [searchText, setSearchtext] = useState('')
  console.log(searchText)

  useEffect(() => {
    handleApi();
  }, [])

  const handleApi = async() => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.083184628856745&lng=79.10812217742205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await response.json();
    console.log(data);
    //Optional Chaining
    setListofrestaurent(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredCards(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
 

  return filteredCards.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="search">
      <div className="searchBox">
        <input type="search" value={searchText} onChange={(e) => setSearchtext(e.target.value)} />
        <button onClick={() => {
          const filteredRest = listofRestaurent.filter((res) => ( //Duplication of filteredcards
             res.info.name.includes(searchText)
          ));
          setFilteredCards(filteredRest);
        }}>Search</button>
      </div>
        <button className="rate-btn" onClick={() =>{
          const filteredCard = filteredCards.filter((cards) => (
            cards.info.avgRating > 4.2
          ))
          setFilteredCards(filteredCard);
        }}>Top Rated Restaurants</button>
      </div>
      <div
       className="body-wrapper">
        {filteredCards.map((element) => ( //Map for iteration
            <RestaurantCard resData={element} key={element.info.id}/> //Using index as a key is not a good practice
        ))}
      </div>
    </div>
  );
}

export default Body;