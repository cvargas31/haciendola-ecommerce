import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
// import { getProductDetails } from "../../redux/actions/productActions";
import { getCollectionsProducts } from "../../redux/actions/collectionActions";
import { Link } from "react-router-dom";

const CollectionsProducts = () => {
  const dispatch = useDispatch();
  const { handle } = useParams();
  const productsDetails = useSelector((state) => state.collectionProducts);
  const { loading, products, error } = productsDetails;

  useEffect(() => {
    dispatch(getCollectionsProducts(handle));
  }, [dispatch, handle]);

  console.log(products, loading);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Colecciones</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.handle}>
              {product.title}
              <Link to={`/products/${product.handle}`} replace={false}>
                <button>Ver Producto</button>
                </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectionsProducts;
