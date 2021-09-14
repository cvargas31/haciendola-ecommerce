import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ image, title, price, handle }) => {
  
  return (
    <div className="card">
      <div className="card-img">
        <img
          alt="carpet"
          src={image}
          onError={(e) => {
            e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
            console.log(e)
          }}
        />
      </div>
      <div className="card-body">
        <div className="card-info">
          <h1 className="product-title">{title}</h1>
          <p className="price">$ {Intl.NumberFormat("es-MX").format(price)}</p>
        </div>
        <div className="card-button">
          <Link to={`/products/${handle}`}>
            <button>View Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
