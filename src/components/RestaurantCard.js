import React from "react";
import {CDN_URL} from '../utils/constant'

function RestaurantCard(props) {
  const { resData } = props;
  const{cloudinaryImageId, name, cuisines,avgRatingString,sla} = resData?.info; //Destructuring
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={ CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="card-details">
        <h2>{name}</h2>
        <h3>{cuisines.join(',')}</h3>
        <h4>{avgRatingString} stars</h4>
        <p>{sla.deliveryTime} mins</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
