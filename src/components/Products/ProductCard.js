import { Link } from "react-router-dom";
import "./ProductCard.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const ProductCard = ({ image, title, price, handle }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img alt="carpet" src={image} />
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
