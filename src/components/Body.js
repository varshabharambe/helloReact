import { useEffect, useState, useRef } from "react";
// import restaurants from "../utils/restaurants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText,setSearchText] = useState("");

    const refVariable = useRef(null);

    useEffect(()=>{
        console.log("callback called");
        fetchData();
    },[]);

    console.log("body rendered");
    // console.log("list",list);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        // console.log("data", jsonData);
        setList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // conditional rendering
    // if(list.length === 0){
    //     return <Shimmer/>;
    // }

    return (list.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div>
                    <input type="text" ref={refVariable}/>
                    {/* <input type="text" ref={inputRef} value={searchText} onChange={(e)=>{setSearchText(e.target.value); console.log(searchText)}}/> */}
                    <button onClick={()=>{
                        console.log(refVariable.current.value);
                        setFilteredList(list.filter((restaurant) => restaurant.info.name.toLowerCase().includes(refVariable.current.value.toLowerCase())));
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    let filtered = list.filter((val) => val.info.avgRating>4)
                    console.log("filtered", filtered);
                    setList((x) => x.filter((val) => val.info.avgRating>4));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredList?.map(restaurant => 
                <Link className= "linkStyle" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard restaurant={restaurant}/>
                </Link>
                )}
            </div>
            <div className="Hello">
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
                <img alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxRajHH4ZXixPGu-uu7bIz8aU8F-3DnZG0XpLbDOd4Kzhc0xCG8EpOLSY0MKyv-qhiY&usqp=CAU"/>
            </div>
        </div>
    );
}

export default Body;