import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextDatas } from "../context/ContextPage";
import { ShowToast } from "../utils/Toast";

function HomePage() {
  let navigate = useNavigate();
  const { User } = useContext(ContextDatas);
  return (
    <div>
      <div className="search-overlay">
        <div className="close">
          <i className="fas fa-times" />
        </div>
        <form action="#">
          <input type="text" placeholder="Write what you want.." />
        </form>
      </div>
      {/* ==========Header-Section========== */}
      {/* ==========Banner-Section========== */}
      <section className="banner-section home2">
        <img className="img3" src="/assets/images/banner/aimg3.png" alt />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <h1 className="main-title wow fadeInLeft">Forever & Always</h1>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}
      {/* ==========Steps-Section========== */}
      <div className="steps-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="steps-section-inner wow fadeInUp">
                <div className="myCol1">
                  <h4 className="title">3 EASY STEPS</h4>
                  <p className="text">To Start a Serious Relationship</p>
                </div>
                <div className="myCol2">
                  <ul className="steps-list">
                    <li>
                      <div className="number">1</div>
                      <p className="label">Join</p>
                    </li>
                    <li>
                      <div className="number">2</div>
                      <p className="label">Search</p>
                    </li>
                    <li>
                      <div className="number">3</div>
                      <p className="label">Find Love</p>
                    </li>
                  </ul>
                </div>
                <div className="myCol3">
                  {User ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/find-your-partner");
                      }}
                      className="custom-button"
                    >
                      Find Mate
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        return navigate("/login");
                      }}
                      className="custom-button"
                    >
                      Find Mate
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flirting-section home2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Meet New People Today!
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Start Flirting
                  </h2>
                  <p>
                    In our modern day and age dating apps have become an
                    integral part of our lives. They allow you to check the
                    profile of singles living near you, to chat with them, to
                    meet them and maybe to fall in love.
                  </p>
                  <br />
                  <p>
                    If you’re searching for a simple dating app with free
                    features allowing to meet singles, you’re in good hands with
                    Pairko. With Pairko you get all you need from a mobile
                    dating app, which presents you thousands of users through
                    your smartphone in a very pleasant experience.
                  </p>
                </div>
                <a href="#" className="custom-button">
                  Seek Your Partner
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img">
                <img
                  className="bg-shape"
                  src="/assets/images/flirting/circle.png"
                  alt
                />
                <img src="/assets/images/flirting/illutration.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Start-Flirting-Section========== */}

      {/* ==========Features-Section========== */}
      <section className="feature-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    An Exhaustive List Of
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Amazing Features
                  </h2>
                  <p className="text wow fadeInUp">
                    To find meaningful connections, dates, and life partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-area">
          <div className="left-image"></div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="feature-lists">
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i1.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Simple to use</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i2.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Smart Matching</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i3.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Filter very fast</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i4.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Cool community</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Features-Section========== */}

      {/* ==========Newslater-Section========== */}
    </div>
  );
}

export default HomePage;
