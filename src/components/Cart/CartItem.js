import "./CartItem.css";

const CartItem = ({
  price,
  quantity,
  imageUrl,
  sku,
  removeItemCart,
  product,
}) => {
  return (
    <div className="card-product">
      <img src={imageUrl} alt={product} />
      <div className="card-product-infos">
        <h2>{product}</h2>
        <p>
          Total: <strong>$ {Intl.NumberFormat("es-MX").format(price * quantity)}</strong>.
        </p>
      </div>
      <div className="card-product-quantity">
        <p>Quantity: {quantity}</p>
      </div>
      <div>
        <button onClick={() => removeItemCart(product)}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
