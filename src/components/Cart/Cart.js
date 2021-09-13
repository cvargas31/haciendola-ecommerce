import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";
import { removeFromCart, addToCart } from "../../redux/actions/cartActions";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const removeItemCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const adjustItemQuantity = (product, qty) => {
    dispatch(addToCart(product, qty))
  }

  const cartTotal = () => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.qty,
      0
    );
  };
  console.log(cartItems)
  return (
    <div>
      {cartItems.length === 0 ? (
        <h2>
          Cart is empty..<Link to="/">Go Back</Link>
        </h2>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                price={item.price}
                quantity={item.qty}
                imageUrl={item.imageUrl}
                product={item.product}
                inStock={item.inStock}
                removeItemCart={removeItemCart}
                adjustItemQuantity={adjustItemQuantity}
              />
            ))}
          </div>
          <div className="cart-total">
            <h6>Subtotal</h6>
            <p>$ {Intl.NumberFormat("es-MX").format(cartTotal())}</p>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
