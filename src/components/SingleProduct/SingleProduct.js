import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const SingleProduct = ({ history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { handle } = useParams();
  const productDetails = useSelector((state) => state.singleProduct);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && handle !== product.handle) {
      dispatch(getProductDetails(handle));
    }
  }, [dispatch, product, handle, qty]);

  const addToCartHandler = () => {
    dispatch(addToCart(product.handle, qty));
    history.push("/cart");
  };

  const productQuantity = (quantity) => {
    return (
      <select value={qty} onChange={(e) => setQty(e.target.value)}>
        {[...Array(parseInt(quantity)).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="product-container">
          <div className="product-container-left">
            <img src={product.imageSrc} alt={product.title} />
          </div>
          <div className="product-container-right">
            <h3>{product.title}</h3>
            <h2>$ {Intl.NumberFormat("es-MX").format(product.variantPrice)}</h2>
            <p className="product-vendor">Vendor: {product.Vendor}</p>
            <p>
              {product.variantInventoryQty > 0 ? "Disponible" : "Out of Stock"}
            </p>
            <span>Quantity:</span>
            {product.variantInventoryQty > 0 ? (
              productQuantity(product.variantInventoryQty)
            ) : (
              <h2>Not Available..</h2>
            )}
          </div>
          <div className="product-button">
            {product.variantInventoryQty > 0 ? (
              <button onClick={addToCartHandler}>Add To Cart</button>
            ) : (
              <button disabled>Out Of Stock</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;