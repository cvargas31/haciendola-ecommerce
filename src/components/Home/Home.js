import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { getCollections as listCollections } from "../../redux/actions/collectionActions";
import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../layout/Banner";
import ProductCard from "../Products/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  // Data from store
  const getProducts = useSelector((state) => state.getProducts);
  const getCollections = useSelector((state) => state.collections);

  // Destructuring data from store
  const { products, loading, error } = getProducts;
  const { collections, loadingCollections, errorCollections } = getCollections;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listCollections());
  }, [dispatch]);


  return (
    <div>
      <Banner title="Homepage" />
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div className="homepage-container">
            <h1 style={{ textAlign: "center" }}>Nuestros Best Sellers</h1>
            <div className="cards-container">
              {products.map((product) => (
                <ProductCard
                  title={product.title}
                  image={product.imageSrc}
                  price={product.variantPrice}
                  handle={product.handle}
                  key={product.variantSku}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <>
        <h1 style={{ textAlign: "center" }}>Colleciones</h1>
        {loadingCollections ? (
          <h2>Loading...</h2>
        ) : errorCollections ? (
          <h2>{errorCollections}</h2>
        ) : (
          <div className="btn-container">
            {collections.map((collection) => (
              <div key={collection.handle} className="btn btn-gradient">
                <Link
                  to={`/products/getByCollectionHandle/${collection.handle}`}
                >
                  {collection.handle}
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
