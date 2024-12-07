import React from "react";

const FlightBreadcrumb = () => {
  return (
    <section className="breadcrumbs-area breadcrumb-bg">
      <div className="container">
        <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
          Search Result{" "}
        </h1>
        <div className="breadcrumb-text">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-nav wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="breadcrumb listing">
              <li className="breadcrumb-item single-list">
                <a href="javascript:void(0)" className="single">
                  New Delhi (DEL) - Sydney (Any)
                </a>
              </li>
              <li className="breadcrumb-item single-list" aria-current="page">
                <a href="javascript:void(0)" className="single active">
                  2 travellers , Economy{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default FlightBreadcrumb;
