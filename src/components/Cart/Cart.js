import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css"

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  const { cartItems } = cart;

console.log(cartItems)
  const cartTotal = () => {
    return cartItems.reduce((accumulator, item) => Number(accumulator) + Number(item.price), 0)
  }
  console.log(cartTotal())
  

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2>
          Cart is empty..<Link to="/">Go Back</Link>
        </h2>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                title={item.title}
                price={item.price}
                quantity={item.qty}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <div className="cart-total">
            <h6>Subtotal</h6>
            <p>$ {Intl.NumberFormat("es-MX").format(cartTotal())}</p>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
