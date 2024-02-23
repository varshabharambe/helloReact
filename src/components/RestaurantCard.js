import { DOM_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurant} = props;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = restaurant.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={DOM_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

export default RestaurantCard;