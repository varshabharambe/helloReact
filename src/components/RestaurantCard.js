import { DOM_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurant} = props;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = restaurant.info;
    return (
        <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-gray-300">
            <img className="rounded-lg" alt="res-logo" src={DOM_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

//Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
    return (<div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">promoted</label>
        <RestaurantCard {...props}/>
    </div>);
    }
}

export default RestaurantCard;