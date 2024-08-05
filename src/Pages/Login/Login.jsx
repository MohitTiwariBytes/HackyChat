import React from "react";
import "./Login.css";

// used login page design from old page EchoPlex......


const Login = () => {
  return (
    <div className="main-login">
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <h1>
              <z>Hacky Chat!</z>
            </h1>
          </div>
        </div>
        <div className="login-card">
          <div className="left">
            <div className="login-form">
              <div className="header">
                <h1>SignIn</h1>
              </div>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div className="button">
                <button>Enter</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login