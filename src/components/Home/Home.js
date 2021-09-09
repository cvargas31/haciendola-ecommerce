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

  const slideShow = () => {
    return (
      <div className="image-container">
        {products.map((product) => (
          <div className="image-body">
            <img src={product.imageSrc} alt={product.title} />
            <span className="description">
              {product.title.substring(0, 21)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listCollections());
  }, [dispatch]);

  console.log(products);
  return (
    <div>
      <Banner title="Homepage" />
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div className="card-container">
            <h1>Nuestros Best Sellers</h1>
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
      <div>
        <h1 style={{ textAlign: "center" }}>Colleciones</h1>
        {loadingCollections ? (
          <h2>Loading...</h2>
        ) : errorCollections ? (
          <h2>{errorCollections}</h2>
        ) : (
          <div className="btn-container">
            {collections.map((collection) => (
              <button key={collection.handle} className="btn btn-gradient">
                <Link
                  to={`/products/getByCollectionHandle/${collection.handle}`}
                >
                  {collection.handle}
                </Link>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
