import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurents from "../hooks/useRestaurent";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import MenuShimmmer from "./MenuShimmmer";
const RestaruentMenu = () => {
    const dispatch = useDispatch();
    const { resId } = useParams();
    const resInfo = useRestaurents(resId);
    if (resInfo.length === 0) return <MenuShimmmer />;
    const handleAdd = (item) => {
        dispatch(addItem(item));
    };
    return (
        <div className="p-4 m-4">
            <h1 className="font-bold text-3xl text-red-500">
                {resInfo[0]?.card?.card?.info?.name}
            </h1>
            <h5 className=" text-red-500">
                {resInfo[0]?.card?.card?.info?.city} /
                {resInfo[0]?.card?.card?.info?.areaName}
            </h5>
            <h2 className="font-bold">Menu</h2>
            
            <div data-testid="menu">
                {resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                    (item, index) => (
                        <div
                            key={index}
                            className="flex justify-between border p-2 m-2 hover:shadow-2xl"
                        >
                            <div className="p-2 m-2">
                                <h4 className="font-semibold">{item.card.info.name}</h4>
                                <p className="font-medium">
                                    {" "}
                                    Rs.{(item.card.info.price / 100).toFixed(0)}/-
                                </p>
                                <small className="text-wrap">{item.card.info.description}</small>
                                <br />
                                <button
                                    data-testid="add-btn"
                                    className="p-1 m-2 bg-green-600 rounded-md text-white"
                                    onClick={() => handleAdd(item.card.info)}
                                >
                                    Add
                                </button>
                            </div>

                            <div>
                                <img
                                    className="w-48"
                                    src={
                                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                                        item.card.info.imageId
                                    }
                                    alt="images"
                                />
                            </div>
                            {/* <li>{item.card.info.name} -Rs.{item.card.info.price/100}\-</li> */}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default RestaruentMenu;
