import React from "react";
import { useSelector } from "react-redux";
import RestaurantItem, { ItemCostRestaurantItem } from "./RestaurantItem";
import BillDetails from "./BillDetails";
import CartEmpty from "./CartEmpty";

const colors = [
  "rgb(224,238,245)", // Light Blue
  "rgb(246,230,233)", // Light Pink
  "rgb(251,238,215)", // Light Orange
  "rgb(229,241,211)", // Light Green
];

const Cart = () => {
  const itemCards = useSelector((store) => store.cart.items);

  const RestaurantItemCostDetails = ItemCostRestaurantItem(RestaurantItem);
  return (
    <div>
      {itemCards.length > 0 &&
        itemCards.map((eachItem, index, array) => (
          <div className="w-full md:w-8/12 lg:w-6/12 m-auto shadow-xl rounded-2xl mb-4 p-4 bg-white"  key={eachItem.resItem.info.id}>
            <RestaurantItemCostDetails
            key={eachItem.resItem.info.id}
              resItem={eachItem.resItem}
              customBgColor={colors[index % colors.length]}
              price={
                eachItem.resItem.info.price / 100 ||
                eachItem.resItem.info.defaultPrice / 100
              }
              count={eachItem.count}
            />
          </div>
        ))}
      {itemCards.length > 0 ? <BillDetails /> : <CartEmpty />}
    </div>
  );
};

export default Cart;
