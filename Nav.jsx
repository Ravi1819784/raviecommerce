import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { productContext } from "../App";

import "./Nav.css";

const Nav = () => {

  const navigate=useNavigate();

  const logout=()=>{
    localStorage.clear()
    navigate("/signup")
  }
  const [openMenubar, setOpenMenubar] = useState(false);

  const [openMenu, setOpenmenu] = useState(false);

  const { cartProduct, setCartProduct } = useContext(productContext);

  return (
    <>
      <div className="main-nav">
        <nav className="nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <div className="left-nav">ECART</div>
          </Link>
          <div className={`right ${openMenubar ? "open" : ""}`}>
            <ul className="nav-links">
              <Link
                to="/gadget"
                style={{ textDecoration: "none" }}
                onClick={() => setOpenMenubar(false)}
              >
                <li>GADGET</li>
              </Link>
              <Link
                to="/fashion"
                style={{ textDecoration: "none" }}
                onClick={() => setOpenMenubar(false)}
              >
                <li>FASHION</li>
              </Link>
            </ul>
          </div>

          <div className="ecart">
            <ul>
              {" "}
              <Link to="/cart">
                <li>
                  <BsCart2 className="eCart" />{" "}
                  <span className="cart-count">({cartProduct.length})</span>
                </li>
              </Link>
            </ul>
          </div>

          <li onClick={() => setOpenmenu(!openMenu)}>
            <CgProfile className="navprofile" />
          </li>

          {openMenu && (
            <div className="main-profile">
              <div className="profile">
                <ul>
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => setOpenmenu(false)}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                    onClick={() => setOpenmenu(false)}
                  >
                    <li>Contact</li>
                  </Link>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none" }}
                    onClick={() => setOpenmenu(false)}
                  >
                    <li>About</li>
                  </Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none" }}
                    onClick={() => setOpenmenu(false)}
                  >
                    <li>Login</li>
                  </Link>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none" }}
                    onClick={() => setOpenmenu(false)}
                  >
                    <li>SignUp</li>
                  </Link>

                       <Link
                    to="/signup"
                    style={{ textDecoration: "none" }}
                    onClick={() => setOpenmenu(false)}
                  >
                    <li onClick={logout}>Logout</li>
                  </Link>
                </ul>
                <div className="cross" onClick={() => setOpenmenu(false)}>
                  <RxCross1 className="cross-icon" />
                </div>
              </div>
            </div>
          )}


          <Link to="/admin">
            <li className="admin"></li>
          </Link>

          <Link to="/single-product">
            {" "}
            <li className="singleprodact"></li>{" "}
          </Link>
          {/* <Link to="/single-product/"></Link> */}
          <div
            className="menu-icon"
            onClick={() => setOpenMenubar(!openMenubar)}
          >
            {" "}
            {!openMenubar ? (
              <GiHamburgerMenu className="menu-bar" />
            ) : (
              <RxCross1 className="cross-menu-bar" />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
