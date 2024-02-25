import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData);
    }
  return (resInfo === null) ? <Shimmer/> :(
    <div>
        <h1>{resInfo.data.cards[0].card.card.text}</h1>
    </div>
  )
}

export default RestaurantMenu;