import * as actionTypes from "../constant/ordersConstants";
import axios from "axios";

export const getOrders = (token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDERS });
    const { data } = await axios.get(
      "https://staging.haciendola.dev/backend/test-front/api/users/getOrders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: actionTypes.GET_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetail = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDER_DETAILS });
    const { data } = await axios.get(
      `https://staging.haciendola.dev/backend/test-front/api/users/getOrderDetail/${orderId}`
    );

    dispatch({
      type: actionTypes.GET_ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
