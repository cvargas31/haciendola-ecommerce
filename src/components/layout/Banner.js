import "./Banner.css"

const Banner = ({title}) => {
  return (
    <div className="banner" style={{backgroundImage: "url(https://images.unsplash.com/photo-1444362408440-274ecb6fc730?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8) "}}>
      <div className="banner__container">
        <h1>
          <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
