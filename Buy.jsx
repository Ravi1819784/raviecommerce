import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const Buy = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5400/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/login");
        alert("form submit successfully")
  };

  return (
    <>
      <div className="main-signup-container">
        <div className="container">
          <div className="form">
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn">
              <button>
                {" "}
                <Link to="/login">Log In</Link>
              </button>
              <button onClick={collectData}>
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
            <p>
              <Link to="/login" style={{ textDecoration: "none" }}>
                You are a member ? <span>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;

