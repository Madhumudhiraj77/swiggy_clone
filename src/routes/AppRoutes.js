import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import { ROUTES_NAMES } from "../utils/constants";
import Help from "../components/Help";
import Body from "../components/Body";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import OrderConfirmed from "../components/OrderConfirmed";
import CategoriesRestaurants from "../components/CategoriesRestaurants";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES_NAMES.HOME} element={<HomePage />}>
        <Route index element={<Body />}/>
          <Route path={ROUTES_NAMES.HELP} element={<Help />} />
          <Route path={ROUTES_NAMES.CART} element={<Cart />} />
          <Route path={ROUTES_NAMES.ORDER_CONFIRMED} element={<OrderConfirmed />} />
          <Route path={ROUTES_NAMES.CATEGORY_COLLECTIONS} element={<CategoriesRestaurants />} />

          <Route path={ROUTES_NAMES.RESTAURANT_DETAILS} element={<RestaurantMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
