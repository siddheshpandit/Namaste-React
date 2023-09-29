import Banner from "../../banner.png";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"
import { useState } from "react";

const AppBody = () => {
  const [listOfRes, setListOfRes] = useState(restaurantList)
  return (
    <div className="app-body">
      <div className="app-banner">
        <img className="banner-image" src={Banner} alt="" />
      </div>
      {/* Restaurant Cards */}
      <div className="res-container">
        <div className="filter">
          <button onClick={()=>{
            console.log(listOfRes);
            const filteredList=listOfRes.filter((restaurant)=>(
              restaurant.info.avgRating>4
            ))
            setListOfRes(filteredList);
          }} className="filter-btn">Top Rated Restaurants</button>
        </div>
        <h1 style={{ paddingTop: "10px" }}>
          Restaurants with online food delivery near you
        </h1>
        <div className="res-cards">
          {listOfRes.map((restaurant) => (
            // console.log(restaurant);
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppBody;
