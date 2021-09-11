import * as actionTypes from "../constant/ordersConstants";

export const getOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS:
      return {
        loading: true,
        orders: [],
      };
    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.GET_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleOrderReducer = (state = { order: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_DETAILS:
      return {
        loading: true,
      };
    case actionTypes.GET_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.GET_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
