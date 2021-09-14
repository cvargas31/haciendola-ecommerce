import { useEffect, useState } from "react";
import { signIn, authenticate, isAuthenticated } from "../../auth/index";

const Login = ({history}) => {
  const [values, setValues] = useState({
    user: "",
    password: "",
    error: "",
    redirectToReferrer: false,
    loading: "",
  });

  const { user, password, error, redirectToReferrer } = values;

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

  useEffect(() => {
    if(isAuthenticated() && isAuthenticated() !== "undefined"){
      history.push('/')
    }
  }, [history])
  

  const redirectUser = () => {
    if (redirectToReferrer) {
      return history.push('/users/getOrders');
    }
  };

  return (
    <>
      <form>
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
      </form>
      {redirectUser()}
    </>
  );
};

export default Login;
