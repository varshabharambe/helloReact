import { useEffect, useState, useRef } from "react";
// import restaurants from "../utils/restaurants";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const refVariable = useRef(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    // console.log("callback called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }catch(err){
      console.log("err", err);
    }
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
            {
              restaurant.info.avgRating > 4 ? (<RestaurantCardPromoted restaurant={restaurant} />) : (<RestaurantCard restaurant={restaurant} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
