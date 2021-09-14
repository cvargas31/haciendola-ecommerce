import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";
import { removeFromCart } from "../../redux/actions/cartActions";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const removeItemCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const cartTotal = () => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.qty,
      0
    );
  };
  return (
    <div>
      {cartItems.length === 0 ? (
        <h2 style={{textAlign:"center", margin: "100px", color: "gray"}}>
          Cart is empty.. <br/><Link to="/" style={{color: "black"}}>Go Back</Link>
        </h2>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem
                price={item.price}
                quantity={item.qty}
                imageUrl={item.imageUrl}
                product={item.product}
                inStock={item.inStock}
                removeItemCart={removeItemCart}
                key={index}
              />
            ))}
          </div>
          <div className="cart-total">
            <h6>Subtotal</h6>
            <p>$ {Intl.NumberFormat("es-MX").format(cartTotal())}</p>
            <button className="product-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
