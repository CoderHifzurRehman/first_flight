import { PlaneTakeoff } from "lucide-react";
import React from "react";

const TopFlightRoute = () => {
  return (
    <section className="special-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-650 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                <br />
              </span>
              <h4 className="title">Top Domestic & International Tour</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="nav nav-pills trip-pills"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item trip-item" role="presentation">
                <button
                  className="nav-link trip-nav active"
                  id="pills-domestic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-domestic"
                  type="button"
                  role="tab"
                  aria-controls="pills-domestic"
                  aria-selected="true"
                >
                  Domestic
                </button>
              </li>
              <li className="nav-item trip-item" role="presentation">
                <button
                  className="nav-link trip-nav"
                  id="pills-international-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-international"
                  type="button"
                  role="tab"
                  aria-controls="pills-international"
                  aria-selected="false"
                >
                  International
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-domestic"
                role="tabpanel"
                aria-labelledby="pills-domestic-tab"
              >
                <div className="row g-4 relative z-0">
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Sydney Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Sylhet</h4>
                        <p className="from-pera line-clamp-1">
                          Osman Internatin...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Brisbane Airport
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">USA</h4>
                        <p className="from-pera line-clamp-1">
                          Istanbul Airport...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Melbourne Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">india</h4>
                        <p className="from-pera line-clamp-1">
                          Delhi Airport...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Gold Coast Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">UAE</h4>
                        <p className="from-pera line-clamp-1">
                          Dubai Airport...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Perth Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">canada</h4>
                        <p className="from-pera line-clamp-1">canada Airport</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Gold Coast Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">kolkata</h4>
                        <p className="from-pera line-clamp-1">
                          kolkata Airport
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-international"
                role="tabpanel"
                aria-labelledby="pills-international-tab"
              >
                <div className="row g-4">
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Adelaide Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">UAE</h4>
                        <p className="from-pera line-clamp-1">
                          Dubai Airport...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Cairns Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Usa</h4>
                        <p className="from-pera line-clamp-1">Usa Airport</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Darwin Internat...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Japan</h4>
                        <p className="from-pera line-clamp-1">
                          Narita Inter...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Melbourne Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Hongkok</h4>
                        <p className="from-pera line-clamp-1">
                          Hongkok Inter...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Brisbane Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Japan</h4>
                        <p className="from-pera line-clamp-1">
                          Narita Inter...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="#" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Sydney Airport...
                        </p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Canada</h4>
                        <p className="from-pera line-clamp-1">Canada Airport</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFlightRoute;
