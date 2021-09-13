import {useState} from 'react'
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart,AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import './Navbar.css'
import { isAuthenticated } from "../../auth";
const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const handleNavbarClick = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Ecommerce</h2>
      </div>

      <ul className={navbarOpen ? "navbar__links" : "navbar__links close"}>
        <li>
          <NavLink exact to="/"  activeClassName="active" >Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/collections" activeClassName="active" >Colleciones</NavLink>
        </li>
        <li>
          <NavLink exact to="/cart"  activeClassName="active" >
            <AiOutlineShoppingCart />
            Cart
            <span className="cart__badge">({cartItems.length})</span>
          </NavLink>
        </li>
        {isAuthenticated() && (
          <li>
            <NavLink exact to="/users/getOrders" activeClassName="active" >Dashboard</NavLink>
          </li>
        )}
        {!isAuthenticated() && (
        <li>
          <NavLink exact to="/users/login" activeClassName="active" >Login</NavLink>
        </li>
        )}
      </ul>

      <div className="burger__menu" onClick={handleNavbarClick}>
        {navbarOpen ? <AiOutlineClose /> : <GiHamburgerMenu /> }
      </div>
    </nav>
  );
};

export default Navbar;
