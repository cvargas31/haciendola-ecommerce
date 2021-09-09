import * as actionTypes from "../constant/collectionConstant";

export const getCollectionsReducer = (state = { collections: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_COLLECTIONS:
      return {
        loadingCollections: true,
        collections: [],
      };
    case actionTypes.GET_COLLECTIONS_SUCCESS:
      return{
        loadingCollections: false,
        collections: action.payload,
      }
    case actionTypes.GET_COLLECTIONS_FAIL:
      return {
        loadingCollections: false,
        errorCollections: action.payload
      }
    default:
      return state;
  }
};


export const getCollectionsProductsReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case actionTypes.GET_COLLECTIONS_PRODUCTS:
      return {
        loading: true,
      }
    case actionTypes.GET_COLLECTIONS_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
      case actionTypes.GET_COLLECTIONS_PRODUCTS_FAIL:
        return {
          loading: false,
          error: action.payload
        }
    default:
      return state
  }
}