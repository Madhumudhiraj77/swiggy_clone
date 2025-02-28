import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import RestaurantItem from "./RestaurantItem";

const colors = [
  "rgb(224,238,245)", // Light Blue
  "rgb(246,230,233)", // Light Pink
  "rgb(251,238,215)", // Light Orange
  "rgb(229,241,211)", // Light Green
];

const RestaurantCategory = ({
  resCategoryData,
  showItems,
  setExpandedIndex,
  setAllCollapse,
}) => {
  const { title, itemCards } = resCategoryData;

  const handleAccordion = () => {
    if (showItems) {
      setAllCollapse();
    } else {
      setExpandedIndex();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center" onClick={handleAccordion}>
        <h1 className="font-bold text-[18px]">
          {title} ({itemCards.length})
        </h1>
        <button>
         {!showItems ? <MdKeyboardArrowDown size={40} /> :  <MdKeyboardArrowUp size={40} />}
        </button>
      </div>

      {showItems &&
        itemCards.map((eachItem, index, array) => (
          <React.Fragment key={eachItem.card.id}>
            <RestaurantItem
            key={eachItem.card.id}
              resItem={eachItem.card}
              customBgColor={colors[index % colors.length]}
            />
            {index !== array.length - 1 && (
              <hr className=" border-[#f2f2f3] border-[1px] my-4" />
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default RestaurantCategory;
