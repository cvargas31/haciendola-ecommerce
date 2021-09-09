import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import './Navbar.css'
const Navbar = () => {

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart
  const cartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Ecommerce</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collections">Colleciones</Link>
        </li>
        <li>
          <Link to="/cart">
            <AiOutlineShoppingCart />
            Cart
            <span className="cart__badge">({cartCount()})</span>
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <div className="burger__menu">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
