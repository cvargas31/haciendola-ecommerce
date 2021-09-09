import * as actionTypes from "../constant/collectionConstant";
import axios from "axios";

export const getCollections = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COLLECTIONS });
    const { data } = await axios.get("https://staging.haciendola.dev/backend/test-front/api/collections");

    dispatch({
      type: actionTypes.GET_COLLECTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COLLECTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getCollectionsProducts = (handle) => async (dispatch) => {
  try{
    dispatch({type: actionTypes.GET_COLLECTIONS_PRODUCTS})
    const {data} = await axios.get(`https://staging.haciendola.dev/backend/test-front/api/products/getByCollectionHandle/${handle}`)
    
    dispatch({
      type: actionTypes.GET_COLLECTIONS_PRODUCTS_SUCCESS,
      payload: data
    })
  
  } catch(error){
    dispatch({
      type: actionTypes.GET_COLLECTIONS_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}