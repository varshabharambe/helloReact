import {useDispatch} from "react-redux";
import { addItems } from "../utils/cartSlice";
import { DOM_URL } from "../utils/constants";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItems(item));
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                   
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold text-gray-600">{item.card?.info?.name}</span>
                            <span> - ₹{item.card?.info?.price? item.card?.info?.price/100 : item.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <button className="absolute bg-white px-2 rounded-lg mx-3 shadow-lg text-sm" onClick={() => handleAddItem(item)}>ADD +</button>
                        <img src={DOM_URL + item.card?.info?.imageId} className="w-full"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;