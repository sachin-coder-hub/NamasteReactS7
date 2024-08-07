import { LOG_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between bg-slate-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="logo w-32" src={LOG_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 p-2 font-bold">{loggedInUser}</li>
          <li className="px-4  hover:bg-orange-300  rounded-lg p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:bg-orange-300 rounded-lg p-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:bg-orange-300 rounded-lg p-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 hover:bg-orange-300 rounded-lg p-2">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>

          <button
            className="login-btn bg-slate-900 text-white rounded-lg p-2 mx-1"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
