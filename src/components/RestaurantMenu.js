import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { RES_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(RES_URL + resId);
        const jsonData = await data.json();
        // console.log(jsonData);
        setResInfo(jsonData?.data);
    }

    if(resInfo === null){
      return <Shimmer/>;
    }

    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card.card.info;
    console.log("name", name);
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCards",itemCards);

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