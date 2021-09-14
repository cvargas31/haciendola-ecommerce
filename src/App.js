import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Collections from "./components/Collections/Collections";
import CollectionProducts from "./components/Collections/CollectionProducts";
import Cart from "./components/Cart/Cart";
import Login from "./components/User/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Dashboard from "./components/User/Dashboard";
import OrderDetails from "./components/User/Orders/OrderDetails";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:handle" exact component={SingleProduct} />
            <Route path="/collections" exact component={Collections} />
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/products/getByCollectionHandle/:handle"
              exact
              component={CollectionProducts}
            />
            <Route path="/users/login" exact component={Login} />
            <PrivateRoutes
              path="/users/getOrders"
              exact
              component={Dashboard}
            />
            <PrivateRoutes
              path="/users/getOrderDetail/:orderId"
              exact
              component={OrderDetails}
            />
            <Route>Not Found</Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
