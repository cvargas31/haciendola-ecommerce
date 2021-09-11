// Import Dependencies
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  singleProductDetailsReducer,
} from "./reducers/productReducers";
import {
  getCollectionsReducer,
  getCollectionsProductsReducer,
} from "./reducers/collectionReducers";
import { getOrdersReducer, singleOrderReducer } from "./reducers/orderReducer";

// All Reducers in a object
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  singleProduct: singleProductDetailsReducer,
  collections: getCollectionsReducer,
  collectionProducts: getCollectionsProductsReducer,
  orders: getOrdersReducer,
  singleOrder: singleOrderReducer
});

// Middleware
const middleware = [thunk];

// initial value
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};
// Store Creation
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
