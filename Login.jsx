
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelLogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5400/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    });
    
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };

  return (
    <>
      <div className="main-login-container">
        <div className="container">
          <div className="form">
            <div className="text-container">
              <h2>Log In</h2>
              <div className="underline"></div>
            </div>
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
            <p>
              <Link to="/forgetPassword" style={{textDecoration:"none"}}>
                <span >Forget Password ?</span>
              </Link>
            </p>
            <div className="btn">
              <button onClick={handelLogin}>Log In</button>
              <button>
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
            <p>
              <Link to="/signup"style={{textDecoration:"none"}}>
                You are not a member ? <span>Sign up</span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
