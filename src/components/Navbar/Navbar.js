import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import './Navbar.css'
import { isAuthenticated } from "../../auth";
const Navbar = () => {

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart



  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Ecommerce</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/collections">Colleciones</Link>
        </li>
        <li>
          <Link to="/cart" >
            <AiOutlineShoppingCart />
            Cart
            <span className="cart__badge">({cartItems.length})</span>
          </Link>
        </li>
        {!isAuthenticated() && (
        <li>
          <Link to="/users/login">Login</Link>
        </li>

        )}
      </ul>

      <div className="burger__menu">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
