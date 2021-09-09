import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { getCollections as listCollections } from "../../redux/actions/collectionActions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // Data from store
  const getProducts = useSelector((state) => state.getProducts);
  const getCollections = useSelector((state) => state.collections);

  // Destructuring data from store
  const { products, loading, error } = getProducts;
  const { collections, loadingCollections, errorCollections } = getCollections;

  const productsImg = () => {
    const images = []
    products.map((product) => images.push(product.imageSrc))
    return images
  }

  console.log(productsImg())


  useEffect(() => {
    dispatch(listProducts());
    dispatch(listCollections());
  }, [dispatch]);

  console.log(products);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Best Sellers</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.handle}>
                {product.title}
                <Link to={`/products/${product.handle}`}>Ver Producto</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Collections</h1>
        {loadingCollections ? (
          <h2>Loading...</h2>
        ) : errorCollections ? (
          <h2>{errorCollections}</h2>
        ) : (
          <ul>
            {collections.map((collection) => (
              <li key={collection.handle}>
                {collection.handle}
                <Link
                  to={`/products/getByCollectionHandle/${collection.handle}`}
                >
                  Ver Collecion
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <div>
        <h1 style={{ textAlign: "center" }}>Best Sellers</h1>
      </div> */}
    </div>
  );
};

export default Home;
