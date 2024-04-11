import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  // const [showItems, setShowItems] = useState(false);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg my-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <div>
        {/* RestaurantCategory is a controlled component here */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card?.card.title}
            data={category.card?.card}
            showItems={index===showIndex}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
