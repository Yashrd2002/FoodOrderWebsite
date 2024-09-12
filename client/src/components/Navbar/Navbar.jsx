import "./navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setshowLogin }) => {
  const { getTotalCartAmount, token, settoken, userName,url } =
    useContext(StoreContext);
  const [logo,setLogo]=useState(null);
  const naviate = useNavigate();
  const logout = () => {
    settoken("");
    localStorage.removeItem("token");
    naviate("/");
  };
  

  // eslint-disable-next-line no-unused-vars
  const [menu, setmenu] = useState("home");


  const getContent = async () => {
    const response = await axios.get(
      `${url}/api/content/getcontent`
    );


    if (response.data.success) {
      setLogo(
        `${url}/images/${response.data.data[0].Navbarlogo}`
      );
      
    } else {
      // toast.error(response.data.message);
    }
  };
  useEffect(() => {
    getContent();
  }, []);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setmenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="/#explore-menu"
          onClick={() => setmenu("menu")}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="/Myorders"
          // onClick={() => setmenu("mobile")}
          className={menu == "mobile" ? "active" : ""}
        >
         Orders
        </a>
        {/* <a
          href="#footer"
          onClick={() => setmenu("contact")}
          className={menu == "contact" ? "active" : ""}
        >
          contact
        </a> */}
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.cart} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setshowLogin(true)}>Sign in</button>
        ) : (
          <div className="nav-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-drop-down">
              <Link to={"/Myorders"}>
                <li>
                  <img src={assets.bag_icon} alt="" />
                  <p>orders</p>
                </li>
              </Link>

              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p onClick={logout}>{userName ? userName : "logout"}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
