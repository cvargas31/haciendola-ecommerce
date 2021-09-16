import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import "./Home.css";
import Banner from "../layout/Banner";
import ProductCard from "../Products/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  // Data from store
  const getProducts = useSelector((state) => state.getProducts);

  // Destructuring data from store
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {/* Loading Best Sellers */}
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
    </>
  );
};

export default Home;
