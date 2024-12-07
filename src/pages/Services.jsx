import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg">
        <div className="container">
          <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
            Our Services
          </h1>
          <div className="breadcrumb-text">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="breadcrumb listing">
                <li className="breadcrumb-item single-list">
                  <Link to="/" className="single">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <a href="#" className="single active">
                    Our Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="news-area section-padding2">
        <div className="container">
          <div className="row g-4 mb-60">
            <div className="col-xl-12 col-lg-12">
              <h4 className="title mb-30">
                First-flight.com.au is an Australian-based travel company known
                for its reliability, custom-centric approach, and offering great
                deals on flight tickets.
              </h4>
              <p className="mb-10">
                {" "}
                Backed by a team of travel experts, we constantly endeavour to
                make your vacation memorable no matter where you want to go. Our
                flexible and cutting-edge modern tools help you to easily find
                and compare flights, airlines, and pricesin one place. You can
                easily change your travel dates and a clear price breakdown at
                every step to see what you are paying without any hidden cost.{" "}
              </p>

              <p className="mb-10">
                First-flight.com.au seamlessly connects millions of travellers
                across the globe with memorable experiences. Visitors can choose
                from various options to customize their journey with our flight
                search option.Whether you are looking for direct flights,
                one-way or return flights, multi-city flights, or last-minute
                deals we are here to offer you all in one place for domestic and
                international flight tickets.{" "}
              </p>

              <p className="mb-10">
                So, why do you go anywhere else? Call us now to save big and
                enjoy a memorable travel experience on a small budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
