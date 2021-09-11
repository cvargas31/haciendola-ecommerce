import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/orderActions";
import Banner from "../layout/Banner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orders);
  const { loading, error, orders } = orderDetails;
  const jwtToken = JSON.parse(localStorage.getItem("jwt")).token;
  console.log(jwtToken);

  useEffect(() => {
    dispatch(getOrders(jwtToken));
  }, [dispatch, jwtToken]);
  console.log(JSON.stringify(orders));

  const ordersProducts = orders.map((order) => {
    return order.products.map((product) => product)
  })
  console.log(ordersProducts)
  return (
    <>
      <Banner title="User Orders" />
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div className="card-container">
            <h1>Ultimas Ordenes</h1>
            <ul>
              {orders.map((order) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                  }}
                >
                  <li>{order.orderDate}</li>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to={`/users/getOrderDetail/${order.orderId}`}><button>Ver Orden</button></Link>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
//  {product.products.map((items) => (
//                      <Link to={`/users/getOrderDetail/${items.orderId}`}> <button>{items.title}</button> </Link >
//                     ))
