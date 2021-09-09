import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  console.log(cartItems.length)
  return (
    <div>
      {cartItems.length === 0 ? (
        <h2>Cart is empty..<Link to="/">Go Back</Link></h2>
      ):(
        <h1>{cartItems.map((item) => <h6>{item.name}</h6>)}</h1>
      )}
    </div>
  )
}

export default Cart
