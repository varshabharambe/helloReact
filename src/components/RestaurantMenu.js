import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();

    resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
      return <Shimmer/>;
    }

    const {name, cuisines,costForTwoMessage} = resInfo?.cards[0]?.card.card.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <ul>
          {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu;