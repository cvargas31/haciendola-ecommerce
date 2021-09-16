import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCollections as listCollections } from "../../redux/actions/collectionActions";
import { Link } from "react-router-dom";

const Collections = () => {

  const dispatch = useDispatch()
  const getCollections = useSelector((state) => state.collections);
  const { collections, loadingCollections, errorCollections } = getCollections;
  

  useEffect(() => {
    dispatch(listCollections());
  }, [dispatch])

  console.log(collections, loadingCollections, errorCollections)
  return (
    <>
      {/* Loading Collections Buttons */}
        <h1 style={{ textAlign: "center", margin: "50px 0" }}>Colleciones</h1>
        {loadingCollections ? (
          <h2>Loading...</h2>
        ) : errorCollections ? (
          <h2>{errorCollections}</h2>
        ) : (
          <div className="collection-buttons">
            {collections.map((collection) => (
              <button key={collection.handle} className="collection-btn">
                <Link
                  to={`/products/getByCollectionHandle/${collection.handle}`}
                >
                  {collection.handle}
                </Link>
              </button>
            ))}
          </div>
        )}
      </>
  )
}

export default Collections
