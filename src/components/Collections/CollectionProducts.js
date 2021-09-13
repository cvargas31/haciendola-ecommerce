import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getCollectionsProducts } from "../../redux/actions/collectionActions";
import ProductCard from "../Products/ProductCard";
import Banner from "../layout/Banner";
import './CollectionProduct.css'

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
        <div className="collections-container">
        <div className="cards-container">
            {products.map((product) => (
              <ProductCard
                title={product.title}
                image={product.imageSrc}
                price={product.variantPrice}
                handle={product.handle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsProducts;
