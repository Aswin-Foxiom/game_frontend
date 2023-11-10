import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextDatas } from "../context/ContextPage";

function Header() {
  let navigate = useNavigate();
  const { User, place } = useContext(ContextDatas);
  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="index.html">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <ul className="menu">
              <li>
                {User ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/profile");
                    }}
                  >
                    My Profile
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/login");
                    }}
                  >
                    Login / Sign up
                  </a>
                )}
                {/* <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Login / Sign up
                </a> */}
              </li>
              <li className="user-profile">
                <a href="#">
                  <img src="/assets/images/user-demo.png" alt />
                </a>
              </li>

              <li>
                <a href="#">{place}</a>
              </li>
              <li className="user-profile">
                <a href="#">
                  <span>
                    {" "}
                    <i class="fas fa-map-marker-alt"></i>{" "}
                  </span>
                </a>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
