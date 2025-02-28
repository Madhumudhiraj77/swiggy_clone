const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const SWIGGY_APID  = PROXY_URL + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

export const SWIGGY_API = PROXY_URL + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.387158&lng=78.545031&carousel=true&third_party_vendor=1";
export const SWIGGY_CATEGORY_API = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
export const RESTAURANT_LOGO = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// https://www.swiggy.com

export const RESTAURANT_DETAILS_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.387158&lng=78.545031&restaurantId="
export const EMPTY_CART_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
export const CATEGORY_RESTAURANTS_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2"

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null
export const ROUTES_NAMES = {
    HOME : '/',
    HELP : '/support',
    RESTAURANT_DETAILS : '/:areaName/:restaurantName/:resId',
    CART : '/cart',
    ORDER_CONFIRMED : "/orderConfirmed",
    CATEGORY_COLLECTIONS : '/collections/:collectionId'
}