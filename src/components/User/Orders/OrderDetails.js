import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOrderDetail } from "../../../redux/actions/orderActions";
import "./OrderDetails.css"

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const orderProductDetails = useSelector((state) => state.singleOrder.orders);
  const jwtToken = JSON.parse(localStorage.getItem("jwt")).token;

  useEffect(() => {
    dispatch(getOrderDetail(orderId, jwtToken));
  }, [dispatch, orderId,jwtToken]);

  return (
    <div>
      {orderProductDetails ? (
        <div>
          <h1>Productos</h1>
          {orderProductDetails.products.map((product, index) => (
            <div key={index}>
              <div className="order-product">
                <div className="order-product-left">
                  <span>Producto</span>
                  <h4>{product.title}</h4>
                </div>
                <div className="order-product-right">
                  <span>Subtotal</span>
                  <p>
                    <strong>
                      $ {Intl.NumberFormat("es-MX").format(product.price)}
                    </strong>
                  </p>
                </div >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span> Cantidades</span>
                  <h4>{product.quantity}</h4>
                </div>
              </div>
            </div>
          ))}
          <div className="order-summary-container">
            <h1>Resumen de la Orden</h1>
            <div>
              Direccion de envio: {orderProductDetails.orderDeliveryAdress}
            </div>
            <div className="order-product-center">
              <span>Fecha de pedido:</span>
              <h4>{orderProductDetails.orderDate}</h4>
            </div>
            <div>
              <strong>
                Total: ${Intl.NumberFormat("es-MX").format(orderProductDetails.totalOrderPrice)}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

export default OrderDetails;
