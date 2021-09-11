import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";
import {signIn, authenticate, isAuthenticated} from '../../auth/index'

const Login = () => {
  const [values, setValues] = useState({
    user: "",
    password: "",
    error: "",
    redirectToReferrer: false,
    loading: "",
  });

  const { user, password, error, redirectToReferrer, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signIn({ user, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.message, loading: false });
        console.log(error);
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        (<form>
          <label>Usermame</label>
          <input
            type="text"
            placeholder="username"
            onChange={handleChange("user")}
            value={user}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your password"
            onChange={handleChange("password")}
            value={password}
          />
          <br />
          <button onClick={clickSubmit}>Sign In</button>
        </form>)
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Login;
