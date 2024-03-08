import { useEffect, useState, useRef } from "react";
// import restaurants from "../utils/restaurants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const refVariable = useRef(null);

  useEffect(() => {
    // console.log("callback called");
    fetchData();
  }, []);

  // console.log("body rendered");
  // console.log("list",list);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log("data", jsonData);
    setList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // conditional rendering
  // if(list.length === 0){
  //     return <Shimmer/>;
  // }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Offline...!</h1>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="py-2 border border-solid border-black rounded-lg"
            type="text"
            ref={refVariable}
          />
          <button
            className="bg-green-200 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              console.log(refVariable.current.value);
              setFilteredList(
                list.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(refVariable.current.value.toLowerCase())
                )
              );
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="bg-gray-200 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              let filtered = list.filter((val) => val.info.avgRating > 4);
              console.log("filtered", filtered);
              setList((x) => x.filter((val) => val.info.avgRating > 4));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList?.map((restaurant) => (
          <Link
            className="linkStyle"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
