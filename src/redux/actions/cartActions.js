import * as actionTypes from "../constant/cartConstants";
import axios from "axios";

export const addToCart = (handle, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://staging.haciendola.dev/backend/test-front/api/products/${handle}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.title,
      name: data.title,
      imageUrl: data.imageSrc,
      handle: data.handle,
      vendor: data.vendor,
      type: data.type,
      inStock:  data.variantInventoryQty,
      price: data.variantPrice,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (handle) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: handle,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
