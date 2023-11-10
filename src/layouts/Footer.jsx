import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <img className="shape1" src="/assets/images/footer/f-shape.png" alt />
        <img className="shape2" src="/assets/images/footer/flower01.png" alt />
        <img
          className="shape3"
          src="/assets/images/footer/right-shape.png"
          alt
        />
        <div className="newslater-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="newslater-container">
                  <div className="newslater-wrapper">
                    <div className="icon">
                      <img src="/assets/images/footer/n-icon.png" alt />
                    </div>
                    <p className="text">Happy Journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
