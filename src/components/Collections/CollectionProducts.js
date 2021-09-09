import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
// import { getProductDetails } from "../../redux/actions/productActions";
import { getCollectionsProducts } from "../../redux/actions/collectionActions";
import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import Banner from "../layout/Banner";


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
      <Banner title={handle}/>
      <h1 style={{ textAlign: "center" }}>Colecciones</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="card-container">
            <h1></h1>
            {products.map((product) => (
              <ProductCard
                title={product.title}
                image={product.imageSrc}
                price={product.variantPrice}
                handle={product.handle}
              />
            ))}
          </div>
      )}
    </div>
  );
};

export default CollectionsProducts;
