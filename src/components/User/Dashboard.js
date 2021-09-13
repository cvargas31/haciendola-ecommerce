import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/orderActions";
import Banner from "../layout/Banner";
import { Link } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orders);
  const { loading, error, orders } = orderDetails;
  const jwtToken = JSON.parse(localStorage.getItem("jwt")).token;

  useEffect(() => {
    dispatch(getOrders(jwtToken));
  }, [dispatch, jwtToken]);
  console.log(orderDetails.orders);
  return (
    <>
      <Banner title="Ordenes de Usuario" />
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div>
            <h1 style={{textAlign: "center"}}>Ultimas Ordenes</h1>
            <div className="order-container">
              {orders.map((order) => (
                <>
                  <div className="order-product">
                    <div className="order-product-left">
                      <span>Id de la orden</span>
                      <h3>{order.orderId}</h3>
                    </div>
                    <div className="order-product-center">
                      <span>Fecha de pedido</span>
                      <h3>{order.orderDate}</h3>
                      <span>Cantidad de productos <strong>({order.products.length})</strong></span>
                    </div>
                    <div className="order-product-right">
                      <span>Precio Total</span>
                      <p>
                        Total:{" "}
                        <strong>
                          ${" "}
                          {Intl.NumberFormat("es-MX").format(
                            order.totalOrderPrice
                          )}
                        </strong>
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Link to={`/users/getOrderDetail/${order.orderId}`}>
                        <button>Ver Orden</button>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
