import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ image, title, price,handle }) => {
  return (
    <div className="card">
      <img alt="carpet" src={image} />
      <h1>{title.substring(0, 21)}</h1>
      <p className="price">$ {Intl.NumberFormat("es-MX").format(price)}</p>
      <p className="card-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad,
        quae reprehenderit ullam aperiam omnis.
      </p>
      <Link to={`/products/${handle}`}>
        <button>View Product</button>
      </Link>
    </div>
  );
};

export default ProductCard;
