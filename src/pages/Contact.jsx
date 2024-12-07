import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import callcentergirl from "../assets/images/gallery/callcentergirl.png";

const Contact = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg">
        <div className="container">
          <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
            Contact Us
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
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="tour-details-section section-padding2">
        <div className="tour-details-area">
          <div className="tour-details-container">
            <div className="container">
              <div className="details-heading mb-30">
                <div className="d-flex flex-column">
                  <h4 className="contact-heading">
                    <b>FIRST FLIGHT PTY LTD</b>
                  </h4>
                  <div className="d-flex flex-wrap align-items-center gap-30 mt-16">
                    <div className="location">
                      <MapPin width={22} />
                      <div className="name">
                        57 Second street Brompton, SA, 5007, Australia
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="d-flex align-items-center flex-wrap gap-20">
                      <div className="count">
                        <Phone width={22} />
                        <p className="pera">
                          <a href="tel:+61450424186">
                            <b className="text-primary-500">
                              (+61) 450 424 186
                            </b>
                          </a>
                        </p>
                      </div>
                      <div className="divider"></div>
                      <div className="count">
                        <Mail width={22} />
                        <p className="pera">
                          <a href="mailto:info@First-Flight.com.au">
                            <b className="text-primary-500">
                              info@First-Flight.com.au
                            </b>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-8">
                  <h4 className="contact-heading mb-24">
                    Feel Free to Write us Anytime!
                  </h4>

                  <div className="donation-payment">
                    <div className="card-style box-shadow border-0">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="contact-form mb-24">
                              <label className="contact-label">
                                First Name
                              </label>
                              <input
                                className="form-control contact-input"
                                type="text"
                                placeholder="e.g Alex"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contact-form mb-24">
                              <label className="contact-label">Last Name</label>
                              <input
                                className="form-control contact-input"
                                type="text"
                                placeholder="e.g Last Name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="contact-form mb-24">
                              <label className="contact-label">
                                Contact No
                              </label>
                              <input
                                className="custom-form"
                                type="text"
                                placeholder="Your Phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contact-form mb-24">
                              <label className="contact-label">Email</label>
                              <input
                                className="form-control contact-input"
                                type="email"
                                placeholder="e.g example@gmail.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <textarea
                              className="custom-form-textarea"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Enter your message..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="form-group col-12 payment-gateway-wrapper mt-10">
                          <div className="remember-me terms-condition">
                            <label>
                              <input
                                className="checkbox-style"
                                type="checkbox"
                                value="remember"
                                name="remember"
                              />
                              <small>
                                I agree to all the
                                <a href="terms-condition.html">
                                  <span className="text-primary">Terms</span>
                                </a>{" "}
                                and{" "}
                                <a href="privacy-policy.html">
                                  <span className="text-primary">
                                    Privacy policy
                                  </span>
                                </a>
                              </small>
                              <span className="checkmark-style"></span>
                            </label>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="bg-primary-6000 px-5 py-3 inline-block mt-2 rounded-md hover:bg-primary-900 text-white"
                          >
                            Submit Now
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="date-travel-card position-sticky top-0">
                    <img
                      className="w-100 d-none d-lg-block tilt-effect radius-10"
                      src={callcentergirl}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
