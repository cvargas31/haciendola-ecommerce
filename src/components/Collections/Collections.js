import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
// import { getProductDetails } from "../../redux/actions/productActions";
import { getCollectionsProducts } from "../../redux/actions/collectionActions";
import { addToCart } from "../../redux/actions/cartActions";

const Collections = () => {

  const dispatch = useDispatch()
  const {handle} = useParams()
  const productsDetails = useSelector((state) => state.collectionProducts)
  const {loading, error, product} = productsDetails

  useEffect(() => {
    if (product && handle !== product.handle){
      dispatch(getCollectionsProducts)
    }
  }, [dispatch, product, handle])

  console.log(product)
  return (
    <div>
      Collections
    </div>
  )
}

export default Collections