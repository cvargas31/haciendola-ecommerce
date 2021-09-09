import "./CartItem.css"

const CartItem = ({title, price, quantity, imageUrl}) => {
  return (
    <div className="card-product">
      <img src={imageUrl} alt={title}/>
      <div className="card-product-infos">
        <h2>{title}</h2>
        <p>
          Total: <strong>$ {Intl.NumberFormat("es-MX").format(price)}</strong>.
        </p>
      </div>
      <div className="card-product-quantity">
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
