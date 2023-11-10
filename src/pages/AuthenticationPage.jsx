import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

function AuthenticationPage() {
  const [islogin, setislogin] = useState(true);
  let navigate = useNavigate();
  return (
    <div>
      {/* ==========Preloader========== */}
      {/* ========== Login & Registation Section ========== */}
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="backto-home"
                >
                  <i className="fas fa-chevron-left" /> Back to Sip & Spark
                </a>
              </div>
              <div className="col-lg-7 "></div>
            </div>
          </div>
        </div>
        <div className="container">
          {islogin ? (
            <LoginForm islogin={islogin} setislogin={setislogin} />
          ) : (
            <RegisterForm islogin={islogin} setislogin={setislogin} />
          )}
        </div>
      </section>
    </div>
  );
}

export default AuthenticationPage;
