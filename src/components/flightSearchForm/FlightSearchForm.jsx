import React from "react";
import OnewaySearchForm from "../onewayForm/OnewaySearchForm";
import { ArrowLeftRight, PlaneTakeoff } from "lucide-react";

const FlightSearchForm = () => {
  return (
    <section className="plan-area-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="plan-section-three plan-shadow z-40 relative">
              <div className="choose-plan-nav">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="plan-link active"
                      id="tour-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tour"
                      type="button"
                      role="tab"
                      aria-controls="tour"
                      aria-selected="true"
                    >
                      <PlaneTakeoff size={21} /> One Way
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="plan-link"
                      id="book-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#book"
                      type="button"
                      role="tab"
                      aria-controls="book"
                      aria-selected="false"
                    >
                      <ArrowLeftRight size={21} /> Round
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="plan-link"
                      id="book-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#multicity"
                      type="button"
                      role="tab"
                      aria-controls="book"
                      aria-selected="false"
                    >
                      <PlaneTakeoff size={21} /> Multicity
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="tourTab">
                  <div
                    className="tab-pane fade show active"
                    id="tour"
                    role="tabpanel"
                    aria-labelledby="tour-tab"
                  >
                    {/* <div className="plan-section">
                      <div className="select-dropdown-section">
                        <div className="d-flex gap-10 align-items-center">
                          <i className="ri-map-pin-line"></i>
                          <h4 className="select2-title">Destination</h4>
                        </div>
                        <select className="destination-dropdown">
                          <option value="1">Sydney, Australia</option>
                          <option value="2">USA, Turkish </option>
                          <option value="3">Chittagong, Turkish </option>
                        </select>
                      </div>
                      <div className="divider plan-divider d-none d-lg-block"></div>

                      <div className="dropdown-section">
                        <div className="d-flex gap-10 align-items-center">
                          <i className="ri-time-line"></i>
                          <div className="custom-dropdown custom-date">
                            <h4 className="title">Date From</h4>
                            <div className="arrow">
                              <i className="ri-arrow-down-s-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="date-result">01/07/2024</div>
                      </div>

                      <div className="select-dropdown-section">
                        <div className="d-flex gap-10 align-items-center">
                          <i className="ri-wheelchair-line"></i>
                          <h4 className="select2-title">Cabin</h4>
                        </div>
                        <select className="destination-dropdown">
                          <option value="1">Economy Class</option>
                          <option value="2">Premium Economy Class</option>
                          <option value="3">Business Class</option>
                          <option value="4">First Class</option>
                        </select>
                      </div>
                      <div className="divider plan-divider d-none d-lg-block"></div>
                      <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="d-flex gap-10 align-items-center">
                          <i className="ri-user-line"></i>
                          <div className="custom-dropdown">
                            <h4 className="title">Guests</h4>
                            <div className="arrow">
                              <i className="ri-arrow-down-s-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="user-result">02</div>
                        <div className="user-picker dropdown-shadow">
                          <div className="user-category">
                            <div className="category-name">
                              <h4 className="title">Adults</h4>
                              <p className="pera">12years and above</p>
                            </div>
                            <div className="qty-container">
                              <button className="qty-btn-minus mr-1" type="button">
                                <i className="ri-subtract-fill"></i>
                              </button>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <button className="qty-btn-plus ml-1">
                                <i className="ri-add-fill"></i>
                              </button>
                            </div>
                          </div>
                          <div className="user-category">
                            <div className="category-name">
                              <h4 className="title">Children</h4>
                              <p className="pera">2-11 years</p>
                            </div>
                            <div className="qty-container">
                              <button className="qty-btn-minus mr-1" type="button">
                                <i className="ri-subtract-fill"></i>
                              </button>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <button className="qty-btn-plus ml-1">
                                <i className="ri-add-fill"></i>
                              </button>
                            </div>
                          </div>
                          <div className="user-category">
                            <div className="category-name">
                              <h4 className="title">infant</h4>
                              <p className="pera">belwo 2 years</p>
                            </div>
                            <div className="qty-container">
                              <button className="qty-btn-minus mr-1" type="button">
                                <i className="ri-subtract-fill"></i>
                              </button>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <button className="qty-btn-plus ml-1" type="button">
                                <i className="ri-add-fill"></i>
                              </button>
                            </div>
                          </div>
                          <div className="btn-section">
                            <a href="javascript:void(0)" className="done-btn">
                              Done
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="sign-btn">
                        <a href="search-result.php" className="btn-secondary-lg">
                          Search
                        </a>
                      </div>
                    </div> */}
                    <OnewaySearchForm />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="multicity"
                    role="tabpanel"
                    aria-labelledby="multicity-tab"
                  >
                    <div className="d-flex gap-16 flex-wrap mb-26">
                      <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="row g-4 justify-content-end">
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-two"></div>
                                </div>
                                <div className="destination-result line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-three"></div>
                                </div>
                                <div className="destination-result-three line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-arrow-left-right-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title month-result">
                                      February
                                    </h4>
                                    <div className="year-title year-result">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title text-right month-result-two">
                                      March
                                    </h4>
                                    <div className="year-title text-right year-result-two">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-calendar-2-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-wheelchair-line"></i>
                                  <h4 className="select2-title">Cabin</h4>
                                </div>
                                <select className="destination-dropdown">
                                  <option value="1">Economy</option>
                                  <option value="2">Premium Economy</option>
                                  <option value="3">Business Class</option>
                                  <option value="4">First Class</option>
                                </select>
                              </div>
                              <div className="dropdown-section position-relative user-picker-dropdown border">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-user-line"></i>
                                  <div className="custom-dropdown">
                                    <h4 className="select2-title">Guests</h4>
                                    <div className="arrow">
                                      <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-result">02</div>
                                <div className="user-picker dropdown-shadow">
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Adults</h4>
                                      <p className="pera">12years and above</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Children</h4>
                                      <p className="pera">2-11 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">infant</h4>
                                      <p className="pera">belwo 2 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button
                                        className="qty-btn-plus ml-1"
                                        type="button"
                                      >
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="btn-section">
                                    <a
                                      href="javascript:void(0)"
                                      className="done-btn"
                                    >
                                      Done
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-16 flex-wrap mb-26">
                      <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="row g-4 justify-content-end">
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-two"></div>
                                </div>
                                <div className="destination-result line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-three"></div>
                                </div>
                                <div className="destination-result-three line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-arrow-left-right-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title month-result">
                                      February
                                    </h4>
                                    <div className="year-title year-result">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title text-right month-result-two">
                                      March
                                    </h4>
                                    <div className="year-title text-right year-result-two">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-calendar-2-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-wheelchair-line"></i>
                                  <h4 className="select2-title">Cabin</h4>
                                </div>
                                <select className="destination-dropdown">
                                  <option value="1">Economy</option>
                                  <option value="2">Premium Economy</option>
                                  <option value="3">Business Class</option>
                                  <option value="4">First Class</option>
                                </select>
                              </div>
                              <div className="dropdown-section position-relative user-picker-dropdown border">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-user-line"></i>
                                  <div className="custom-dropdown">
                                    <h4 className="select2-title">Guests</h4>
                                    <div className="arrow">
                                      <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-result">02</div>
                                <div className="user-picker dropdown-shadow">
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Adults</h4>
                                      <p className="pera">12years and above</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Children</h4>
                                      <p className="pera">2-11 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">infant</h4>
                                      <p className="pera">belwo 2 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button
                                        className="qty-btn-plus ml-1"
                                        type="button"
                                      >
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="btn-section">
                                    <a
                                      href="javascript:void(0)"
                                      className="done-btn"
                                    >
                                      Done
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-16 flex-wrap mb-26">
                      <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="row g-4 justify-content-end">
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-two"></div>
                                </div>
                                <div className="destination-result line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-three"></div>
                                </div>
                                <div className="destination-result-three line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-arrow-left-right-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title month-result">
                                      February
                                    </h4>
                                    <div className="year-title year-result">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title text-right month-result-two">
                                      March
                                    </h4>
                                    <div className="year-title text-right year-result-two">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-calendar-2-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-wheelchair-line"></i>
                                  <h4 className="select2-title">Cabin</h4>
                                </div>
                                <select className="destination-dropdown">
                                  <option value="1">Economy</option>
                                  <option value="2">Premium Economy</option>
                                  <option value="3">Business Class</option>
                                  <option value="4">First Class</option>
                                </select>
                              </div>
                              <div className="dropdown-section position-relative user-picker-dropdown border">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-user-line"></i>
                                  <div className="custom-dropdown">
                                    <h4 className="select2-title">Guests</h4>
                                    <div className="arrow">
                                      <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-result">02</div>
                                <div className="user-picker dropdown-shadow">
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Adults</h4>
                                      <p className="pera">12years and above</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Children</h4>
                                      <p className="pera">2-11 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">infant</h4>
                                      <p className="pera">belwo 2 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button
                                        className="qty-btn-plus ml-1"
                                        type="button"
                                      >
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="btn-section">
                                    <a
                                      href="javascript:void(0)"
                                      className="done-btn"
                                    >
                                      Done
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12">
                            <div className="sign-btn">
                              <a
                                href="search-result.php"
                                className="btn-secondary-lg w-100 text-center"
                              >
                                Search
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="book"
                    role="tabpanel"
                    aria-labelledby="book-tab"
                  >
                    <div className="d-flex gap-16 flex-wrap mb-26">
                      <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="row g-4 justify-content-end">
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-two"></div>
                                </div>
                                <div className="destination-result line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="destination-dropdown-three"></div>
                                </div>
                                <div className="destination-result-three line-clamp-1">
                                  Istanbul Airport...
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-arrow-left-right-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title month-result">
                                      February
                                    </h4>
                                    <div className="year-title year-result">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <div className="custom-date-three">
                                    <h4 className="month-title text-right month-result-two">
                                      March
                                    </h4>
                                    <div className="year-title text-right year-result-two">
                                      Tuesday, 6, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="swap-icon">
                                <i className="ri-calendar-2-line"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12">
                            <div className="destination-flex">
                              <div className="select-dropdown-section">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-wheelchair-line"></i>
                                  <h4 className="select2-title">Cabin</h4>
                                </div>
                                <select className="destination-dropdown">
                                  <option value="1">Economy</option>
                                  <option value="2">Premium Economy</option>
                                  <option value="3">Business Class</option>
                                  <option value="4">First Class</option>
                                </select>
                              </div>
                              <div className="dropdown-section position-relative user-picker-dropdown border">
                                <div className="d-flex gap-10 align-items-center">
                                  <i className="ri-user-line"></i>
                                  <div className="custom-dropdown">
                                    <h4 className="select2-title">Guests</h4>
                                    <div className="arrow">
                                      <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-result">02</div>
                                <div className="user-picker dropdown-shadow">
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Adults</h4>
                                      <p className="pera">12years and above</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">Children</h4>
                                      <p className="pera">2-11 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button className="qty-btn-plus ml-1">
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="user-category">
                                    <div className="category-name">
                                      <h4 className="title">infant</h4>
                                      <p className="pera">belwo 2 years</p>
                                    </div>
                                    <div className="qty-container">
                                      <button
                                        className="qty-btn-minus mr-1"
                                        type="button"
                                      >
                                        <i className="ri-subtract-fill"></i>
                                      </button>
                                      <input
                                        type="text"
                                        name="qty"
                                        value="0"
                                        className="input-qty input-rounded"
                                      />
                                      <button
                                        className="qty-btn-plus ml-1"
                                        type="button"
                                      >
                                        <i className="ri-add-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="btn-section">
                                    <a
                                      href="javascript:void(0)"
                                      className="done-btn"
                                    >
                                      Done
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12">
                            <div className="sign-btn">
                              <a
                                href="search-result.php"
                                className="btn-secondary-lg w-100 text-center"
                              >
                                Search
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default FlightSearchForm;
