import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const SingleProduct = ({history}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { handle } = useParams();
  const productDetails = useSelector((state) => state.singleProduct);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && handle !== product.handle) {
      dispatch(getProductDetails(handle));
    }
  }, [dispatch, product, handle]);
  console.log(product);

  const addToCartHandler = () => {
    dispatch(addToCart(product.handle, qty));
    history.push("/cart")
  };
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <h3>{product.handle}</h3>
          <h2>$ {product.variantPrice}</h2>
          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
