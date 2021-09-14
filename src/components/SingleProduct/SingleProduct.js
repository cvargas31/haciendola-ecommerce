import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import "./SingleProduct.css";
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

  const renderProduct = () => {
    const { imageSrc, title, variantPrice, Vendor, variantInventoryQty } =
      product;
    return (
      <div className="product-container">
        <div className="product-container-left">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="product-container-right">
          <h3>{title}</h3>
          <h2>$ {Intl.NumberFormat("es-MX").format(variantPrice)}</h2>
          <p className="product-vendor">Vendor: {Vendor}</p>
          <p>{variantInventoryQty > 0 ? "Disponible" : "Out of Stock"}</p>
          {variantInventoryQty > 0 && productQuantity(variantInventoryQty)}
          <div className="product-button">
            {variantInventoryQty > 0 ? (
              <button  onClick={addToCartHandler}>Add To Cart</button>
            ) : (
              <button disabled>Not available</button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        renderProduct()
      )}
    </div>
  );
};

export default SingleProduct;
