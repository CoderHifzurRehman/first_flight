import React from "react";

import logo from "../assets/images/logo/logo.png";

const Signup = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg">
        <div className="container">
          <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
            Register{" "}
          </h1>
          <div className="breadcrumb-text">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="breadcrumb listing">
                <li className="breadcrumb-item single-list">
                  <a href="index.php" className="single">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <a href="javascript:void(0)" className="single active">
                    Register{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="login-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="login-card">
                <div className="logo mb-40">
                  <a href="index.html" className="mb-30 d-block">
                    <img src={logo} alt="logo" className="changeLogo" />
                  </a>
                </div>
                <form action="#" method="POST">
                  <div className="contact-form mb-24">
                    <label className="contact-label">Name </label>
                    <input
                      className="form-control contact-input"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="contact-form mb-24">
                    <label className="contact-label">Email </label>
                    <input
                      className="form-control contact-input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="position-relative contact-form mb-24">
                    <label className="contact-label">Enter Password</label>
                    <input
                      type="password"
                      className="form-control contact-input password-input"
                      id="txtPasswordLogin"
                      placeholder="Enter Password"
                    />
                    <i className="toggle-password ri-eye-line"></i>
                  </div>

                  <div className="position-relative contact-form mb-24">
                    <label className="contact-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control contact-input password-input"
                      id="txtPasswordLogin2"
                      placeholder="Confirm Password"
                    />
                    <i className="toggle-password ri-eye-line"></i>
                  </div>

                  <a
                    href="javascript:void(0)"
                    className="btn-primary-fill justify-content-center w-100"
                  >
                    <span className="d-flex justify-content-center gap-6">
                      <span>Register</span>
                    </span>
                  </a>
                </form>

                <div className="login-footer mb-20">
                  <div className="create-account">
                    <p>
                      Already have an account?
                      <a href="login.php">
                        <span className="text-primary">Login</span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="sign-with">
                  <p className="text-paragraph">Or Sign in with</p>
                  <ul className="icon-login-section">
                    <li className="icon-login">
                      <a href="mailto:info@first-flight.com.au" target="_blank">
                        <i className="ri-mail-line"></i>
                      </a>
                    </li>
                    <li className="icon-login">
                      <a
                        href="https://www.facebook.com/AUFirstFlight"
                        target="_blank"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li className="icon-login">
                      <a href="https://x.com/FirstFlightAU" target="_blank">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li className="icon-login">
                      <a
                        href="https://www.instagram.com/aufirstflight/"
                        target="_blank"
                      >
                        {" "}
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
